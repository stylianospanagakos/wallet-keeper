import NetworkInterface from "../interfaces/Network"
import EthLogo from "../assets/eth-logo.svg"
import AvaxLogo from "../assets/avax-logo.svg"
import BnbLogo from "../assets/bnb-logo.svg"
import FantomLogo from "../assets/ftm-logo.svg"
import PolygonLogo from "../assets/polygon-logo.svg"
import EthTestLogo from "../assets/eth-test-logo.svg"

const networks: NetworkInterface[] = [
  {
    id: 'eth-main',
    key: 'ethereum',
    name: 'Ethereum',
    rpc: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    ticker: 'ETH',
    icon: EthLogo
  },
  {
    id: 'avax-main',
    key: 'avalanche-2',
    name: 'Avalanche C-Chain',
    rpc: 'https://api.avax.network/ext/bc/C/rpc',
    ticker: 'AVAX',
    icon: AvaxLogo
  },
  {
    id: 'bnb-main',
    key: 'binancecoin',
    name: 'BNB Smart Chain',
    rpc: 'https://bsc-dataseed1.binance.org/',
    ticker: 'BNB',
    icon: BnbLogo
  },
  {
    id: 'ftm-main',
    key: 'fantom',
    name: 'Fantom Opera',
    rpc: 'https://rpc.ankr.com/fantom/',
    ticker: 'FTM',
    icon: FantomLogo
  },
  {
    id: 'matic-main',
    key: 'matic-network',
    name: 'Polygon',
    rpc: 'https://polygon-rpc.com/',
    ticker: 'MATIC',
    icon: PolygonLogo
  },
  {
    id: 'eth-test',
    key: 'ethereum',
    name: 'Goerli Test',
    rpc: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    ticker: 'GoerliETH',
    icon: EthTestLogo
  },
]

export default networks;