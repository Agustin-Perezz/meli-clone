import React from 'react';
import { Attribute as AttributesProps } from '../../../../models/modelProduct';

interface Props { 
  attribute: AttributesProps;
}

export const Attribute : React.FC<Props> = ({ attribute }) => {
  return (
    <div className='attributes__group__block' > 
      <span className="attributes__group__block--title"> { attribute.name } </span>
      <span className="attributes__group__block--value"> { attribute.value } </span>
    </div>
)}
