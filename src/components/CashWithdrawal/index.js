// Write your code here
import {useState} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

const CashWithdrawal = props => {
  const [amount, setAmount] = useState(2000)
  const {denominationsList} = props

  const withdrawal = id => {
    const currentValue = denominationsList.filter(e => e.id === id)
    console.log(currentValue[0].value)
    setAmount(amount - currentValue[0].value)
  }

  return (
    <div className="container">
      <div className="profile-container">
        <p className="image">s</p>
        <p className="name">Surah Williams</p>
      </div>
      <div className="balance">
        <p className="balance-label">Your Balance</p>
        <div className="value-container">
          <p className="value">{amount}</p>
          <p className="rupees">in Rupees</p>
        </div>
      </div>
      <div className="heading">
        <p className="withdrawal-heading">Withdraw</p>
        <p className="select-withdrawal-label">CHOOSE SUM (IN RUPEES)</p>
      </div>
      <ul>
        {denominationsList.map(eachItem => (
          <DenominationItem
            denominationItem={eachItem}
            withdrawal={withdrawal}
            key={eachItem.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default CashWithdrawal
