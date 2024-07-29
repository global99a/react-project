import Header from "./Header";
import { useState } from "react";
import styles from "../Components/Signup.module.css";
import loginStyles from "../Components/SignIn.module.css";
import { Route, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState(null);

  function set_email(event) {
    setEmail(event.target.value);
  }

  function set_password(event) {
    setPassword(event.target.value);
  }

  function validiate(event) {
    event.preventDefault();
    if (email == "patient@gmail.com" && password == "patient") {
      setError(null);
      navigate("/patient_dashboard");
    } else if (email == "doctor@gmail.com" && password == "doctor") {
      setError(null);
      navigate("/doctors");
    } else if (email == "admin@gmail.com" && password == "admin") {
      setError(null);
      navigate("/admin");
    } else if (email == "healthadmin@gmail.com" && password == "healthadmin") {
      setError(null);
      navigate("/healthadmin");
    } else if (email == "pharmacy@gmail.com" && password == "pharmacy") {
      setError(null);
      navigate("/pharmacy");
    } else {
      setError("invalid username or password");
    }
  }

  return (
    <div>
      <Header></Header>
      <div className={`${styles.body} ${loginStyles.body}`}>
        <div className={`${styles.signUp} ${loginStyles.signUp}`}>
          <div className={`${styles.formContent} ${loginStyles.formContent}`}>
            <h1 className={`${styles.title} ${loginStyles.title}`}>Login</h1>
            {errors && (
              <p className={`${styles.p} ${loginStyles.p}`}>{errors}</p>
            )}
            <form
              className={`${styles.form} ${loginStyles.form}`}
              onSubmit={validiate}
            >
              <div className={`${styles.inputBox} ${loginStyles.one}`}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  className={`${styles.textbox} ${loginStyles.textbox}`}
                  placeholder="example@gmail.com"
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(event) => {
                    set_email(event);
                    setError(null);
                  }}
                ></input>
              </div>
              <div className={`${styles.inputBox} ${loginStyles.two}`}>
                <label className={styles.label} htmlFor="password">
                  Password
                </label>
                <input
                  className={`${styles.textbox} ${loginStyles.textbox}`}
                  type="password"
                  required
                  id="password"
                  value={password}
                  onChange={(event) => {
                    set_password(event);
                    setError(null);
                  }}
                ></input>
              </div>
              <button
                className={`${styles.button} ${loginStyles.button}`}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
