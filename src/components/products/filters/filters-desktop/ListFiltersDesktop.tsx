import React from 'react';
import { BasicInfoProduct } from '../../../../models/modelProducts';
import { AvailableFilter } from '../../../../models/resultProducts';
import { ListCategories } from '../../categories';
import { ListFiltersActiveDesktop } from '../list-filters-active';
import { FiltersDesktop } from './FiltersDesktop';

interface Props {
  filters: AvailableFilter[];
  basic_information: BasicInfoProduct;
  categories: string[];
}

export const ListFiltersDesktop: React.FC<Props> = ({ filters, basic_information, categories }) => {
  return (
    <div className="filters__desktop__container">
      <div className="filters__desktop__header">
        {categories.length !== 0 && <ListCategories categories={categories} />}
        <h1 className="filters__desktop__query"> {basic_information.queryProduct} </h1>
        <span className="filters__desktop__total"> {basic_information.totalResults} resultados </span>
        <ListFiltersActiveDesktop />
      </div>
      {filters.map((filter, index) => (
        <FiltersDesktop filter={filter} key={index} />
      ))}
    </div>
  );
};
