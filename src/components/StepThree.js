import React from "react";
import styles from "./MultiStepForm.module.scss";
import { FaLock } from "react-icons/fa";

const StepThree = ({
  handlePrev,
  handleNext,
  steps,
  activeStep,
  inputValues,
  handleInputChange,
  selectedPlan,
}) => {
  //Add space every 4 characters
  function cardNumberFormat(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
  }
  return (
    <>
      <div className={styles.selectedPlan}>
        <h3>
          That's a great choice <span>{inputValues.fname}</span>
        </h3>
        <p>
          You selected <strong>{selectedPlan.activePlanName}</strong> plan
        </p>
      </div>
      <div className={styles.inputs__hasOne}>
        <div className={styles.form__block}>
          <label htmlFor="email">Name on Card</label>
          <input
            type="text"
            name="nameOnCard"
            id="nameOnCard"
            tabIndex="1"
            autoCapitalize="off"
            autoCorrect="off"
            value={inputValues.nameOnCard}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={styles.inputs__hasOne}>
        <div className={styles.form__block}>
          <label htmlFor="firstn">Card number</label>
          <input
            type="text"
            name="card"
            id="card"
            tabIndex="1"
            autoCapitalize="off"
            autoCorrect="off"
            maxLength="19"
            required
            value={cardNumberFormat(inputValues.card)}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.inputs__hasTwo}>
        <div className={styles.form__block}>
          <label htmlFor="lastn">Expiry Date</label>
          <input
            type="date"
            name="expiry"
            id="expiry"
            tabIndex="1"
            autoCapitalize="off"
            autoCorrect="off"
            value={inputValues.expiry}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.form__block}>
          <label htmlFor="lastn">CVV</label>
          <input
            type="password"
            name="cvv"
            id="cvv"
            tabIndex="1"
            autoCapitalize="off"
            autoCorrect="off"
            maxLength="3"
            value={inputValues.cvv}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className={styles.inputs__hasTwo}>
        <button
          onClick={handlePrev}
          className={styles.btnOutline}
          type="submit"
        >
          {activeStep === steps.length ? "End" : "Back"}
        </button>
        <button onClick={handleNext} className={styles.btn} type="submit">
          {activeStep === steps.length ? "End" : "Pay Now"}
          <FaLock />
        </button>
      </div>
    </>
  );
};

export default StepThree;
