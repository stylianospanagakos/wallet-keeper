import {useParams} from "react-router-dom"
import {useContext, useMemo} from "react"
import {WalletContext} from "../providers/WalletContextProvider"

function useWallet() {
  const {id} = useParams()
  const {wallets, selectedNetwork} = useContext(WalletContext)

  const wallet = useMemo(() => wallets.find(item => item.id === id), [id, wallets]);

  const truncatedAddress = useMemo(() => {
    if (wallet) {
     return `${wallet.accounts[0].slice(0, 5)}...${wallet.accounts[0].slice(-4)}`;
    }
    return '';
  }, [wallet]);
  
  return {wallet, truncatedAddress, selectedNetwork}
}

export default useWallet;