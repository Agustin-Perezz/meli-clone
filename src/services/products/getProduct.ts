import { modelProduct } from '../../models/modelProduct';
const BASE_URL = 'http://localhost:3080/api';


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
