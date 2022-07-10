import { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItem;
    let updatedItems;
    let updatedAmount;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
      updatedAmount = state.totalAmount + action.item.price;
      console.log("adadasd");
    } else {
      updatedItems = state.items.concat(action.item);
      updatedAmount =
        state.totalAmount + action.item.amount * action.item.price;
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const valid = state.totalAmount - existingItem.price;
    let updatedAmount;
    if (valid > 0) {
      updatedAmount = valid;
    } else {
      updatedAmount = 0;
    }

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
