import { modelProduct } from '../../models/modelProduct';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getProduct = async( idProduct: string ) => {

  try {
    const response = await fetch(`${ BASE_URL }/items/${ idProduct }`, {
      method: 'GET',
    });
    const data: modelProduct = await response.json();
    return data;

  } catch (error) {
    console.log( error );
  }
}
