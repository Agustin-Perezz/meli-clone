import not_found from '../../../assets/svg/not-found.svg';

export const NotFoundProduct : React.FC = () => {
  return (
    <div className='not-found__container'> 
      <img src={ not_found } alt="not-found" className='not-found__img'/>
      <div className="not-found__block">
        <h2 className='not-found__block--text'>No hay publicaciones que coincidan con tu búsqueda.</h2>
        <span className='not-found__block--subtitle'>Revisá la ortografía de la palabra.</span>
        <span className='not-found__block--subtitle'>Utilizá palabras más genéricas o menos palabras.</span>
        <span className='not-found__block--subtitle'>Navegá por las categorías para encontrar un producto similar</span>
      </div>
    </div>  
)}
