import { FILTER_CONFIG } from "../../constants";
import { createSelector } from "reselect";

export const getTodos = (state) => state.todos.todos;
export const getFilter = (state) => state.todos.filter;
export const getIsLoading = (state) => state.todos.isLoading;

export const getTodosByFilter = createSelector(
  getTodos,
  getFilter,
  (todos, filter) => {
    return filter === FILTER_CONFIG.ALL
      ? todos
      : todos.filter(
          ({ done }) =>
            (done && filter === FILTER_CONFIG.DONE) ||
            (!done && filter === FILTER_CONFIG.UNDONE)
        );
  }
);

export const getUser = (state) => state.user.user;

export const getIsAuthenticated = (state) => state.user.isAuthenticated;

export const getUserEmail = createSelector(getUser, (user) => user.email);
