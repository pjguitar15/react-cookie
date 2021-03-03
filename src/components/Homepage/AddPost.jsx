import React, { useContext } from 'react'
import {
  CurrLoggedIn,
  AddPostSubmitHandler,
  AddPostInput,
} from '../../GlobalState'
const AddPost = () => {
  const [currLoggedIn] = useContext(CurrLoggedIn)
  const addPostSubmitHandler = useContext(AddPostSubmitHandler)
  const [addPostInput, setAddPostInput] = useContext(AddPostInput)
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='AddPost'>
          <div className='postUserImg'>
            <div className='imgParent'>
              <img src={currLoggedIn.img} alt='img' />
            </div>
          </div>
          <div className='addPostRightCol'>
            <div>
              {/* this should be a modal */}

              <input
                className='addPostInput'
                placeholder='Add post'
                type='text'
                value={addPostInput}
                onChange={(e) => setAddPostInput(e.target.value)}
              />
            </div>
            <div className='addPostButtons'>
              <button
                onClick={addPostSubmitHandler}
                style={{ fontSize: '12px' }}
                className='likeButton'
              >
                <i className='fas fa-cookie-bite'></i> Post
              </button>
              <button style={{ fontSize: '12px' }} className='likeButton'>
                <i className='fas fa-image'></i> Add photo
              </button>
              <button style={{ fontSize: '12px' }} className='likeButton'>
                <i className='fas fa-smile-beam'></i> Feeling
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom HR Line */}
      <div
        style={{
          borderBottom: 'solid #F2F2F2 2px',
          width: '100%',
          margin: '50px 0px 50px 0px',
        }}
      ></div>
    </>
  )
}

export default AddPost
