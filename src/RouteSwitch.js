import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./components/App";
import Shop from "./components/Shop";
import Navbar from './components/Navbar';
import './styles/app.css'
import './styles/reset.css'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch