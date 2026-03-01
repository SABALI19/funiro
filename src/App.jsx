import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import FavoritesPage from "./pages/FavoritesPage";
import ProfilePage from "./pages/ProfilePage";
import SearchProductPage from "./pages/SearchProductPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";




const App =  () => {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
        
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/profile' element={<ProfilePage/>} />
          <Route path='/favorites' element={<FavoritesPage/>} />
          <Route path='/search' element={<SearchProductPage/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
          
        </Routes>
        <Footer />
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App