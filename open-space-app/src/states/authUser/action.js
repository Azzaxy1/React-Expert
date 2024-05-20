/**
 * @TODO: Define all the actions (creator) for the authUser state
 */

import api from "../../utils/api";

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSET_AUTH_USER",
};

const setAuthUserActionCreator = (authUser) => {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
};

const unSetAuthUserActionCreator = () => {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: null,
  };
};

// Thunk Function
const asyncSetAuthUser = () => {
  return async (dispatch) => {
    try {
      const token = await api.login({ id, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
  };
};

const asyncUnsetAuthUser = () => {
  return (dispatch) => {
    dispatch(unSetAuthUserActionCreator());
    api.putAccessToken("");
  };
};

export {
  ActionType,
  setAuthUserActionCreator,
  unSetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
