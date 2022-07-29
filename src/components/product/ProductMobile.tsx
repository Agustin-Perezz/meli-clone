import { useContext } from "react"
import { ProductContext } from "../../context/product-context"
import { ButtonsInformation, GeneralInformation } from "./general-information"
import { BoundleImagesMobile } from "./boundle-images"
import { Description } from "./description"
import { Attributes } from "./attributes"
import { Header } from "./header"
import { Trader } from "./trader"
import { PaymentsMethods } from "./payments-methods"

export const ProductMobile = () => {

  const { dataProduct } = useContext( ProductContext );

  return (
    <section className='product__mobile'>
      <Header information_header={ dataProduct!.basic_info }/>
      <BoundleImagesMobile pictures={ dataProduct!.pictures } />
      <GeneralInformation />
      <ButtonsInformation />
      <Trader />
      <Attributes />
      <Description description={ dataProduct!.description }/>
      <PaymentsMethods />
    </section>
  )
}
