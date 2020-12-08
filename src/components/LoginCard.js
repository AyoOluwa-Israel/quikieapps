import React from 'react'
import style from './loginCard.module.css'


const LoginCard = () => {
  return (
    <div className={style.form}>
      <form action="">

        <div className={style.email}>
          <label htmlFor="">Email Address</label> <br/>
          <input type="email" placeholder="Email Address"/>
        </div>
        

        <div className="password">
          <label htmlFor="">Password</label> <br/>
          <input type="password" placeholder="Password"/>
        </div>
        
        <div className="checkbox">
          <input type="checkbox"/><span>Remember Me</span>
        </div>
        

        <button type='button' className={style.btn}>Login</button>
      </form>
      <p>Forgot Password</p>
    </div>
  )
}

export default LoginCard
