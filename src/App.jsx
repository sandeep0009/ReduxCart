import {Routes, Route} from "react-router-dom"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Login from "./components/Login"
import Protected from "./components/Protected"
import Header from "./components/Header"

const App = () => {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path='/' element={<Protected Component={Products}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App