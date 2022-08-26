import { Filter } from '../../context/filters-context/FiltersContext';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getProducts = async( nameProduct: string, filters: Filter[], activeSort: string ) => {

  try {
    const resp = await fetch(`${ BASE_URL }/items/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ product: nameProduct, filters, sort: activeSort })
    });
    const data = await resp.json();
    return data;

  } catch (error) {
    console.log( error );
  }

}