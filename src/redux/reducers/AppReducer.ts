import * as types from "../../actions/types";

export interface appStateIF {
  name: string;
}

const initialState: appStateIF = {
  name: "",
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.INIT_APP:
    default:
      return state;
  }
};

export default reducer;
