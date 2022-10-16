import {Routes, Route} from 'react-router-dom'
import IndexPage from "./pages/wallets"
import CreatePage from "./pages/wallets/create"
import ShowPage from "./pages/wallets/show"
import PrivateKeyPage from './pages/wallets/private-key'

function App() {
  return (
    <div className="container mx-auto p-8">
      <div className="w-[400px] mx-auto">
        <div className="text-center">
          <Routes>
            <Route path='/' element={<IndexPage/>}/>
            <Route path='/create' element={<CreatePage/>}/>
            <Route path='/wallets/:id' element={<ShowPage/>}/>
            <Route path='/wallets/:id/private-key' element={<PrivateKeyPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
