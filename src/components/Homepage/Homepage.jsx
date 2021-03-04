import React, { useContext, useState } from 'react'
import PostComponent from './PostComponent.jsx'
import ProfileComponents from './ProfileComponents.jsx'
import { CurrLoggedIn } from '../../GlobalState'
import AddPost from './AddPost.jsx'
import { Alert } from 'react-bootstrap'
const Homepage = () => {
  const [currLoggedIn] = useContext(CurrLoggedIn)
  const [welcomeMessage, setWelcomeMessage] = useState(true)
  return (
    <div>
      <Alert
        variant='success'
        show={welcomeMessage}
        onClose={() => setWelcomeMessage(false)}
        dismissible
        style={{ textAlign: 'center' }}
      >
        <Alert.Heading>Hello {currLoggedIn.fullname}!</Alert.Heading>
        <p>
          I am Philcob, the creator of <b>cookie</b>. Thank you for using our
          social media platform! <br /> This website is still under development!
        </p>
      </Alert>
      <div className='homePageRow'>
        <div className='profileComponentContainer'>
          <ProfileComponents />
        </div>
        <div>
          <AddPost />
          <PostComponent />
        </div>
        <div className='profileComponentContainer'>
          <ProfileComponents />
        </div>
      </div>
    </div>
  )
}

export default Homepage
