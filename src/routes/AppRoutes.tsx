import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/navbar"
import { ProductPage, ProductsPage } from "../pages"

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="/meli-clone">

      <div className="main__container">
        <NavBar />
        <Routes>
          <Route path="/items" element={ <ProductsPage /> } />
          <Route path="/item/:id_item" element={ <ProductPage /> } />
          <Route path="*" element={ <Navigate replace to="/meli-clone" /> }/> 
        </Routes>
      </div>

    </BrowserRouter>
  )
}
