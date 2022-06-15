const BASE_URL = 'http://localhost:3080/api';

export const getProducts = async( nameProduct: string ) => {

  console.log( JSON.stringify({ product: nameProduct }));
  try {

    const resp = await fetch(`${ BASE_URL }/items/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ product: nameProduct })
    });
    const data = await resp.json();
    return data;

  } catch (error) {
    console.log( error );
  }

}