import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
} from "../actions/index";

const initialState = {
  smurfs: [],
  loading: false,
  error: "",
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return { ...state, loading: true };
    case FETCHING_SUCCESS:
      return { ...state, loading: false, smurfs: action.payload };
    case FETCHING_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

//Task List:

//X2. Add in the arguments needed to complete a standard reducer function.
//X3. Add in a reducer case to accomadate the start of a smurf fetch.
//X4. Add in a reducer case to accomadate the successful smurf api fetch.
//X5. Add in a reducer cases to accomadate the failed smurf api fetch.
//6. Add in a reducer case to accomadate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
