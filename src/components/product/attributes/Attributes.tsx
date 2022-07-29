import React, { useContext } from 'react'
import { ProductContext } from '../../../context/product-context'
import { ModalDropdown } from '../modal-dropdown';
import { Attribute } from './Attribute';
import { ListAttributes } from './ListAttributes';

export const Attributes = () => {

  const { dataProduct } = useContext( ProductContext );
  const { attributes, basic_info } = { ...dataProduct };
  const [previewAttribute, setPreviewAttribute] = React.useState( attributes![0] );
  

  console.log( previewAttribute )
  
  return (
    <div className='attributes__container'>
      <h2 className="attributes__title"> Características de { basic_info?.title } </h2>
      <h4 className='attributes__title--preview'> Características generales </h4>
      <div className='attributes__group preview '>
        {/* {
          previewAttribute.map(( attribute, index ) => ( 
            <Attribute attribute={ attribute } key={ index } />
          ))
        } */}
      </div>
      <ModalDropdown 
        children={ <ListAttributes attributes={ attributes! } /> } 
        dropdown_title='Ver más caracteristicas' 
      />
    </div>
  )
}
