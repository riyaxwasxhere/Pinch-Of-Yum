import React, { useState } from 'react'

const Inbox = () => {
    const [close, setClose] = useState(false)
    const handleClose = () =>{
        setClose(true)
    }

  return (
    <>
      <div id="inbox" className={close? "close" : "" }>
        <i id='heart' className="fa-solid fa-heart"></i>
        <h2>our recipes, your inbox. <span id='signup'>Sign up</span></h2>
        <button id='close' onClick={handleClose}><i className="fa-solid fa-close"></i></button>
      </div>
    </>
  )
}

export default Inbox
