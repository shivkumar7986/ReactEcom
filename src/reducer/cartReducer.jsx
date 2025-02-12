const CartReducer = (state, action) => {
  // to add item to cart
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let existingProdcut = state.cart.find(
      (curItem) => curItem.id == id + color
    );

    if (existingProdcut) {
      let updatedProduct = state.cart.map((currElem) => {
        if (currElem.id == id + color) {
          let newAmount = currElem.amount + amount;
          if (newAmount >= currElem.max) {
            newAmount = currElem.max;
          }
          return {
            ...currElem,
            amount: newAmount,
          };
        } else {
          return currElem;
        }
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

  // to set increment and decrement

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log(curElem);
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
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
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  // to remove individual item from cart
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to clear cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // to find total item in cart
  if (action.type === "CART_TOTAL_ITEM") {
    let updateItem = state.cart.reduce((initialVal, currVal) => {
      let { amount } = currVal;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updateItem,
    };
  }

  // to get subtotal
  if ((action.type = "CART_TOTAL_PRICE")) {
    let total_price = state.cart.reduce((initialVal, currElem) => {
      let { price, amount } = currElem;
      initialVal = initialVal + price * amount;
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
