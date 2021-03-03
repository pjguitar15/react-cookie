import React, { useContext } from 'react'
import Homepage from './Homepage/Homepage.jsx'
import { LoginHandler, IsLoggedIn, LoginAlertError } from '../GlobalState'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

const Login = () => {
  const [isLoggedIn] = useContext(IsLoggedIn)
  const logInHandler = useContext(LoginHandler)
  const [showLoginAlertError] = useContext(LoginAlertError)
  return (
    <div>
      {isLoggedIn ? (
        <Homepage />
      ) : (
        <div className='Login'>
          <div>
            <h2 className='loginText'>Login</h2>
          </div>
          <div className='loginParent'>
            <form onSubmit={logInHandler}>
              <div>
                <input
                  placeholder='Enter username'
                  className='loginInput'
                  type='text'
                  name='username'
                  required
                />
              </div>
              <div>
                <input
                  placeholder='Enter password'
                  className='loginInput'
                  type='password'
                  name='password'
                  required
                />
              </div>
              <Alert size='sm' show={showLoginAlertError} variant='danger'>
                Incorrect username/password
              </Alert>
              <div className='loginBtnDiv'>
                <button className='loginButton'>Login</button>
                <Link to='/signup'>
                  <button className='loginButton'>Sign Up</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
