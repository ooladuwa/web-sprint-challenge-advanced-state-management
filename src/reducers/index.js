import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADD_SMURF,
  SET_ERROR,
} from "../actions/index";

const initialState = {
  smurfs: [
    {
      name: "",
      nickname: "",
      position: "",
      description: "",
      id: Date.now(),
    },
  ],
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
        smurfs: [
          {
            ...state.smurfs,
            name: action.payload.name,
            position: action.payload.position,
            nickname: action.payload.nickname,
            description: action.payload.description,
            id: action.payload.id,
          },
        ],
        isLoading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        smurfs: [],
        isLoading: false,
        error: "Name, position, and nickname are required for smurfs.",
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
