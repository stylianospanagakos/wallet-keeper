import Card from "./Card";
import NetworkButton from "./NetworkButton";
import {WalletContext} from "../providers/WalletContextProvider"
import NetworkInterface from "../interfaces/Network"
import {useContext} from "react"

function NetworkChains() {
  const {networks, switchNetwork, selectedNetwork} = useContext(WalletContext)

  function handleNetworkChange(network: NetworkInterface) {
    switchNetwork(network.id)
  }

  return (
    <Card className="h-full">
      <ul>
        {networks.map(network => (
          <li key={network.id} className="py-4">
            <NetworkButton
              selected={network.id === selectedNetwork.id}
              name={network.name}
              size="w-12"
              alt={network.name}
              logo={network.icon}
              onClick={handleNetworkChange.bind(null, network)}
            />
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default NetworkChains;

