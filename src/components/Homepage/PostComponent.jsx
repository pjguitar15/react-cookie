import React, { useContext, useState } from 'react'
import { PostData, CurrLoggedIn } from '../../GlobalState'
const PostComponent = () => {
  const [postData, setPostData] = useContext(PostData)
  const [currLoggedIn] = useContext(CurrLoggedIn)
  const [replyShow, setReplyShow] = useState(false)
  const [commentTest, setCommentTest] = useState([
    {
      id: 1,
      username: 'test',
      text: 'lorem pipsun',
      show: false,
    },
    {
      id: 2,
      username: 'testp',
      text: 'lorem pipsunfdsfsd',
      show: false,
    },
  ])

  // handlers likeCount increment
  const niceHandler = (id) => {
    const updatedList = postData.map((item) => {
      if (item.id === id) {
        // lets users only able to hit like once
        const isLiked = item.likes.includes(currLoggedIn.fullname)

        // ternary, if user is on likedUser list, then returns back items without updating anything
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
  // handlers dislikeCount increment
  const nopeHandler = (id) => {
    const updatedList = postData.map((item) => {
      if (item.id === id) {
        // lets users only able to hit dislike once
        const isDisLiked = item.dislikes.includes(currLoggedIn.fullname)
        // ternary, if user is on dislikedUser list, then returns back items without updating anything
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

  const replyHandler = (id) => {
    const updatelist = commentTest.map((item) => {
      if (item.id === id) {
        const currShow = item.show
        return { ...item, show: !currShow }
      }
      return item
    })
    setCommentTest([...updatelist])
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
              {commentTest.map((item, index) => (
                <div
                  key={index}
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
                          onClick={() => replyHandler(item.id)}
                          style={{ fontSize: '10px', padding: '6px 10px' }}
                          className='likeButton'
                        >
                          <i
                            style={{ marginRight: '4px' }}
                            className='fas fa-comment'
                          ></i>
                          reply
                        </button>
                      </div>
                      <input
                        style={{ display: item.show ? 'block' : 'none' }}
                        placeholder='Reply'
                        className='replyInput'
                        type='text'
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* comment ends here */}
            </div>
          </div>
        ))
        .reverse()}
    </>
  )
}

export default PostComponent
