import { StarIcon } from '@heroicons/react/outline';

interface Props {  
  total_reviews: number;
  rating_average: number;
}

export const Stars : React.FC<Props> = ({ total_reviews, rating_average }) => {
  return (
    <div className='stars'> 
      <StarIcon className={`star ${ rating_average >= 1 && 'star--active'}`}/>
      <StarIcon className={`star ${ rating_average >= 2 && 'star--active'}`}/>
      <StarIcon className={`star ${ rating_average >= 3 && 'star--active'}`}/>
      <StarIcon className={`star ${ rating_average >= 4 && 'star--active'}`}/>
      <StarIcon className={`star ${ rating_average >= 5 && 'star--active'}`}/>
      <span className="star__opinions"> ({ total_reviews }) </span>
    </div>  
)}
