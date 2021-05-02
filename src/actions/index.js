import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurf = () => {
  //start a fetch
  dispatchEvent({ type: FETCHING_START });
  axios
    .get("http://localhost:3333/smurfs")
    // if happy path, happy action
    .then((res) => {
      console.log(res.data);
      dispatchEvent({ type: FETCHING_SUCCESS, payload: res.data });
    })
    // if sad path, sad action
    .catch((error) => {
      console.log(error);
      dispatchEvent({ type: FETCHING_FAILURE, payload: error });
    });
};

export const addSmurf = (newSmurf) => {
  return {
    type: ADD_SMURF,
    payload: newSmurf,
  };
};

export const setError = (errorMessage) => {
  return {
    type: ADD_SMURF,
    payload: errorMessage,
  };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error mess
