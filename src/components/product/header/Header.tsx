import { BasicInfo } from '../../../models/modelProduct';
import { StarIcon } from '@heroicons/react/outline';
import { Stars } from './Stars';

interface Props { 
  information_header: BasicInfo;
}

export const Header : React.FC<Props> = ({ information_header : {
  condition,
  sold_quantity,
  rating_average,
  title,
  total_reviews
}}) => {
  return (
    <div className='header'> 
      <div className="header__top">
        <div className='gruop'>
          <span className="header__top__condition"> { condition } </span>
          <span className="header__top__separator"> | </span>
          <span className="header__top__mount"> { sold_quantity } vendidos </span>
        </div>
        <Stars rating_average={ rating_average } total_reviews={ total_reviews }/>
      </div>
      <h3 className="header__title"> { title } </h3>
    </div>  
)}

