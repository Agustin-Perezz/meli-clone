import { RatingLevel } from '../../../../../models/modelProduct';

interface Props { 
  rating_levels: RatingLevel[];
  show: boolean;
}

export const GroupStarsPorcentage : React.FC<Props> = ({ rating_levels, show }) => {
  return (
    <ul className={`porcentage__container ${ show === true && 'porcentage__container--show'}`}> 
      {  
        rating_levels.map(( porcentage, index ) => (
          <li className='porcentage__item' key={ index }>
            <div className='porcentage__block'>
              <span className='porcentage__item__text'> { 5-index } estrellas </span>
            </div>
            <div className="porcentage__item__var">
              <div className="porcentage__item__var--width" style={{ 'width': `${porcentage.porcentage_width}%` }} />
            </div>
            <div className='ans'>
              <span className='porcentage__item__text'> { porcentage.value } </span>
            </div>
          </li>
        ))
      }
    </ul>  
)}
