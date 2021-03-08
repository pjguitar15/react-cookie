import React, { useContext, useState } from 'react'
import { PostData, CurrLoggedIn } from '../../GlobalState'
const PostComponent = () => {
  const [postData, setPostData] = useContext(PostData)
  const [currLoggedIn] = useContext(CurrLoggedIn)
  const [inputValue, setInputValue] = useState('')
  
  // to grab the comment ID to determine which comment to update
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
          img: currLoggedIn.img,
          likes: [],
          dislikes: [],
          likeCount: 1,
          dislikeCount: 0,
        })
        return item
      }
      return item
    })
    setInputValue('')
    console.log(test)
    // alert('test')
  }

  const replyNiceHandler = (id) => {
    alert('test')
  }

  const replyNopeHandler = (id) => {
    alert('test')
  }

  return (
    <>
      {postData
        .map((item, index) => (
          <div key={index} className='postComponent mt-5 '>
            <div className='postParent shadow-sm'>
              <div className='mainPostContent'>
                {/* row */}
                <div className='row d-flex align-items-center'>
                  <div className='postUserImg col-2 p-0'>
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
                  <div className='col-10 px-0'>
                    <h5>{item.fullname}</h5>
                    <p className='postText'>{item.text}</p>
                  </div>
                </div>
                {/* end of row */}

                <div className='postInteract'>
                  <form onSubmit={replyCommentHandler}>
                    <input
                      onClick={() => setCurrCommReplyId(item.id)}
                      onChange={(e) => setInputValue(e.target.value)}
                      value={inputValue}
                      placeholder='comment'
                      className='commentInput'
                      type='text'
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
              {item.comments.length > 0 && (
                <hr style={{ height: '0.3px', color: 'lightgrey' }} />
              )}

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
                      <div
                        className='row'
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <div className='postUserImg col-1 p-0'>
                          <div className='imgParent'>
                            <img
                              style={{
                                clipPath: 'circle()',
                                objectFit: 'cover',
                              }}
                              src={item.img}
                              alt='userimg'
                            />
                          </div>
                        </div>
                        <div className='col-11 p-0'>
                          <h6>{item.fullname}</h6>
                          <p className='postText'>{item.text}</p>
                        </div>
                      </div>
                      <div>
                        <div className='pt-1'>
                          <button
                            onClick={() => replyNiceHandler(item.id)}
                            className='reply-like-button'
                          >
                            <i className='fas fa-thumbs-up'></i> nice
                            {item.likeCount}
                          </button>
                          <button
                            onClick={() => replyNopeHandler(item.id)}
                            className='reply-like-button'
                          >
                            <i className='fas fa-thumbs-down'></i> nope
                            {item.nope}
                          </button>
                        </div>
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
