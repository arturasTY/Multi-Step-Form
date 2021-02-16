import React, { useState } from "react";
import styles from "./MultiStepForm.module.scss";
import IntlInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { FaEyeSlash, FaEye, FaArrowRight } from "react-icons/fa";

const StepOne = ({
  activeStep,
  steps,
  handleNext,
  inputValues,
  handleInputChange,
}) => {
  const [gender, setGender] = useState("Male");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleShowCPassword = () => {
    setShowCPassword((prevShowCPassword) => !prevShowCPassword);
  };

  //Or
  // const handleShowPassword = () => {
  //   setShowPassword(showPassword ? false : true);
  // };

  return (
    <>
      <div className={styles.inputs__hasTwo}>
        <div className={styles.form__block}>
          <label htmlFor="firstn">First Name</label>
          <input
            type="text"
            name="fname"
            id="firstn"
            tabIndex="1"
            autoCapitalize="off"
            autoCorrect="off"
            required
            value={inputValues.fname}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.form__block}>
          <label htmlFor="lastn">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lastn"
            tabIndex="1"
            autoCapitalize="off"
            autoCorrect="off"
            value={inputValues.lname}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={styles.inputs__hasOne}>
        <div className={styles.form__block}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            tabIndex="1"
            autoCapitalize="off"
            autoCorrect="off"
            value={inputValues.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={styles.inputs__hasTwo}>
        <div className={styles.form__block}>
          <label htmlFor="add">Phone Number</label>
          <IntlInput
            preferredCountries={["gb"]}
            fieldName="phonen"
            inputClassName="input-tel"
          />
        </div>
        <div className={styles.form__block}>
          <div className={styles.gender}>
            <div className={styles.gender__each}>
              <input
                type="checkbox"
                name="male"
                id="male"
                checked={gender === "Male"}
                onClick={() => setGender("Male")}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className={styles.gender__each}>
              <input
                type="checkbox"
                name="female"
                id="female"
                checked={gender === "Female"}
                onClick={() => setGender("Female")}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inputs__hasTwo}>
        <div className={styles.form__block}>
          <label htmlFor="psw">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="psw"
            id="psw"
            tabIndex="1"
            autoCapitalize="off"
            autoCorrect="off"
            value={inputValues.psw}
            onChange={handleInputChange}
          />
          {showPassword ? (
            <FaEye onClick={handleShowPassword} />
          ) : (
            <FaEyeSlash onClick={handleShowPassword} />
          )}
        </div>
        <div className={styles.form__block}>
          <label htmlFor="cpsw">Confirm Password</label>
          <input
            type={showCPassword ? "text" : "password"}
            name="cpsw"
            id="cpsw"
            tabIndex="1"
            autoCapitalize="off"
            autoCorrect="off"
            value={inputValues.cpsw}
            onChange={handleInputChange}
          />
          {showCPassword ? (
            <FaEye onClick={handleShowCPassword} />
          ) : (
            <FaEyeSlash onClick={handleShowCPassword} />
          )}
        </div>
      </div>
      {activeStep === steps.length ? (
        "All Steps Done"
      ) : (
        <>
          <button onClick={handleNext} className={styles.btn} type="submit">
            {activeStep === steps.length ? "End" : "Next Step"}
            <FaArrowRight />
          </button>
        </>
      )}
    </>
  );
};

export default StepOne;
