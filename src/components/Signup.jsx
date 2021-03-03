import React, { useContext, useState, useEffect } from 'react'
import { SignUpHandler, SignUpErrorMessage } from '../GlobalState'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = () => {
  const signUpHandler = useContext(SignUpHandler)
  const [isAlertSuccess, setIsAlertSuccess] = useState(false)
  const [isAlertDanger, setIsAlertDanger] = useState(false)
  const [errorMessage] = useContext(SignUpErrorMessage)
  useEffect(() => {
    if (errorMessage) {
      setIsAlertDanger(true)
    } else {
      setIsAlertSuccess(false)
    }
  }, [errorMessage])
  return (
    <div className='Login'>
      <div>
        <h2 className='loginText'>Sign up</h2>
      </div>
      <div className='loginParent'>
        <form onSubmit={signUpHandler}>
          <div>
            <label className='inputLabel'>Full name</label>
            <input
              placeholder='Enter full name'
              className='loginInput'
              type='text'
              name='fullname'
              required
            />
          </div>
          <div>
            <label className='inputLabel'>Email</label>
            <input
              placeholder='Enter email'
              className='loginInput'
              type='text'
              name='email'
              required
            />
          </div>
          <div>
            <label className='inputLabel'>Username</label>
            <input
              placeholder='Enter username'
              className='loginInput'
              type='text'
              name='username'
              required
            />
          </div>
          <div>
            <label className='inputLabel'>Password</label>
            <input
              placeholder='Enter password'
              className='loginInput'
              type='password'
              name='password'
              required
            />
          </div>
          {/* <div>
            <label className='inputLabel'>Profile Picture</label>
            <input type='file' id='myFile' name='filename' />
          </div> */}

          <Alert show={isAlertSuccess} variant='success'>
            Account created successfully!!
          </Alert>
          <Alert show={isAlertDanger} variant='danger'>
            {errorMessage}
          </Alert>

          <div className='loginBtnDiv'>
            <button className='loginButton'>Sign up</button>
            <Link to='/'>
              <button className='loginButton'>I have an account</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
