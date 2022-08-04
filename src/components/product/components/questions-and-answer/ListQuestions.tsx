import { Question as QuestionProps } from '../../../../models/modelProduct';
import { Question } from './Question';

interface Props { 
  questions: QuestionProps[];
}

export const ListQuestions : React.FC<Props> = ({ questions }) => {
  return (
    <div className='questions__container'> 
      { 
        questions.map(( q, index ) => (
          <Question question_object={ q } key={ index } />
        ))
      }
    </div>  
)}
