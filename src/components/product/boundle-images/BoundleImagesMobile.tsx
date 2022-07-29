import { ShareIcon } from '@heroicons/react/outline';

interface Props { 
  pictures: string[]; 
}

export const BoundleImagesMobile : React.FC<Props> = ({ pictures }) => {
  return (
    <div className='carousel__container'> 
      <div className='carousel'>
        { 
          pictures.map(( img, index ) => (
            <div className='carousel__item' key={ index }>
              <img src={ img } className='carousel__item__image' alt='img_product' />
            </div>
          ))
        }
      </div>
      <ShareIcon className='carousel__icon'/>
    </div>  
)}
