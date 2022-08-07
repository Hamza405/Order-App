import style from './Checkout.module.css'

const Checkout = (props) => {
  const submit = (event) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={submit}>
      <div className={style.control}>
        <lable HtmlFor="name">Name</lable>
        <input type="text" id="name" />
      </div>
      <div className={style.control}>
        <lable HtmlFor="street">street</lable>
        <input type="text" id="street" />
      </div>
      <div className={style.control}>
        <lable HtmlFor="city">city</lable>
        <input type="text" id="city" />
      </div>
      <div className={style.control}>
        <lable HtmlFor="postalCode">postalCode</lable>
        <input type="text" id="postalCode" />
      </div>
      <button type="button">Oky</button>
      <button onClick={props.cancel}>Cancel</button>
    </form>
  )
}

export default Checkout
