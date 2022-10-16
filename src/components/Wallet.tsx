import Card from "./Card";
import Loading from "./Loading";
import SkeletonWallet from "./SkeletonWallet";
import Button from "./Button";
import Badge from "./Badge";
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import WalletAdaptor from "../libs/WalletAdaptor";
import useWallet from "../hooks/useWallet";
import WalletHeader from "./WalletHeader";

function Wallet() {
  const navigate = useNavigate()
  const {wallet, truncatedAddress, selectedNetwork} = useWallet()
  const [balance, setBalance] = useState<number>(0)
  const [fiatBalance, setFiatBalance] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchAccountDetails() {
      setLoading(true)
      const adaptor = WalletAdaptor.getInstance().changeProvider(selectedNetwork.rpc);
      const amount = await adaptor.getBalance(wallet!.accounts[0])
      const fiatAmount = await adaptor.getFiatBalance(selectedNetwork.key, amount)
      setBalance(amount)
      setFiatBalance(fiatAmount)
      setLoading(false)
    }

    if (wallet) {
      fetchAccountDetails()
    }
  }, [wallet, selectedNetwork])

  if (!wallet) {
    return (
      <Card>
        <p>No wallet found.</p>
      </Card>
    )
  }

  return (
    <Card className="h-full relative">
      <div>
        {loading && <div className="absolute rounded bg-white inset-0 opacity-95 z-10 content-center flex h-full">
          <div className="m-auto">
            <Loading className="text-blue-500"/>
          </div>
        </div>}
      </div>
      <div>
        {loading && <SkeletonWallet/>}
        {!loading && <>
          <WalletHeader title={wallet.title} truncatedAddress={truncatedAddress}/>
          <div className="my-8 text-center space-y-4">
            <img src={selectedNetwork.icon} alt="Ethereum" className="w-20 mx-auto" />
            <div className="mt-5">
              <Badge>{selectedNetwork.name}</Badge>
            </div>
            <p className="text-3xl">{balance} {selectedNetwork.ticker}</p>
            <p className="text-sm text-gray-500">{fiatBalance.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
          </div>
          <div className="mt-14">
            <Button transparent onClick={() => navigate(`/wallets/${wallet.id}/private-key`)}>View Wallet Private Key</Button>
          </div>
        </>}
      </div>
    </Card>
  )
}

export default Wallet;

