
import React from 'react';
import { PropsStateButtons } from './ListOpinions';

interface Props {
  type: 'all' | 'positive' | 'negative';
  setActiveType: React.Dispatch<React.SetStateAction<PropsStateButtons>>
}

export const NavButtons : React.FC<Props> = ({ type, setActiveType }) => {
  return (
    <ul className="opinions__nav">
      <button 
        className={`opinions__nav--button ${ type === 'all' && 'button--active' }`}
        onClick={() => setActiveType({ type: 'all' })} 
      > 
        Todas 
      </button>
      <button 
        className={`opinions__nav--button ${ type === 'positive' && 'button--active' }`}
        onClick={() => setActiveType({ type: 'positive' })} 
      > 
        Positivas 
      </button>
      <button 
        className={`opinions__nav--button ${ type === 'negative' && 'button--active' }`}
        onClick={() => setActiveType({ type: 'negative' })} 
      > 
        Negativas 
      </button>
    </ul>
)}
