import React, { useState, useRef } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import useStyles from "../styles/Reset.styles";

function Reset({ show, submit, hideReset }) {
  const classes = useStyles({ show });

  const form = useRef(null);

  const [formData, setFormData] = useState({
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      email: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formData);
    document.getElementById("email").blur();
    setFormData({
      email: "",
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1000);
  };

  return (
    <>
      <div className={classes.backdrop} onClick={hideReset} />
      <ValidatorForm
        className={classes.Reset}
        ref={form}
        onSubmit={handleSubmit}
      >
        <div className={classes.close} onClick={hideReset}>
          <i className="fas fa-times" />
        </div>
        <TextValidator
          id="email"
          className={classes.input}
          label="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
          validators={["required", "isEmail"]}
          errorMessages={[
            "이메일을 입력하세요.",
            "유효하지 않은 이메일입니다.",
          ]}
        />
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          type="submit"
          disabled={submitted}
        >
          비밀번호 재설정
        </Button>
      </ValidatorForm>
    </>
  );
}

export default Reset;
