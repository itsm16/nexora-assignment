import { Route, Routes } from 'react-router'
import './App.css'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import Layout from './Layout'

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route index element={<ProductsPage/>}/>
      <Route path='/:id' element={<ProductsPage/>}/>
      <Route path='/cart/:id' element={<CartPage/>}/>
      </Route>
    </Routes>
  )
}

export default App

