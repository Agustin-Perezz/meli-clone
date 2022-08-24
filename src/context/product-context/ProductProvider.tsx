import React from 'react';
import { useParams } from 'react-router-dom';
import { modelProduct } from '../../models/modelProduct';
import { ProductContext } from './ProductContext';
import { getProduct } from '../../services/products/getProduct';
interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ProductState {
  dataProduct: modelProduct | undefined;
}

const INIT_STATE : ProductState = {
  dataProduct: undefined,
};

export const ProductProvider : React.FC<Props> = ({ children }) => {

  const [state, setState] = React.useState( INIT_STATE );

  const { id_item } = useParams();

  React.useEffect(() => {
    const getData = async() => {
      const response = await getProduct( id_item! );
      setState({ dataProduct: response });
    }
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{
      ...state
    }}>
      { children }
    </ProductContext.Provider>
  );
}