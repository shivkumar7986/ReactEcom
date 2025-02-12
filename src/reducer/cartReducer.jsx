const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((currElem) => {
        if (currElem.id === id + color) {
          let newAmount = currElem.amount + amount;
          if (newAmount >= currElem.max) {
            newAmount = currElem.max;
          }
          return {
            ...currElem,
            amount: newAmount,
          };
        }
        return currElem;
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      }
      return curElem;
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      }
      return curElem;
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updateItem = (state.cart || []).reduce((initialVal, currVal) => {
      let { amount } = currVal;
      initialVal += amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updateItem,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = (state.cart || []).reduce((initialVal, currElem) => {
      let { price, amount } = currElem;
      initialVal += price * amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }

  return state;
};

export default CartReducer;
