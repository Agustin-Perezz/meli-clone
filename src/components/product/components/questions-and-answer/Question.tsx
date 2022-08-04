import React from 'react'
import { Question as QuestionProps } from '../../../../models/modelProduct';

import answer from '../../../../assets/images/answer.png';

interface Props { 
  question_object: QuestionProps;
}

export const Question : React.FC<Props> = ({ question_object }) => {
  return (
    <div className='question__container'> 
      <span className="question__value"> { question_object.question } </span>
      <div className="question__answer">
        <img src={ answer } alt="" className='question__answer__icon'/>
        <p className='question__answer__text'> { question_object.answer } </p>
      </div>
    </div>  
)}
