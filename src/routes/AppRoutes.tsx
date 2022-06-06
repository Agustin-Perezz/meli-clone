import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ProductsPage } from "../pages"

export const AppRoutes = () => {

  return (
    <BrowserRouter basename="/meli-clone">
      <Routes>
        <Route path="/" element={ <ProductsPage /> } />

        <Route path="*" element={ <Navigate replace to="/" /> }/> 
      </Routes>
    </BrowserRouter>
  )
}
