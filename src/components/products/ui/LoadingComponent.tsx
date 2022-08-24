
import caja from '../../../assets/images/caja.png';

export const LoadingComponent = () => {
  return (
    <div className="loading">
      <div className="loader-animation">
        <img src={ caja } alt="" className="loader-animation-img" />
        <img src={ caja } alt="" className="loader-animation-img" />
        <img src={ caja } alt="" className="loader-animation-img" />
      </div>
      <span className="loader-animation-text"> Loading... </span>
    </div>
  )
}
