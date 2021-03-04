import React, { useContext } from 'react'
import { PostData } from '../../GlobalState'
const PostComponent = () => {
  const [postData] = useContext(PostData)
  return (
    <>
      {postData
        .map((item, index) => (
          <div key={index} className='postComponent'>
            <div className='postParent'>
              <div className='postUserImg'>
                <div
                  style={{
                    width: '100%',
                    height: '50%',
                  }}
                  className='imgParent'
                >
                  <img
                    style={{ height: '100%', objectFit: 'cover' }}
                    src={item.img}
                    alt='userimg'
                  />
                </div>
              </div>
              <div className='mainPostContent'>
                <div>
                  <h5>{item.fullname}</h5>
                </div>

                <p className='postText'>{item.text}</p>

                <div className='postInteract'>
                  <form>
                    <input
                      placeholder='comment'
                      className='commentInput'
                      type='text'
                    />
                  </form>
                  <div>
                    <button style={{ fontSize: '13px' }} className='likeButton'>
                      <i className='fas fa-thumbs-up'></i> nice
                    </button>
                    <button style={{ fontSize: '13px' }} className='likeButton'>
                      <i className='fas fa-thumbs-down'></i> nope
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
        .reverse()}
    </>
  )
}

export default PostComponent
