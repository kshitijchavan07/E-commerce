const initalState = {
    cart:[]
};

const CartReducer = (state = initalState, action) => {

  switch (action.type) {
    case "ADD":
      /*return{
                ...state,
                cart:[...state.cart,action.payload]
            }*/
      const info = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );
      if (info >= 0) {
        state.cart[info].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };

        return {
          ...state,
          cart: [...state.cart, temp],
        };
      }

    case "DELETE":
      const data = state.cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cart: data,
      };
    default:
      return state;
  }


};

export default CartReducer;
