import React, { useRef } from "react";
import { UserInput } from "../../components/user-input";
import { TodoList } from "../../components/todo-list";
import { TodoFilter } from "../../components/todo-filter";
import { storeTodos } from "../../utils/storeTodos";
import styles from "./index.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from "../../redux/actions/async-actions";
import { UserInfo } from "../../components/user-info";
import { getIsAuthenticated } from "../../redux/selectors";

export const TodoPage = () => {
  const todoInputRef = useRef();
  const dispatch = useDispatch();
  
  const isAuth = useSelector(getIsAuthenticated);

  dispatch(loadTodos());


  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <UserInput />
      </div>
      <div className={styles.rightSide}>
        { isAuth && <UserInfo />}
        <TodoFilter />
        <TodoList />
      </div>
    </div>
  );
};
