import { FiltersProvider } from "./context/filters-context"
import { ProductsProvider } from "./context/products-context"
import { AppRoutes } from "./routes"

export const MeliApp = () => {
  return (
    <FiltersProvider>
        <ProductsProvider>
            <AppRoutes />
        </ProductsProvider>
    </FiltersProvider>
  )
}
