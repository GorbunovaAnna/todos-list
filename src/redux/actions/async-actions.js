import { TODO } from "./types";
import actions from "../../redux/actions/creators";
import { signInUser } from "../../firebase";


const { loginUser } = actions;

export const loadTodos = () => {
  return (dispatch, getState) => {
    dispatch({
      type: TODO.TODO_LOADING,
      payload: {
        isLoading: true,
      },
    });

    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((todos) => {
        dispatch({
          type: TODO.TODO_FETCH_COMPLETE,
          payload: {
            todos,
          },
        });
      })
      .finally(() => {
        dispatch({
          type: TODO.TODO_LOADING,
          payload: {
            isLoading: false,
          },
        });
      });
  };
};

export const loginUserThunk  = (login, password, cb) => {
  return (dispatch, getState) => {
    dispatch({
      type: TODO.TODO_LOADING,
      payload: {
        isLoading: true,
      },
    });

    signInUser(login, password)
      .then((user) => {
        dispatch(loginUser(user));
        cb();
      })
      .finally(() => {
        dispatch({
          type: TODO.TODO_LOADING,
          payload: {
            isLoading: false,
          },
        });
      });
  };
};