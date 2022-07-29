import { Attribute as AttributeProps } from '../../../models/modelProduct';
import { Attribute } from './Attribute';

interface Props { 
  attributes: AttributeProps[][];
}

export const ListAttributes : React.FC<Props> = ({ attributes }) => {
  const newAttributes = attributes;
  newAttributes.shift()
  return (
    <>
      {
        newAttributes.map(( groupAttributes, index ) => (
          <div className='attributes__group' key={ index }>
            {
              groupAttributes.map(( attribute_children, index ) => ( 
                <Attribute attribute={ attribute_children } key={ index } />
              ))
            }
          </div>
        ))
      }
    </>
  )
}