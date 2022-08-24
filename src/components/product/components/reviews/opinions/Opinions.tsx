import { ListReviews } from '../../../../../models/modelProduct';
import { Opinion } from './Opinion';

interface Props {
  type: 'all' | 'positive' | 'negative';
  opinions: ListReviews;
}

export const Opinions : React.FC<Props> = ({ type, opinions }) => {

  if ( opinions.all_reviews.length === 0 || opinions.positive_reviews.length === 0 || opinions.negative_reviews.length === 0 ) 
    return ( 
      <span className='empity-message'> Valla, parece que no hay opiniones. </span>
    )

  if ( type === 'positive' || type === 'negative' ) return (
    <ul className="list__opinions">
      { 
        type === 'positive' ? 
          opinions.positive_reviews.map((( opinion, index ) => 
            <Opinion review={ opinion } key={index} /> )
          )
          :
          opinions.negative_reviews.map((( opinion, index ) => 
            <Opinion review={ opinion } key={index} /> )
          )
      }
    </ul>
  )

  return (
    <ul className="list__opinions">
      { 
        opinions.all_reviews.map((( opinion, index ) => 
          <Opinion review={ opinion } key={index} /> )
        )
      }
    </ul>
)}
