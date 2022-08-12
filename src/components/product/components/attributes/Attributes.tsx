import { useContext } from 'react'
import { ProductContext } from '../../../../context/product-context'
import { ModalDropdown } from '../../components/modal-dropdown';
import { Attribute } from './Attribute';
import { ListAttributes } from './ListAttributes';

export const Attributes = () => {

  const { dataProduct } = useContext( ProductContext );
  const { list_attributes, basic_info } = { ...dataProduct };
  
  return (
    <div className='attributes__container'>
      <h2 className="attributes__title"> Características de { basic_info?.title } </h2>
      <h4 className='attributes__title--preview'> Características generales </h4>
      <div className='attributes__group'>
        {
          list_attributes!.previewAttribute.map(( attribute, index ) => ( 
            <Attribute attribute={ attribute } key={ index } />
          ))
        }
      </div>
      <ModalDropdown 
        children={ <ListAttributes attributes={ list_attributes!.attributes } /> } 
        dropdown_title='Ver más caracteristicas' 
      />
    </div>
  )
}
