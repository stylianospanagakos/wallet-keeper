import Card from "../../components/Card";
import Button from "../../components/Button";
import {WalletContext} from "../../providers/WalletContextProvider"
import {useContext} from "react"
import {useNavigate, Link} from 'react-router-dom'
import Badge from "../../components/Badge";

function Index() {
  const navigate = useNavigate();
  const {wallets} = useContext(WalletContext);
  
  if (!wallets.length) {
    return (
      <>
        <div className="space-y-2">
          <h2 className="font-bold text-2xl tracking-wider text-blue-500">Keepr</h2>
          <p className="text-gray-500 text-sm">Click the button below to create your first crypto wallet.</p>
        </div>
        <div className="mt-6">
          <Button transparent onClick={() => navigate('/create')}>Create Wallet</Button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="text-end">
        <Button transparent onClick={() => navigate('/create')}>+ Add Wallet</Button>
      </div>
      <div className="mt-8">
        <ul className="space-y-5">
          {wallets.map(wallet => (
            <li key={wallet.id}>
              <Card>
                <div className="flex items-center">
                  <div className="flex items-center flex-1">
                    <h3 className="font-semibold mr-3">{wallet.title}</h3>
                    <Badge>
                      <>
                        {wallet.accounts.length} account{wallet.accounts.length > 1 ? 's' : ''}
                      </>
                    </Badge>
                  </div>
                  <Link to={`/wallets/${wallet.id}`} className="text-blue-800 text-sm">View</Link>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Index;

