import {
  ALL_PROCESSOR_ITEM,
  ADD_RESULT,
  SHOPPING_CART,
  SHOPPING_CART_LENGTH,
  ADD_ID_ARR
} from "./../types/types";
const result = {
  allProcessorItem: [],
  arrProcessorItem: [],
  shoppingСart: [],
  shoppingСartLength: [],
  addIdArr: []
};

function addresult(state = result, action) {
  if (action.type == ALL_PROCESSOR_ITEM) {
    return Object.assign({}, state, { allProcessorItem: action.payload });
  }
  if (action.type == ADD_RESULT) {
    return Object.assign({}, state, { arrProcessorItem: action.payload });
  }
  if (action.type == SHOPPING_CART) {
    return Object.assign({}, state, { shoppingСart: action.payload });
  }
  if (action.type == SHOPPING_CART_LENGTH) {
    return Object.assign({}, state, { shoppingСartLength: action.payload });
  }
  if (action.type == ADD_ID_ARR) {
    return Object.assign({}, state, { addIdArr: action.payload });
  }
  return state;
}
export default addresult;
