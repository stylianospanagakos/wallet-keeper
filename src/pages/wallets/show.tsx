import NetworkChains from "../../components/NetworkChains";
import Wallet from "../../components/Wallet";
import BackHeader from "../../components/BackHeader";

function Show() {  
  return (
    <>
      <BackHeader/>
      <div className="flex space-x-3">
        <div className="w-2/12 flex flex-col">
          <NetworkChains/>
        </div>
        <div className="w-10/12 flex flex-col">
          <Wallet/>
        </div>
      </div>
    </>
  )
}

export default Show;

