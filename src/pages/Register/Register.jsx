import React, { useState, useRef } from "react";
import "./Register.scss";

const Register = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errLogin, setErrLogin] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPass, setErrPass] = useState("");

  const validateLogin = (value) => {
    return /^[a-zA-Z0-9]{3,20}$/.test(value);
  };

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]{1,}[^\s@]+\.[^\s@]{2,}$/.test(value);
  };

  const validatePassword = (value) => {
    return /^[a-zA-Z]{8,}$/.test(value);
  };

  // Ссылки на элементы ввода
  const loginRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleBlurLogin = () => {
    const isValid = validateLogin(login);

    !isValid && login.length > 0
      ? setErrLogin("Неверный формат логина")
      : setErrLogin("");
  };

  const handleBlurEmail = () => {
    const isValid = validateEmail(email);
    !isValid && email.length > 0
      ? setErrEmail("Неверный формат email")
      : setErrEmail("");
  };

  const handleBlurPassword = () => {
    const isValid = validatePassword(password);
    !isValid && password.length > 0
      ? setErrPass("Длина пароля должна быть не менее 8 символов")
      : setErrPass("");
  };

  return (
    <div className="register">
      <main className="register__content">
        <h1 className="register__heading">Регистрация</h1>
        <form action="POST" className="register__form">
          <h2 className="register__description">
            Для того, чтобы просматривать профиль, необходимо
            зарегистрироваться!
          </h2>
          <div className="register__form-container">
            <div className="register__form-inputs">
              <div className="register__form-input-container">
                <label className="register__form-label" htmlFor="login">
                  Логин
                </label>
                <input
                  className="register__form-input"
                  type="text"
                  name="login"
                  id="login"
                  placeholder="Придумайте логин"
                  ref={loginRef}
                  onBlur={handleBlurLogin}
                  onChange={(e) => setLogin(e.target.value)}
                />
                <p id="err_login" className="register__error">
                  {errLogin}
                </p>
              </div>
              <div className="register__form-input-container">
                <label className="register__form-label" htmlFor="email">
                  Адрес электронной почты
                </label>
                <input
                  className="register__form-input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Введите адрес электронной почты"
                  ref={emailRef}
                  onBlur={handleBlurEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p id="err_email" className="register__error">
                  {errEmail}
                </p>
              </div>
              <div className="register__form-input-container">
                <label className="register__form-label" htmlFor="pass">
                  Пароль
                </label>
                <input
                  className="register__form-input"
                  type="password"
                  name="password"
                  id="pass"
                  placeholder="Придумайте пароль"
                  ref={passwordRef}
                  onBlur={handleBlurPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p id="err_pass" className="register__error">
                  {errPass}
                </p>
              </div>
            </div>
            <button type="submit" className="register__form-submit-btn">
              Зарегистрироваться
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Register;
