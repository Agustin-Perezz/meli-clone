import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ProductPage, ProductsPage } from "../pages"

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="/meli-clone">
      <Routes>
        <Route path="/items" element={ <ProductsPage /> } />
        <Route path="/item/:id_item" element={ <ProductPage /> } />
        
        <Route path="*" element={ <Navigate replace to="/" /> }/> 
      </Routes>
    </BrowserRouter>
  )
}
