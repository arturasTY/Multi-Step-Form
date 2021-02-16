import React, { useState } from "react";
import styles from "./MultiStepForm.module.scss";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import data from "../data/data.json";

const StepTwo = ({
  handlePrev,
  activeStep,
  steps,
  handleNext,
  handleSelectPlan,
  selectedPlan,
}) => {
  return (
    <>
      <div className={styles.pricingPlans}>
        {data.plans.map((each) => (
          <div
            className={
              selectedPlan.activePlan === each.id
                ? `${styles.pricingPlans__each} ${styles.selected}`
                : `${styles.pricingPlans__each}`
            }
            key={each.id}
          >
            <div className={styles.header}>
              <h3>{each.header}</h3>
            </div>
            <div className={styles.price}>
              <h4>£{each.price}/mo.</h4>
            </div>
            <div className={styles.body}>
              <p>{each.body}</p>
            </div>
            <div className={styles.cta}>
              <button onClick={() => handleSelectPlan(each)}>
                {selectedPlan.activePlan === each.id ? <FaCheck /> : null}{" "}
                Select
              </button>
            </div>
          </div>
        ))}
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
          {activeStep === steps.length ? "End" : "Next Step"}
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default StepTwo;
