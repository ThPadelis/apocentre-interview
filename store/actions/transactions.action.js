import environment from "../../utils/environment";

export const GET_ALL = "[TRANSACTIONS] GET ALL";

const baseURL = `${environment.host}:${environment.port}/addresses`;

export const getAll = (ethAddress) => async (dispatch) => {
  try {
    const requestURL = `${baseURL}/${ethAddress}/transactions`;
    const response = await fetch(requestURL);
    const data = await response.json();
    dispatch({ type: GET_ALL, payload: data.transactions });
  } catch (error) {
    console.log({ error: error.toString() });
    dispatch({ type: GET_ALL, payload: [] });
  }
};
