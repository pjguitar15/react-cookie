import React from 'react'
import PostData from '../../Data/PostData'
const PostComponent = () => {
  return (
    <>
      {PostData.map((item, index) => (
        <div key={index} className='postComponent'>
          <div className='postParent'>
            <div className='postUserImg'>
              <div className='imgParent'>
                <img src={item.img} alt='img' />
                <div style={{ fontSize: '12px', color: '#6C757D' }}>
                  few minutes ago
                </div>
              </div>
            </div>
            <div className='mainPostContent'>
              <div>
                <h3>{item.name}</h3>
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
      )).reverse()}
    </>
  )
}

export default PostComponent
