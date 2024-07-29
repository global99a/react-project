import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-datepicker/dist/react-datepicker.css";
// import Header from "./Header.jsx";
import styles from "../Components/Signup.module.css";
import Header from "./Header";
import { Route, useNavigate } from "react-router-dom";

function Sign_up() {
  const [selectedDate, setDate] = useState(null);
  const maxDate = new Date();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup
      .string("please enter a valid phone number")
      .required("please enter a valid phone number"),
    gender: yup.string().required(),
    dob: yup.string().required("please select your date of birth"),
    password: yup
      .string()
      .min(8)
      .matches(
        "[A-Z]",
        "The Password must be atleast 8 charecters long, must have an uppercase, lowercase and a digit"
      )
      .matches(
        "[a-z]",
        "The Password must be atleast 8 charecters long, must have an uppercase, lowercase and a digit"
      )
      .matches(
        "[0-9]",
        "The Password must be atleast 8 charecters long, must have an uppercase, lowercase and a digit"
      )
      .required(
        "The Password must be atleast 8 charecters long, must have an uppercase, lowercase and a digit"
      ),
    confirm_password: yup
      .string()
      .required("Confirm password is required.")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    email: yup.string().email("Please enter a valid email").required(),
  });

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  function submit(data) {
    navigate("/otp");
  }

  const changeDate = (date) => {
    setDate(date);
    setValue("dob", date.toLocaleDateString());
  };

  function validiate_phone(event) {
    let count = 0;
    let value = event.target.value;
    console.log(value);
    for (let i = 0; i < value.length; i++) {
      if (value[i] >= "0" && value[i] <= "9") {
        count = count + 1;
      }
    }
    if (count == 10) {
      setValue("phoneNumber", value);
    } else {
      setValue("phoneNumber", null);
    }
  }

  return (
    <div>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.signUp}>
          <div className={styles.formContent}>
            <h1 className={styles.title}>Sign Up</h1>
            <div className={styles.inputContent}>
              <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <div className={`${styles.inputBox} ${styles.one}`}>
                  <label className={styles.label} htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className={styles.textbox}
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    required
                  ></input>
                </div>
                <div className={`${styles.inputBox} ${styles.two}`}>
                  <label className={styles.label} htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className={styles.textbox}
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    required
                  ></input>
                </div>
                <div className={`${styles.inputBox} ${styles.three}`}>
                  <label className={styles.label} htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    onChange={validiate_phone}
                    type="text"
                    className={styles.textbox}
                    id="phoneNumber"
                    required
                  ></input>
                  {errors.phoneNumber && (
                    <p className={styles.p}>{errors.phoneNumber.message}</p>
                  )}
                </div>
                <div className={`${styles.inputBox} ${styles.four}`}>
                  <label className={styles.label} htmlFor="dateOfBirth">
                    Date Of Birth
                  </label>
                  <DatePicker
                    className={styles.textbox}
                    {...register("dob")}
                    selected={selectedDate}
                    onChange={changeDate}
                    placeholderText="MM/DD/YYYY"
                    showYearDropdown
                    showMonthDropdown
                    yearDropdownItemNumber={110}
                    scrollableYearDropdown
                    maxDate={maxDate}
                  />
                  {errors.dob && (
                    <p className={styles.p}>{errors.dob.message}</p>
                  )}
                </div>
                <div className={styles.five}>
                  <label htmlFor="gender" className={styles.genderLabel}>
                    Gender
                  </label>
                  <div className={styles.genderinput}>
                    <div className="male">
                      <input
                        className={styles.radioinput}
                        type="radio"
                        id="male"
                        value="male"
                        {...register("gender")}
                        required
                      />
                      <label className={styles.label} htmlFor="male">
                        Male
                      </label>
                    </div>
                    <div className="femle">
                      <input
                        className={styles.radioinput}
                        type="radio"
                        id="female"
                        value="female"
                        {...register("gender")}
                      />
                      <label className={styles.label} htmlFor="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className={`${styles.inputBox} ${styles.nine}`}>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    className={styles.textbox}
                    placeholder="example@gmail.com"
                    {...register("email")}
                  ></input>
                  {errors.email && (
                    <p className={styles.p}>{errors.email.message}</p>
                  )}
                </div>
                <div className={`${styles.inputBox} ${styles.six}`}>
                  <label className={styles.label} htmlFor="password">
                    Password
                  </label>
                  <input
                    className={styles.textbox}
                    type="password"
                    id="password"
                    {...register("password")}
                    required
                  ></input>
                  {errors.password && (
                    <p className={styles.p}>{errors.password.message}</p>
                  )}
                </div>
                <div className={`${styles.inputBox} ${styles.seven}`}>
                  <label className={styles.label} htmlFor="confirm_password">
                    Confirm Password
                  </label>
                  <input
                    className={styles.textbox}
                    type="password"
                    id="confirm_password"
                    {...register("confirm_password")}
                    required
                  ></input>
                  {errors.confirm_password && (
                    <p className={styles.p}>
                      {errors.confirm_password.message}
                    </p>
                  )}
                </div>
                <button className={styles.button}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;
