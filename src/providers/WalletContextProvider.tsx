import {createContext, useEffect, useState} from "react"
import WalletContextInterface from "../interfaces/WalletContext"
import Props from "../interfaces/Children"
import WalletInterface from "../interfaces/Wallet"
import NetworkInterface from "../interfaces/Network"
import networks from "../config/networks"
import {v4 as uuidv4} from "uuid"
import WalletAdaptor from "../libs/WalletAdaptor"

export const WalletContext = createContext<WalletContextInterface>({
  wallets: [],
  networks,
  selectedNetwork: networks[0],
  addWallet(title: string, password: string) {},
  switchNetwork(id: string) {}
})

function WalletContextProvider({children}: Props) {
  const [wallets, setWallets] = useState<WalletInterface[]>(JSON.parse(localStorage.getItem('wallets') ?? '[]'))
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkInterface>(networks[0]);

  useEffect(() => {
    if (wallets.length) {
      // store locally after update
      localStorage.setItem('wallets', JSON.stringify(wallets))
    }
  }, [wallets])

  const context: WalletContextInterface = {
    wallets,
    networks,
    selectedNetwork,
    addWallet(title: string, password: string) {
      const adaptor = WalletAdaptor.getInstance();
      const wallet = adaptor.createWallet(1)

      // create new wallet with encrypted keystore
      const localWallet: WalletInterface = {
        id: uuidv4(),
        title,
        accounts: [wallet[0].address],
        created: new Date(),
        encrypted: adaptor.encrypt(wallet, password)
      }

      // update state
      setWallets(prev => [...prev, localWallet])
    },
    switchNetwork(id: string) {
      const network = networks.find(network => network.id === id)
      if (network) {
        setSelectedNetwork(network)
      }
    }
  }

  return (
    <WalletContext.Provider value={context}>
      {children}
    </WalletContext.Provider>
  )
}

export default WalletContextProvider;