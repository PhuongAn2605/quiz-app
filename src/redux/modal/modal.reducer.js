import ModalTypes from "./modal.types";

const INITIAL_STATE = {
  showModal: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalTypes.OPEN_MODAL:
      return {
          ...state,
        showModal: true,
      };
    case ModalTypes.CLOSE_MODAL:
      return {
          ...state,
        showModal: false,
      };
    default:
        return state;
  }
};

export default modalReducer;