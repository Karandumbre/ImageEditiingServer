import { LOADING_STARTED, LOADING_STOPPED } from "./actionType";
const initialState = {
  loading: false,
};

type Action = {
  type: string;
  payload: {};
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOADING_STARTED:
      return {
        ...state,
        loading: true,
      };

    case LOADING_STOPPED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
