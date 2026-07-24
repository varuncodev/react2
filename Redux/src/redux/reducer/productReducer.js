
const intialState = {
  products: [],
  count: 0,
};

export const productReducer = (state = intialState, action) => {
  if (action.type === "ADD_PRODUCT") {
    // console.log("added product reducer",action.payload)
    return {
        ...state,
      products: [...state.products, action.payload],
    };
  }
  if (action.type === "INCREMENT") {
    
    return {
      ...state,
      count: state.count + 1,
    };
  } else {
    return state;
  }
};
