
import React from 'react';

import not_found from '../../../assets/images/not-found-image.jpg';

export const NotFoundProduct : React.FC<{}> = ({}) => {
  return (
    <div className='not-found__container'> 
      <img src={ not_found } alt="not-found" className='not-found__img'/>
      <h4> busca otra cosa </h4>
    </div>  
)}
