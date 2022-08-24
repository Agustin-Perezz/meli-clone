interface Props { 
   description: string[];
}

export const Description : React.FC<Props> = ({ description }) => {

  return (
    <div className='description__container'> 
      <h3 className='description__title'> Descripción </h3>
      { 
        description.map(( paragraph, index ) => (
          <p className='description__paragraph' key={ index } > { paragraph } </p>
        ))
      }  
    </div>  
)}
