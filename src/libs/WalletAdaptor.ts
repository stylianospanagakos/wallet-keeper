import Web3 from "web3"
import networks from "../config/networks";
import TokenPriceInterface from "../interfaces/TokenPrice"

const API_URL = "https://api.coingecko.com/api/v3/"

class WalletAdaptor {
  static instance: WalletAdaptor | null = null;

  private constructor(
    public web3: Web3,
    protected tokenPrices: TokenPriceInterface | null = null
  ) {}

  static getInstance() {
    if (WalletAdaptor.instance == null) {
      WalletAdaptor.instance = new WalletAdaptor(new Web3());
    }
    return WalletAdaptor.instance;
  }

  changeProvider(rpc: string) {
    this.web3.setProvider(rpc)
    return this;
  }

  createWallet(accounts: number) {
    return this.web3.eth.accounts.wallet.create(accounts);
  }

  encrypt(wallet: any, password: string) {
    return wallet.encrypt(password);
  }

  decrypt(encrypted: any, password: string) {
    return this.web3.eth.accounts.wallet.decrypt(encrypted, password);
  }

  async getTokenPrices() {
    const networkIds = networks.map((network) => network.key).join(',');
    const response = await fetch(`${API_URL}simple/price?ids=${networkIds}&vs_currencies=usd`);
    this.tokenPrices =  await response.json();
  }

  async getBalance(address: string) {
    const amount = await this.web3.eth.getBalance(address)
    return Number(amount)
  }

  async getFiatBalance(key: string, amount: number) {
    if (!this.tokenPrices) {
      await this.getTokenPrices()
    }
    return Number(this.tokenPrices![key].usd * amount)
  }
}

export default WalletAdaptor;