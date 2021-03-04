import React, { useContext } from 'react'
import { CurrLoggedIn } from '../../GlobalState'
const ProfileComponents = () => {
  const [currLoggedIn] = useContext(CurrLoggedIn)
  return (
    <div className='profileComponent'>
      <div>
        <img src='' alt='' />
      </div>
      <div>
        <h4>{currLoggedIn.fullname}</h4>
        <p>Enter status here</p>
      </div>
      <hr />
      <div>
        <p>Followers</p>
        <h6>0</h6>
      </div>
      <hr />
      <div>
        <p>Following</p>
        <h6>0</h6>
      </div>
    </div>
  )
}

export default ProfileComponents
