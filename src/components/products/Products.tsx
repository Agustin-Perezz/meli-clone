import React, { useContext } from 'react';
import { ProductsContext } from '../../context/products-context';
import { ListFiltersMobile } from './filters/filters-mobile';
import { ListFiltersDesktop } from './filters/filters-desktop';

import { ListItems, NotFoundProduct } from './items';
import { LoadingComponent, Presentation } from './ui';

export const Products: React.FC = () => {
  const { data, isLoadingData } = useContext(ProductsContext);
  const initialQuery = localStorage.getItem('queryProduct');

  if (isLoadingData) return <LoadingComponent />;

  console.log('data: ', data);
  if (data !== null && data.basicInfoProduct.totalResults !== 0 && initialQuery !== null)
    return (
      <div className="products__main__container">
        <ListFiltersMobile filters={data.availableFilters} sorts={data.availableSorts} />
        <ListFiltersDesktop
          filters={data.availableFilters}
          basicInformationProduct={data.basicInfoProduct}
          categories={data.productCategories}
        />
        <ListItems
          products={data.listProducts}
          name={data.basicInfoProduct}
          sorts={data.availableSorts}
        />
      </div>
    );

  if (data?.basicInfoProduct.totalResults === 0) return <NotFoundProduct />;

  return <Presentation />;
};
