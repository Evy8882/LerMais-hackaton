import React from 'react';
import styles from './Login.module.css'; 
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

  return (
    <div className={styles.loginBackground}>
      <div className={styles.loginContainer}>
        <div className={styles.leftSide}>
          <img
            src="public/login-ilustration.png" 
            className={styles.illustration}
          />
        </div>
        <div className={styles.rightSide}>
          <h2>Login</h2>
          <form onSubmit={(e)=>{
            e.preventDefault()
            navigate("/")
          }}>
            <input
              type="email"
              placeholder="Email"
              className={styles.inputField}
            />
            <input
              type="password"
              placeholder="Senha"
              className={styles.inputField}
            />
            <button type="submit" className={styles.loginButton}>
              Entrar
            </button>
            <p className={styles.registerText}>
              Não tem uma conta? <a href="/register">Crie uma agora</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
