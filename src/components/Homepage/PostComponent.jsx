import React, { useContext, useState } from 'react'
import { PostData, CurrLoggedIn } from '../../GlobalState'
const PostComponent = () => {
  const [postData, setPostData] = useContext(PostData)
  const [currLoggedIn] = useContext(CurrLoggedIn)
  const [inputValue, setInputValue] = useState('')
  const [CurrCommReplyId, setCurrCommReplyId] = useState('')
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

  const replyCommentHandler = (e) => {
    e.preventDefault()
    const test = postData.map((item) => {
      if (item.id === CurrCommReplyId) {
        item.comments.push({
          id: Date.now(),
          fullname: currLoggedIn.fullname,
          user: currLoggedIn.username,
          text: inputValue,
        })
        return item
      }
      return item
    })
    console.log(test)
    setInputValue('')
  }

  const replyHandler = (id) => {}
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
                  <form onSubmit={replyCommentHandler}>
                    <input
                      onClick={() => setCurrCommReplyId(item.id)}
                      onChange={(e) => setInputValue(e.target.value)}
                      value={inputValue}
                      placeholder='comment'
                      className='commentInput'
                      type='text'
                      name='replyvalue'
                      autoComplete='off'
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
              {item.comments
                .map((item, index) => (
                  <div
                    key={index}
                    className='commentDiv'
                    style={{ display: 'flex', marginBottom: '20px' }}
                  >
                    <div style={{ width: '5%' }}></div>
                    <div
                      style={{
                        width: '95%',
                        borderLeft: '5px #F2F2F2 solid',
                        paddingLeft: '20px',
                      }}
                      className='mainPostContent'
                    >
                      <div>
                        <h6>{item.user}</h6>
                      </div>

                      <p className='postText'>{item.text}</p>

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
                            <i className='fas fa-thumbs-down'></i> nope
                            {item.nope}
                          </button>
                          {/* <button
                            onClick={() => replyHandler(item.id)}
                            style={{ fontSize: '10px', padding: '6px 10px' }}
                            className='likeButton'
                          >
                            <i
                              style={{ marginRight: '4px' }}
                              className='fas fa-comment'
                            ></i>
                            reply
                          </button> */}
                        </div>
                        {/* <input
                          placeholder='Reply'
                          className='replyInput'
                          type='text'
                        /> */}
                      </div>
                    </div>
                  </div>
                ))
                .reverse()}

              {/* comment ends here */}
            </div>
          </div>
        ))
        .reverse()}
    </>
  )
}

export default PostComponent
