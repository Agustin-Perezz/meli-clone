
import Star from '../../../../../assets/Icons/Star';

interface Props { 
  porcentage: number;
  aditional_className?: string;
}

export const GroupStars : React.FC<Props> = ({ porcentage, aditional_className }) => {

  const stars = Array(5).fill(0);

  return (
    <div className='stars__container'> 
      { 
        stars.map(( s, index ) => ( 
          <Star 
            fill={`${ index+1 <= porcentage ? '#3483FA' : '#EFEFEF' }`} 
            className={`${ !aditional_className && 'stars__star' } ${ aditional_className }`}
            key={ index }
          /> 
        ))
      }
    </div>  
)}
