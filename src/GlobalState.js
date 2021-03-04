import React, { useState } from 'react'

export const UserData = React.createContext()
export const SignUpHandler = React.createContext()
export const LoginHandler = React.createContext()
export const IsLoggedIn = React.createContext()
export const CurrLoggedIn = React.createContext()
export const SignUpErrorMessage = React.createContext()
export const LoginAlertError = React.createContext()
export const LogoutHandler = React.createContext()
export const AddPostSubmitHandler = React.createContext()
export const AddPostInput = React.createContext()
export const PostData = React.createContext()
export const SignUpProfileUrl = React.createContext()
export const SignUpSelectedProf = React.createContext()

const GlobalState = ({ children }) => {



  // State
  const [profileUrl, setProfileUrl] = useState('')
  const [selectedProf, setSelectedProf] = useState('')
  const [postData, setPostData] = useState([{ id: Date.now(), fullname: 'Philcob', text: 'Hello World', img: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.0-9/129475304_4760457177361096_1542524321202343372_o.jpg?_nc_cat=109&ccb=3&_nc_sid=09cbfe&_nc_ohc=zx0K5X5a-cMAX_wgsqp&_nc_oc=AQm3lyAVKcVFw5rguP75l0GARFPnMMVWg4JdpIXBM4GbdvJRrhmomfRcPbI_wf2xU9X5fS7T35cDRO-bZqKgBmsX&_nc_ht=scontent.fmnl4-4.fna&oh=8ed99e3169db536ac98970e779608358&oe=606302C6' }])
  const [userData, setUserData] = useState([
    {
      id: 1,
      username: 'admin',
      password: 'admin',
      fullname: 'Philcob S. Josol',
      img: 'https://lovelytab.com/wp-content/uploads/2019/02/Homer-Simpson-Wallpapers-1024x640.jpg'
    }
  ])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currLoggedIn, setCurrLoggedIn] = useState()
  const [signUpErrorMessage, setSignUpErrorMessage] = useState('')
  const [showLoginAlertError, setShowLoginAlertError] = useState(false)
  const [addPostInput, setAddPostInput] = useState('')




  // Add post submit handler
  function addPostSubmitHandler(e) {
    e.preventDefault()
    setAddPostInput('')
    // FIX THIS!
    setPostData([...postData, { id: Date.now(), fullname: currLoggedIn.fullname, text: addPostInput, img: currLoggedIn.img }])
    console.log(postData)
  }

  // signup handler
  const signUpHandler = (e) => {
    e.preventDefault()
    const fullname = e.target.elements.fullname.value
    const email = e.target.elements.email.value
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value
    const profilePicture = profileUrl

    // determines error
    const isUserNameTaken = userData.some(item => username === item.username)
    const isEmailTaken = userData.some(item => email === item.email)
    if (isUserNameTaken) {
      setSignUpErrorMessage('Username is taken')
    } else if (isEmailTaken) {
      setSignUpErrorMessage('Email Address is taken')
    } else if (password.length < 8) {
      setSignUpErrorMessage('Password should be atleast 8 characters')
    } else {
      setUserData([...userData, { id: Date.now(), fullname: fullname, email: email, username: username, password: password, img: profilePicture }])
      alert('Account created successfully')
    }
  }

  // login handler
  const logInHandler = (e) => {
    e.preventDefault()
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const isTrue = userData.some(item => username === item.username && password === item.password)
    if (isTrue) {
      setIsLoggedIn(true)
      const currentlyLogged = userData.filter(item => username === item.username && password === item.password)
      console.log(currentlyLogged)
      setCurrLoggedIn(currentlyLogged[0])
      setShowLoginAlertError(false)
      alert('Login Success')

    } else {
      setShowLoginAlertError(true)
    }
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
    setCurrLoggedIn()
  }

  return (
    <UserData.Provider value={[userData, setUserData]}>
      <SignUpHandler.Provider value={signUpHandler}>
        <LoginHandler.Provider value={logInHandler}>
          <IsLoggedIn.Provider value={[isLoggedIn, setIsLoggedIn]}>
            <CurrLoggedIn.Provider value={[currLoggedIn, setCurrLoggedIn]}>
              <SignUpErrorMessage.Provider value={[signUpErrorMessage, setSignUpErrorMessage]}>
                <LoginAlertError.Provider value={[showLoginAlertError, setShowLoginAlertError]}>
                  <LogoutHandler.Provider value={logoutHandler}>
                    <AddPostSubmitHandler.Provider value={addPostSubmitHandler}>
                      <AddPostInput.Provider value={[addPostInput, setAddPostInput]} >
                        <PostData.Provider value={[postData, setPostData]}>
                          <SignUpProfileUrl.Provider value={[profileUrl, setProfileUrl]}>
                            <SignUpSelectedProf.Provider value={[selectedProf, setSelectedProf]}>
                              {children}
                            </SignUpSelectedProf.Provider>
                          </SignUpProfileUrl.Provider>
                        </PostData.Provider>
                      </AddPostInput.Provider>
                    </AddPostSubmitHandler.Provider>
                  </LogoutHandler.Provider>
                </LoginAlertError.Provider>
              </SignUpErrorMessage.Provider>
            </CurrLoggedIn.Provider>
          </IsLoggedIn.Provider>
        </LoginHandler.Provider>
      </SignUpHandler.Provider>
    </UserData.Provider>
  )
}

export default GlobalState
