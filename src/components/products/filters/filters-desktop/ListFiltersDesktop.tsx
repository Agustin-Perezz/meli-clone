import { BasicInfoProduct } from '../../../../models/modelProducts';
import { AvailableFilter } from '../../../../models/resultProducts';
import { ListCategories } from '../../categories';
import { ListFiltersActiveDesktop } from '../list-filters-active';
import { FiltersDesktop } from './FiltersDesktop';

interface Props {
  filters: AvailableFilter[];
  basicInformationProduct: BasicInfoProduct;
  categories: string[];
}

export const ListFiltersDesktop: React.FC<Props> = ({ filters, basicInformationProduct, categories }) => {
  return (
    <div className="filters__desktop__container">
      <div className="filters__desktop__header">
        {categories.length !== 0 && <ListCategories categories={categories} />}
        <h1 className="filters__desktop__query"> {basicInformationProduct.queryProduct} </h1>
        <span className="filters__desktop__total">
          {basicInformationProduct.totalResults} resultados
        </span>
        <ListFiltersActiveDesktop />
      </div>
      {filters.map((filter, index) => (
        <FiltersDesktop filter={filter} key={index} />
      ))}
    </div>
  );
};
