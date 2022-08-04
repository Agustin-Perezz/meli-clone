import arrow_down from '../../../../assets/svg/arrow_down.svg';

interface Props {
  content_title: string;
}

export const BlockDropdown : React.FC<Props> = ({ content_title }) => {
  return (
    <div className="ui__container"> 
      <span className="ui__text"> { content_title } </span>
      <img className='ui__icon' src={ arrow_down } alt="arrow_down" />
    </div>  
)}

