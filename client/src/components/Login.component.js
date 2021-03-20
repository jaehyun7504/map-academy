import React, { useState, useRef } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import useStyles from "../styles/Login.styles";

function Login({ show, submit, toggleShow }) {
  const classes = useStyles({ show });

  const form = useRef(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formData);
    document.getElementById("email").blur();
    document.getElementById("password").blur();
    setFormData({
      email: "",
      password: "",
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1000);
  };

  return (
    <>
      <div className={classes.backdrop} onClick={toggleShow} />
      <ValidatorForm
        className={classes.Login}
        ref={form}
        onSubmit={handleSubmit}
      >
        <div className={classes.close} onClick={toggleShow}>
          <i class="fas fa-times" />
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
        <TextValidator
          id="password"
          className={classes.input}
          label="Password"
          onChange={handleChange}
          name="password"
          type="password"
          value={formData.password}
          validators={["required"]}
          errorMessages={["비밀번호를 입력하세요."]}
        />
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          type="submit"
          disabled={submitted}
        >
          로그인
        </Button>
      </ValidatorForm>
    </>
  );
}

export default Login;
