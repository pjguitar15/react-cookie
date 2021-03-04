import React from 'react'

const PhotoPost = () => {
  return (
    <div>
      <div className='postComponent'>
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
                src=''
                alt='userimg'
              />
            </div>
          </div>
          <div className='mainPostContent'>
            <div>
              <h5>Test</h5>
            </div>

            <p className='postText'>Test</p>

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
    </div>
  )
}

export default PhotoPost
