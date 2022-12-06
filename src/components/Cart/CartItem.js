import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

const CartItem = (props) => {
  const { title, quantity, totalprice, price,id} = props;
  const dispatch = useDispatch();

  const removeitemhandler = () => {
    dispatch(cartActions.removeitemfromCart(id));
  }

  const additemhandler = () => {
    dispatch(cartActions.additemtoCart({
      id,
      title,
      price

    }));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalprice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeitemhandler}>-</button>
          <button onClick={additemhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
