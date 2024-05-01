// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {userDetails} = props
  const {headerText, description, className} = userDetails

  return (
    <li className={className}>
      <div>
        <h1 className="card-name"> {headerText} </h1>
        <p className="card-designation"> {description} </p>
        <button type="button" className="btn">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
