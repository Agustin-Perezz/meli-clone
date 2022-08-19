import React from 'react'
import { ProductContext } from '../../../../context/product-context';

export const BoundleImagesDesktop : React.FC = () => {
  
  const { dataProduct } = React.useContext( ProductContext );

  const [activeImage, setActiveImage] = React.useState( dataProduct!.pictures[0] );

  return (
    <div className="images__container"> 
      <div className="images__column">
        { dataProduct!.pictures.map(( url_img, index ) => 
          <div 
            className={`images__box ${ activeImage === url_img && 'images__box--active'}`} 
            key={ index } 
            onClick={() => setActiveImage( url_img )}
          >
            <div className="images__box__content">
              <img src={ url_img } alt='img-product'  className='images__box__content--image' /> 
            </div>
          </div>
        )}
      </div>
      <div className="images__full">
          <img src={ activeImage } alt="image-active" className="images__full--image" />
      </div>
    </div>  
)}
