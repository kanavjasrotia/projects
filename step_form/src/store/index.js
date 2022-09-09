import { createStore } from "redux";

const initialState = { details: {}, step: 1, maxStep: 4, hasError: true };

const FormsReducer = (state = initialState, action) => {
  if (action.type === "next") {
    return {
      details: { ...state.details, ...action.payload },
      step: state.step + 1,
    };
  }

  if (action.type === "prev") {
    return { details: { ...state.details }, step: state.step - 1 };
  }

  // if (action.type === "setDetails") {
  //   return {};
  // }

  return state;
};

const store = createStore(FormsReducer);

export default store;
