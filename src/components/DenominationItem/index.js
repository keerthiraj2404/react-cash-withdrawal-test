// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, withdrawal} = props
  const {value, id} = denominationItem

  const onDenomination = () => {
    withdrawal(id)
  }

  return (
    <li className="button-container">
      <button type="button" className="button" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
