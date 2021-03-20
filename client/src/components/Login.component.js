import React, { useState } from "react";
import useStyles from "../styles/Login.styles";

function Login({ show, submit }) {
  const classes = useStyles({ show });
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(input);
    setInput({
      email: "",
      password: "",
    });
  };
  return (
    <form className={classes.Login} onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={input.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={input.password}
        onChange={handleChange}
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
