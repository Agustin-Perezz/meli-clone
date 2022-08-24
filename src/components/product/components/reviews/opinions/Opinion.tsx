import { Review } from '../../../../../models/modelProduct';
import { GroupStars } from '../stars/GroupStars';

import Like from '../../../../../assets/Icons/Like';
import Dislike from '../../../../../assets/Icons/DisLike';

interface Props {
  review: Review;
}

export const Opinion : React.FC<Props> = ({ review }) => {
  return (
    <div className='opinion'> 
      <GroupStars porcentage={ review.porcentage } aditional_className='star__mobile'/>
      <div className="opinion__header">
        <div className="opinion__header__title"> { review.title } </div>
        <button className="opinion__header__button">
          <span className="opinion__header__button--circle"/>
          <span className="opinion__header__button--circle"/>
          <span className="opinion__header__button--circle"/>
        </button>
      </div>
      <p className="opinion__paragraph"> 
        { review.content } 
        <span className='opinion__date'> { review.date_created } </span>
      </p>
      <div className="opinion__block">
        <div className="opinion__block--likes">
          <Like className='opinion__block--icon' />
          <span className='opinion__block--likes--txt'> { review.likes } </span>
        </div>
        <div className="opinion__block--dislikes">
          <Dislike className='opinion__block--icon'/>
          <span className='opinion__block--dislikes--txt'> { review.dislikes } </span>
        </div>
      </div>
    </div>  
)}
