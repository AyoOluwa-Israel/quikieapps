import React from 'react'
import LoginCard from '../components/LoginCard'
import logo from '../images/logo.png'
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.container} >
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className={style.login_card}>
        <LoginCard/>
      </div>
      
      
    </div>
  )
}

export default Home
