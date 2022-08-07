import style from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext, useState } from 'react'
import CartContext from '../../store/cartContext'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = (props) => {
  const cartContext = useContext(CartContext)
  const [isCheck, setIsCheck] = useState(false)

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id)
  }
  const cartItemAddHandler = (item) => {
    cartContext.addItem(item)
  }
  const orderhandler = () => {
    setIsCheck(true)
  }

  const totalAmount = `${cartContext.totalAmount} $`
  const cartItems = (
    <ul className={style['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  const actions = (
    <div className={style.actions}>
      <button className={style['button--alt']} onClick={props.hideCart}>
        Close
      </button>

      {cartContext.items.length > 0 && (
        <button className={style.button} onClick={orderhandler}>
          Order
        </button>
      )}
    </div>
  )

  return (
    <Modal onClose={props.hideCart}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amoount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheck && <Checkout cancel={props.onClose} />}
      {!isCheck && actions}
    </Modal>
  )
}
export default Cart
