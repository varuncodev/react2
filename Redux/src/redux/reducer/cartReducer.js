
const intialState = {
  cart: [],
  
};

export const cartReducer = (state = intialState, action) => {
  if (action.type === "ADD_TO_CART") {
    // console.log("added product reducer",action.payload)
    return state;
  }
   else {
    return state;
  }
};
