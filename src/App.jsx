import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Cart from './components/Cart'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import PageNotFound from './components/PageNotFound'

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Navbar />
          <Helmet>
            <title>Product API</title>
            <meta name="description" content="Product API Example" />
          </Helmet>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
