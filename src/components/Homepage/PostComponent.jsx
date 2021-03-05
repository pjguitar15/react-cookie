import React, { useContext } from 'react'
import { PostData, CurrLoggedIn } from '../../GlobalState'
const PostComponent = () => {
  const [postData, setPostData] = useContext(PostData)
  const [currLoggedIn] = useContext(CurrLoggedIn)

  const niceHandler = (id) => {
    const updatedList = postData.map((item) => {
      if (item.id === id) {
        const isLiked = item.likes.includes(currLoggedIn.fullname)

        return !isLiked
          ? {
              ...item,
              nice: item.nice + 1,
              likes: [...item.likes, currLoggedIn.fullname],
            }
          : { ...item }
      }
      return item
    })
    setPostData([...updatedList])
  }
  const nopeHandler = (id) => {
    const updatedList = postData.map((item) => {
      if (item.id === id) {
        const isDisLiked = item.dislikes.includes(currLoggedIn.fullname)

        return !isDisLiked
          ? {
              ...item,
              nope: item.nope + 1,
              dislikes: [...item.dislikes, currLoggedIn.fullname],
            }
          : { ...item }
      }
      return item
    })
    setPostData([...updatedList])
  }
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
                    style={{ clipPath: 'circle()', objectFit: 'cover' }}
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
                    <button
                      onClick={() => niceHandler(item.id)}
                      style={{ fontSize: '13px' }}
                      className='likeButton'
                    >
                      <i className='fas fa-thumbs-up'></i> nice{item.nice}
                    </button>
                    <button
                      onClick={() => nopeHandler(item.id)}
                      style={{ fontSize: '13px' }}
                      className='likeButton'
                    >
                      <i className='fas fa-thumbs-down'></i> nope{item.nope}
                    </button>
                  </div>
                </div>
              </div>
              <hr />

              {/* comment starts here */}
              <div
                className='commentDiv'
                style={{ display: 'flex', marginBottom: '20px' }}
              >
                <div style={{ width: '10%' }}></div>
                <div
                  style={{
                    width: '90%',
                    borderLeft: '5px #F2F2F2 solid',
                    paddingLeft: '20px',
                  }}
                  className='mainPostContent'
                >
                  <div>
                    <h6>Comment 1</h6>
                  </div>

                  <p className='postText'>This is a comment</p>

                  <div>
                    <div>
                      <button
                        onClick={() => niceHandler(item.id)}
                        style={{ fontSize: '10px', padding: '6px 10px' }}
                        className='likeButton'
                      >
                        <i className='fas fa-thumbs-up'></i> nice{item.nice}
                      </button>
                      <button
                        onClick={() => nopeHandler(item.id)}
                        style={{ fontSize: '10px', padding: '6px 10px' }}
                        className='likeButton'
                      >
                        <i className='fas fa-thumbs-down'></i> nope{item.nope}
                      </button>
                      <button
                        style={{ fontSize: '10px', padding: '6px 10px' }}
                        className='likeButton'
                      >
                        <i
                          style={{ marginRight: '4px' }}
                          class='fas fa-comment'
                        ></i>
                        reply
                      </button>
                    </div>
                    <input
                      style={{ display: 'none' }}
                      placeholder='Reply'
                      className='replyInput'
                      type='text'
                    />
                  </div>
                </div>
              </div>

              {/* comment ends here */}
            </div>
          </div>
        ))
        .reverse()}
    </>
  )
}

export default PostComponent
