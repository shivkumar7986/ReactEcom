const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, color, amount, product } = action.payload;
      const existingProduct = state.cart.find(
        (curItem) => curItem.id === id + color
      );

      if (existingProduct) {
        const updatedProduct = state.cart.map((currElem) => {
          if (currElem.id === id + color) {
            const newAmount = Math.min(currElem.amount + amount, currElem.max);
            return { ...currElem, amount: newAmount };
          }
          return currElem;
        });
        return { ...state, cart: updatedProduct };
      } else {
        const cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0]?.url || "", // Handle missing images
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, cartProduct] };
      }
    }

    case "SET_DECREMENT": {
      const updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          const decAmount = Math.max(curElem.amount - 1, 1);
          return { ...curElem, amount: decAmount };
        }
        return curElem;
      });
      return { ...state, cart: updatedProduct };
    }

    case "SET_INCREMENT": {
      const updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          const incAmount = Math.min(curElem.amount + 1, curElem.max);
          return { ...curElem, amount: incAmount };
        }
        return curElem;
      });
      return { ...state, cart: updatedProduct };
    }

    case "REMOVE_ITEM": {
      const updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return { ...state, cart: updatedCart };
    }

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "CART_TOTAL_ITEM": {
      const total_item = (state.cart || []).reduce(
        (accumulator, currentItem) => {
          return accumulator + currentItem.amount;
        },
        0
      );

      return {
        ...state,
        total_item,
      };
    }

    case "CART_TOTAL_PRICE": {
      const total_price = (state.cart || []).reduce(
        (accumulator, currentItem) => {
          return accumulator + currentItem.price * currentItem.amount;
        },
        0
      );

      return {
        ...state,
        total_price,
      };
    }

    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
};

export default CartReducer;
