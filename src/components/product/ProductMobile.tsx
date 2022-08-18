import React from 'react'

import { ProductContext } from "../../context/product-context"

import 
  { 
    Header,
    BoundleImagesMobile,
    ButtonsInformation, 
    GeneralInformation,
    Trader,
    Attributes,
    Description,
    PaymentsMethods,
    QuestionsAndAnswer,
    Reviews
  } from "./components/";

export const ProductMobile = () => {

  const { dataProduct } = React.useContext( ProductContext );

  return (
    <section className='product__mobile' data-testid='product-mobile-component'>
      <Header information_header={ dataProduct!.basic_info }/>
      <BoundleImagesMobile pictures={ dataProduct!.pictures }/>
      <GeneralInformation />
      <ButtonsInformation />
      <Trader />
      <Attributes />
      <Description description={ dataProduct!.description }/>
      <PaymentsMethods />
      <QuestionsAndAnswer />
      <Reviews />
    </section>
  )
}
