import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from 'react';
import { uiActions } from './store/uiSlice';
import {Fragment} from "react"
import Notification from './components/UI/notification';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.ui.cartisVisible); //to acess state from particular slice
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notifications)
  useEffect(() => {
    const sendData = async () => {
      dispatch(uiActions.setNotifications({
        status:"pending...",
        title:"sending...",
        message:"sending the data"
      }));
      const response = await fetch(
        "https://food-data-aff7b-default-rtdb.firebaseio.com/cart",
        {
          method:"put",
          body:JSON.stringify(cart),
        }
      );

      if(!response.ok){
        throw new Error("sending data to the cart got failed");
      }

      dispatch(uiActions.setNotifications({
        status:"success",
        title:"Success!",
        message:"sent the cart data sucessfully"
      }));

    }

    if(isInitial==true){
      isInitial=false;
      return;
    }
    sendData().catch(err => {
      dispatch(uiActions.setNotifications({
        status:"error",
        title:"Error!",
        message:"sending cart data got failed"
      }));
    })

  },[cart, dispatch])
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
