import { TODO, USER } from "./types";
import { bindActionCreators } from "redux";
import { store } from "../index";

const addTodo = (todoText) => ({
  type: TODO.TODO_ADD,
  payload: {
    todoText,
  },
});

const deleteTodo = (id) => ({
  type: TODO.TODO_DELETE,
  payload: {
    id,
  },
});

const editTodo = (id, todoText) => ({
  type: TODO.TODO_EDIT,
  payload: {
    id,
    todoText,
  },
});

const todoStatusChange = (id) => ({
  type: TODO.TODO_DONE,
  payload: { id },
});

const todoFilterChange = (filterType) => ({
  type: TODO.TODO_FILTER,
  payload: {
    filterType,
  },
});

const loginUser = (user) => ({
  type: USER.USER_LOGIN,
  payload: {
    user,
  }
});

const logout = () => ({
  type: USER.USER_LOGOUT,
})

export default bindActionCreators(
  {
    addTodo,
    deleteTodo,
    editTodo,
    todoStatusChange,
    todoFilterChange,
    loginUser,
    logout,
  },
  store.dispatch
);
