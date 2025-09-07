import React from 'react'
import './Social.css'
import { FaInstagram, FaPinterest, FaTiktok, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Social = () => {
  return (
    <div id='s-platforms'>
        <FaInstagram className='icon'/>
        <FaPinterest className='icon'/>
        <FaTiktok className='icon'/>
        <FaFacebook className='icon'/>
        <FaXTwitter className='icon'/>
        <FaYoutube className='icon'/>
    </div>
  )
}

export default Social
