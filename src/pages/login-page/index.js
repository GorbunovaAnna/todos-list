import { useState } from "react";
import { Validation } from "../../compound/validation";
import { VALIDATION_TYPE } from "../../utils/validate";
import { validate } from "../../utils/validate";
import { useNavigate, Link } from "react-router-dom";
import styles from "./index.module.css";
import { loginUserThunk } from "../../redux/actions/async-actions";
import { useDispatch } from "react-redux";

const { ONLY_NUMBERS, NO_SPACES, ONE_UPPERCASE, ONE_SPEC_SYMBOL } =
  VALIDATION_TYPE;

const loginConfig = [ONLY_NUMBERS, NO_SPACES];
const passwordConfig = [ONE_UPPERCASE, ONE_SPEC_SYMBOL, NO_SPACES];

export const LoginPage = () => {
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginText, setLoginText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const clickHandler = async () => {
    const loginError = validate(loginText, loginConfig);
    const passwordError = validate(passwordText, passwordConfig);

    setLoginError(loginError);
    setPasswordError(passwordError);

    if (!loginError && !passwordError) {
      dispatch(
        loginUserThunk(loginText, passwordText, () => {
          navigate("/todos");
        })
        );
    }
  };

  const loginChangeHandler = ({ target: { value } }) => {
    setLoginText(value);
  };

  const passwordChangeHandler = ({ target: { value } }) => {
    setPasswordText(value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>Please log in</h1>
        <div>
          <Validation error={loginError}>
            <input
              className={styles.input}
              type="text"
              value={loginText}
              onChange={loginChangeHandler}
            />
          </Validation>
        </div>
        <div>
          <Validation error={passwordError}>
            <input
              className={styles.input}
              type="password"
              value={passwordText}
              onChange={passwordChangeHandler}
            />
          </Validation>
        </div>
        <div>
          Dont have an account ? <br />
          <Link to="/register">go to register</Link>
        </div>
        <button onClick={clickHandler} className={styles.btn}>
          Log in
        </button>
      </div>
    </div>
  );
};
