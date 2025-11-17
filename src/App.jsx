import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";



const App =  () => {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/products/:id' element={<ProductPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App