import NetworkInterface from "./Network"
import WalletInterface from "./Wallet"

export default interface Interface {
  wallets: WalletInterface[];
  networks: NetworkInterface[];
  selectedNetwork: NetworkInterface;
  addWallet: (title: string, password: string) => void;
  switchNetwork: (id: string) => void;
}