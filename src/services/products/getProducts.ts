import { Filter } from '../../context/filters-context/FiltersContext';
const BASE_URL = 'http://localhost:3080/api';

export const getProducts = async( nameProduct: string, filters: Filter[], activeSort: string ) => {

  try {
    // console.log( filters )
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