import undo from '../../../../assets/images/undo.png';
import shield from '../../../../assets/images/proteger.png';
import trophy from '../../../../assets/images/trophy.png';
import hearth from '../../../../assets/svg/hearth.svg';
import share from '../../../../assets/svg/share.svg';

export const ButtonsInformation = () => {
  return (
    <div className="buttons__container">
      <div className="buttons">
        <button className="buttons__button buttons__button--buy"> Comprar ahora </button>
        <button className="buttons__button buttons__button--cart"> Agregar al carrito </button>
      </div>  
      <div className="extra">
        <div className="extra__group">
          <img src={ undo } alt="undo" className="extra__group__icon"/>
          <div className="extra__group__block">
            <span className="extra__group__block--text"> Devolución gratis. </span>
            <span className="extra__group__block--paragraph"> Tenés 30 días desde que lo recibís. </span>
          </div>
        </div>
        <div className="extra__group">
          <img src={ shield } alt="shield" className="extra__group__icon"/>
          <div className="extra__group__block">
            <span className="extra__group__block--text extra__variant"> Compra Protegida, </span>
            <span className="extra__group__block--paragraph"> recibí el producto que esperabas o te devolvemos tu dinero. </span>
          </div>
        </div>
        <div className="extra__group">
          <img src={ trophy } alt="trophy" className="extra__group__icon"/>
          <div className="extra__group__block">
            <span className="extra__group__block--text"> Mercado Puntos. </span>
            <span className="extra__group__block--paragraph"> Sumás 128 puntos. </span>
          </div>
        </div>
      </div>
      <div className="share separator">
        <div className="share__block">
          <img src={ hearth } alt="heart" className="share__icon" />
          <span className="share__text"> Agregar a favoritos </span>
        </div>
        <div className="share__block">
          <img src={ share } alt="share" className="share__icon" />
          <span className="share__text"> Compartir </span>
        </div>
      </div>
    </div>
  )
}
