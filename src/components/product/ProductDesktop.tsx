import React from 'react'
import { ProductContext } from "../../context/product-context"

import  
  { 
    Attributes,
    BoundleImagesDesktop, 
    ButtonsInformation, 
    Description, 
    GeneralInformation, 
    Header, 
    PaymentsMethods, 
    PaymentsWarranty, 
    QuestionsAndAnswer, 
    Reviews, 
    Trader
  } from "./components";

export const ProductDesktop = () => {

  const {dataProduct} = React.useContext(ProductContext)

  return (
    <section className="product__desktop">
      <div className="product__left--block">
        <BoundleImagesDesktop />
        <div className="product__left--block--content">
          <Attributes />
          <Description description={ dataProduct!.description } />
          <QuestionsAndAnswer />
          <Reviews />
        </div>
      </div>
      <div className="product__right--block">
        <div className="product__right--block--one">
          <Header information_header={ dataProduct!.basic_info } />
          <GeneralInformation />
          <ButtonsInformation />
        </div>
        <div className="product__right--block--two">
          <Trader />
        </div>
        <div className="product__right--block--three">
          <PaymentsWarranty />
          <PaymentsMethods />
        </div>
      </div>
    </section>
  )
}