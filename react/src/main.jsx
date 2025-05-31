import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Navbar.css'
import './Footer.css'
import './input.css'
import './product.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Profile from './Profile.jsx'
import Product from './Product.jsx'
import Solution from './Solution.jsx'
import ProductCard from './component/ProductCard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Profile />
    <Product />
    <ProductCard />
    <Solution />
    <Footer />
  </StrictMode>,
)
