import { ResultProduct, BasicInfo, AvailableSort } from '../../../models/resultProducts';
import { Item } from './Item';
import { ViewOptionsProducts } from './ViewOptionsProducts';
import { ListFiltersActiveMobile } from '../filters/list-filters-active';

import { ExclamationCircleIcon } from '@heroicons/react/outline';

interface Props {
  products: ResultProduct[];
  name: BasicInfo;
  sorts: AvailableSort[];
}

export const ListItems : React.FC<Props> = ({ products, name, sorts }) => {
  return (
    <div className='container__products'> 
      <div className="products__header">
        <h3 className='products__header__title'> { name.query } </h3>
        <ViewOptionsProducts sorts={ sorts } />
        <ListFiltersActiveMobile />
      </div>
      {
        products.map(( product, index ) => (
          <Item product={ product } key={ index } />
        ))
      }
      <div className="products__footer">
        <ExclamationCircleIcon className='products__footer__icon'/>
        <p className="products__footer__text"> El contenido esta limitado a 50 resultados. </p>
      </div>
    </div>
  );
}