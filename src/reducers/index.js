import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADD_SMURF,
  SET_ERROR,
} from "../actions/index";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

export const smurfsReducer = (state = initialState, action) => {
  console.log("action type:", action.type);
  console.log("action payload:", action.payload);

  switch (action.type) {
    case FETCHING_START:
      return { ...state, smurfs: [], isLoading: true };
    case FETCHING_SUCCESS:
      return { ...state, isLoading: false, smurfs: [...action.payload] };
    case FETCHING_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case ADD_SMURF:
      return {
        ...state,
        smurf: [
          ...state.smurf,
          state.name,
          state.nickname,
          state.position,
          state.summary,
          state.id,
        ],
        isLoading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        smurf: [],
        isLoading: false,
        error: state.errorMessage,
      };
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
