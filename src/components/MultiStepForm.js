import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./MultiStepForm.module.scss";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const useStyles = makeStyles({
  fix: {
    padding: 0,
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "#79d583",
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#79d583",
    },
    "& .MuiStepLabel-label.MuiStepLabel-active": {
      color: "#a1a1a6",
    },
    "& .MuiStepLabel-root.Mui-disabled .MuiStepIcon-root": {
      color: "#444",
    },
    "& .MuiStepLabel-root.Mui-disabled .MuiStepLabel-label": {
      color: "#444",
    },
    "& .MuiStepConnector-root .MuiStepConnector-lineHorizontal": {
      borderColor: "#444",
    },
    "& .MuiStepLabel-label.MuiStepLabel-completed": {
      color: "#79d583",
    },
  },
});

const MultiStepForm = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handlePrev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [selectedPlan, setSelectedPlan] = useState({
    activePlan: null,
    activePlanName: null,
  });

  //each is passed fro MAP in StepTwo component
  function handleSelectPlan(each) {
    setSelectedPlan({ activePlan: each.id, activePlanName: each.header });
  }

  function getSteps() {
    return ["Sign Up", "Choose Plan", "Checkout"];
  }
  const steps = getSteps();

  //Set initial input values
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phonen: "",
    male: "",
    female: "",
    psw: "",
    cpsw: "",
    card: "",
    expiry: "2021-02-12",
  };

  //Initialise inputValues with initialValues
  const [inputValues, setInputValues] = useState(initialValues);

  const handleInputChange = (e) => {
    //Extract name and value attributes from inputs
    const { name, value } = e.target;
    setInputValues({
      //Update inputValues state object with the existing values
      ...inputValues,
      //Update input value witht the value from coresponding input, fname: e.target.value = o the value of current input state, input name needs to match initialValues.fname
      [name]: value,
    });
  };

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <StepOne
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
            inputValues={inputValues}
            handleInputChange={handleInputChange}
          />
        );
      case 1:
        return (
          <StepTwo
            handlePrev={handlePrev}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
            inputValues={inputValues}
            handleInputChange={handleInputChange}
            selectedPlan={selectedPlan}
            handleSelectPlan={handleSelectPlan}
          />
        );
      case 2:
        return (
          <StepThree
            handlePrev={handlePrev}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
            inputValues={inputValues}
            handleInputChange={handleInputChange}
            selectedPlan={selectedPlan}
          />
        );

      default:
        return "Unknown Step";
    }
  }

  return (
    <div className="container">
      <div className={styles.form}>
        <div className={styles.form__img}></div>
        <div className={styles.form__content}>
          <div className={styles.form__stepper}>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              className={classes.fix}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <div className={styles.inputs}>{getStepsContent(activeStep)}</div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
