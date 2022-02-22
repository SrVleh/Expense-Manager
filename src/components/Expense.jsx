
import { 
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatDate } from "../helpers";

import SavingsIcon from '../img/savings_icon.svg'
import FoodIcon from '../img/food_icon.svg'
import HealthIcon from '../img/health_icon.svg'
import HouseIcon from '../img/house_icon.svg'
import LeisureIcon from '../img/leisure_icon.svg'
import OtherIcon from '../img/other_icon.svg'
import SubscriptionsIcon from '../img/subscriptions_icon.svg'


const iconsDictionary = {
  savings : SavingsIcon,
  food : FoodIcon,
  house : HouseIcon,
  leisure : LeisureIcon,
  health : HealthIcon,
  subscriptions : SubscriptionsIcon,
  other : OtherIcon
}


const Expense = ({ expense }) => {

    const { category, name, quantity, id, date } = expense

    const leadingActions = () => {

    }

    const trailingActions = () => {
      
    }

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions = { leadingActions }
        trailingActions = { trailingActions }
      >
        <div className="expense shadow">
            <div className="expense-content">
                <img
                  src={ iconsDictionary[category] }
                  alt="Expense icon"
                />
                <div className="expense-description">
                    <p className="category">{ category }</p>
                    <p className="expense-name">{ name }</p>
                    <p className="expense-date">Added on: {''} <span>{ formatDate(date) }</span></p>
                </div>
            </div>
            <p className="expense-quantity">${ quantity }</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default Expense;
