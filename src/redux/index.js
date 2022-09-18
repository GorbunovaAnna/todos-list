import { createStore, applyMiddleware, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
// const rootReducer = {
// 	todo: todoReducer,
// 	user: userReducer
// };

const middlewares = [thunk];

const rootReducer = {
  todos: todoReducer,
  user: userReducer
}

export const store = createStore(
  combineReducers(rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares))
);

