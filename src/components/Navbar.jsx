import React, { useContext, useState } from 'react'
import { IsLoggedIn, LogoutHandler, CurrLoggedIn } from '../GlobalState'
import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
  const [isLoggedIn] = useContext(IsLoggedIn)
  const logoutHandler = useContext(LogoutHandler)
  const [currLoggedIn] = useContext(CurrLoggedIn)
  const [showDropDown, setShowDropDown] = useState('none')
  function mouseOverHandler() {
    if (showDropDown === 'none') {
      setShowDropDown('block')
    } else if (showDropDown === 'block') {
      setShowDropDown('none')
    }
  }
  function onBlurHandler() {
    setShowDropDown('none')
  }
  return (
    <nav>
      <h2 className='brand'>
        <i className='fas fa-cookie'></i> cookie
      </h2>
      {isLoggedIn && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
          }}
          className='userOption'
          onClick={mouseOverHandler}
          onBlur={onBlurHandler}
        >
          <h6 style={{ marginTop: '10px' }}>{currLoggedIn.fullname}</h6>
          <i className='fas fa-chevron-down'></i>
          <div style={{ display: showDropDown }} className='dropDown'>
            <ul>
              <li onClick={logoutHandler} className='dropDownList'>
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
