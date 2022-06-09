import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

export const useForm = <T>( initialState: T ) => {

  const navigate = useNavigate();
	
	const [formData, setFormData] =  useState( initialState );

	const reset = () => {
		setFormData( initialState );
	}

	const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {

    setFormData( prev => ({
      ...prev,
      [ event.target.name ]: event.target.value,
    }));
    
    navigate(`?q=${ event.target.value }`);

	}

	return { 
    ...formData,

    formData,
    onChange,
    reset
  }
  
	
}