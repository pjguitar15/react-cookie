import React, { useContext, useState, useEffect } from 'react'
import {
  SignUpHandler,
  SignUpErrorMessage,
  SignUpProfileUrl,
  SignUpSelectedProf,
} from '../GlobalState'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = () => {
  const signUpHandler = useContext(SignUpHandler)
  const [isAlertSuccess, setIsAlertSuccess] = useState(false)
  const [isAlertDanger, setIsAlertDanger] = useState(false)
  const [errorMessage] = useContext(SignUpErrorMessage)
  const [profileUrl, setProfileUrl] = useContext(SignUpProfileUrl)
  const [selectedProf, setSelectedProf] = useContext(SignUpSelectedProf)

  const profSelectListener = (e) => {
    setProfileUrl(e.target.src)
    setSelectedProf(e.target.name)
  }
  useEffect(() => {
    console.log(selectedProf)
    console.log(profileUrl)
  })
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
          <h6 style={{ color: 'grey', margin: '20px 0px' }}>
            Select a profile picture
          </h6>
          <Alert variant='info'>
            You selected: <b>{selectedProf}</b>
          </Alert>
          <div
            className='profSelectParent'
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div className='profSelect'>
              <img
                onClick={profSelectListener}
                name='Homer backs into the bushes'
                src='https://lovelytab.com/wp-content/uploads/2019/02/Homer-Simpson-Wallpapers-1024x640.jpg'
                alt='userimg'
              />
            </div>
            <div className='profSelect'>
              <img
                onClick={profSelectListener}
                name='Surprised Patrick'
                src='https://e7.pngegg.com/pngimages/642/177/png-clipart-patrick-star-patrick-star-squidward-tentacles-internet-meme-art-omg-face-s-fictional-character-meme.png'
                alt='userimg'
              />
            </div>
            <div className='profSelect'>
              <img
                onClick={profSelectListener}
                name='Mike Wazowski'
                src='https://i.kym-cdn.com/photos/images/newsfeed/001/561/356/734.jpg'
                alt='userimg'
              />
            </div>
            <div className='profSelect'>
              <img
                onClick={profSelectListener}
                name='Surprised Pikachu'
                src='https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg'
                alt='userimg'
              />
            </div>
            <div className='profSelect'>
              <img
                onClick={profSelectListener}
                name='Doge meme'
                src='https://i.pinimg.com/originals/9e/82/03/9e8203bacc73b1591a2c31bec413332f.jpg'
                alt='userimg'
              />
            </div>
          </div>

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
