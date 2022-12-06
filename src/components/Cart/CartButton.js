import classes from './CartButton.module.css';
import {useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiSlice';
import { useSelector } from 'react-redux';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQty);
  const handlecartshow = () => {
    dispatch(uiActions.toggle()); // creates an action object;
  }

  return (
    <button onClick = {handlecartshow} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
