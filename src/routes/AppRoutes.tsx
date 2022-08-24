import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/navbar"
import { ProductPage, ProductsPage } from "../pages"
import { Presentation } from '../components/products/ui';

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="/meli-clone">

      <div className="main__container">
        <NavBar />
        <Routes>
          <Route path="/" element={ <Presentation />} />
          <Route path="items" element={ <ProductsPage /> } />
          <Route path="item/:id_item" element={ <ProductPage /> } />
          <Route path="/*" element={ <Navigate replace to="/" /> }/> 
        </Routes>
      </div>

    </BrowserRouter>
  )
}
