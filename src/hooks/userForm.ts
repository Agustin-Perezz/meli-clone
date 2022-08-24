import { ChangeEvent, useState } from "react"
import { useNavigate, useMatch } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from "../context/products-context";

export const useForm = ( initialState = { queryProduct: ''  } ) => {

  const { resetContext } = useContext( ProductsContext );

  const navigate = useNavigate();
  const match = useMatch('/item/:id_item');
	
	const [formData, setFormData] = useState( initialState );

	const reset = () => {
    localStorage.clear();
    resetContext();
    setFormData({ queryProduct: '' });
    navigate('/', { replace: true } );
	}

	const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {

    setFormData( prev => ({
      ...prev,
      [ event.target.name ]: event.target.value,
    }));
    
    !match && navigate(`items?q=${ event.target.value }`);

	}

	return { 
    ...formData,

    formData,
    onChange,
    reset
  }
}