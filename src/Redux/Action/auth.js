import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  CLEAR_PROFILE,
  RESET_PASSWORD,
  RESET_PASSWORD_FAILED,
  SERVER_DOMAIN,
} from "./types";

import setAuthToken from "../../utils/setAuthToken";

//LOAD USER

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`${SERVER_DOMAIN}/api/auth`);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERR,
    });
  }
};
// REGISTER USER

export const registerUser = ({ name, lastname, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, lastname, email, password });
  try {
    const res = await axios.post(
      `${SERVER_DOMAIN}/api/users/register`,
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(
      setAlert(
        "User Registered",
        `Please confirm your email to login`,
        "error",
        "fas fa-check"
      )
    );
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(err.response);

    if (errors) {
      dispatch(
        setAlert(
          "Registration Error",
          `${err.response.data.errors[0].msg}`,
          "error",
          "fas fa-exclamation-circle"
        )
      );
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// LOGIN USER

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(
      `${SERVER_DOMAIN}/api/auth/login`,
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    if (err) {
      console.log(err.response);
      dispatch(
        setAlert(
          "Login Error",
          `${err.response.data.errors[0].msg}`,
          "error",
          "fas fa-exclamation-circle"
        )
      );
    }

    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const resetpassword = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email });
  try {
    const res = await axios.post(
      `${SERVER_DOMAIN}/api/auth/reset-password`,
      body,
      config
    );

    dispatch({
      type: RESET_PASSWORD,
      payload: res.data,
    });
    console.log(res.data);

    dispatch(setAlert(`${res.data.msg}`, "green"));
  } catch (err) {
    const errors = err.response.data;

    if (errors) {
      console.log(errors);
      dispatch(setAlert(`${errors.error}`, "red"));
    }
    dispatch({
      type: RESET_PASSWORD_FAILED,
    });
  }
};

export const newPassword = (password, token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ password, token });

  try {
    const res = await axios.post(
      `${SERVER_DOMAIN}/api/auth/newpassword`,
      body,
      config
    );
    dispatch({
      type: RESET_PASSWORD,
      payload: res.data,
    });
    console.log(res.data);

    dispatch(setAlert(`${res.data.msg}`, "green"));
  } catch (err) {
    const errors = err.response.data;

    if (errors) {
      console.log(errors);
      dispatch(setAlert(`${errors.error}`, "red"));
    }
    dispatch({
      type: RESET_PASSWORD_FAILED,
    });
  }
};

// LOGOUT USESR /CLEAR PROFILE

export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
