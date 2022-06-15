const BASE_URL = 'http://localhost:3080/api';

export const getProduct = async( idProduct: string ) => {

  try {
    const resp = await fetch(`${ BASE_URL }/items/${ idProduct }`, {
      method: 'POST',
    });
    const data = await resp.json();
    return data;

  } catch (error) {
    console.log( error );
  }

}
