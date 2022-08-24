
import { ChevronRightIcon } from '@heroicons/react/outline';

interface Props {
  categories: string[]
}

export const ListCategories : React.FC<Props> = ({ categories }) => {
  return (
    <div className='categories__container'> 
      { 
        categories.map(( category, index ) => ( 
          <div className="category__box" key={ index }>
            <span className='category__box__name'> { category } </span>
            <ChevronRightIcon className='category__box__icon'/>
          </div>
        ))
      }
    </div>  
)}
