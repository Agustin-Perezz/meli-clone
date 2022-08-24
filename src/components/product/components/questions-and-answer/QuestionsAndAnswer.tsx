import { useContext } from "react"
import { ProductContext } from "../../../../context/product-context"

import { Question } from "./Question";
import { ListQuestions } from "./ListQuestions";
import { ModalDropdown } from "../modal-dropdown";

import help from '../../../../assets/images/help.png'
import search from '../../../../assets/images/search.png'

export const QuestionsAndAnswer = () => {

  const { dataProduct } = useContext( ProductContext );
  const{ list_questions } = { ...dataProduct };

  return (
    <div className='q-and-a__container'>
      <h4 className="q-and-a__title"> Preguntas y respuestas </h4>
      <div className="q-and-a__search">
        <h5 className="q-and-a__search__title"> Buscá lo que querés saber </h5> 
        <form className='q-and-a__search__form' onSubmit={(e:React.FormEvent<HTMLFormElement>) => {e.preventDefault()}}>
          <input 
            type="text" 
            className="q-and-a__search__input" 
            placeholder='Escribí una pregunta o palabra clave...' 
          />
          <div className="q-and-a__search__box">
            <img src={ search } alt="search" className="q-and-a__search__icon" />
          </div>
        </form>
      </div>
      { 
        list_questions?.questions.length ?  
          <>
            <div className="q-and-a__preview">
              <div className="q-and-a__preview__title"> Últimas realizadas </div>
              <Question question_object={ list_questions!.previewQuestion }/>
            </div>
            <ModalDropdown 
              dropdown_title={`Ver ${ list_questions!.questions.length } resultados más `}
              children={ <ListQuestions questions={ list_questions!.questions }/>} 
              additional_className='q-and-a__modal'
              custom_fz="q-and-a__fontsize"
            />
          </>
        : <span className="q-and-a__empty"> Parace que no hay preguntas. </span>
      }
      <div className="q-and-a__seller">
        <img src={ help } alt="" className="q-and-a__seller__icon" /> 
        <span className="q-and-a__seller__text"> ¿Cómo le pregunto al vendedor? </span> 
      </div>
    </div>
  )
}
