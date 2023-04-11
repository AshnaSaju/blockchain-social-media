import React from 'react'
import pic1 from "../../assets/user.png"
import pic2 from "../../assets/postimg.jpg"
function Postitem() {
  return (
    <div className="post_item">
    <div className="user_details">
      <img src={pic1} alt="" />
      <div className="name_details">
        <p className="username">@ForgedArmour</p>
        <p className="name">Ajay Antu</p>
      </div>
    </div>
    <div className="post_contents">
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque at eius error excepturi dignissimos laudantium hic sapiente dicta explicabo consequuntur.</span>
      <img src={pic2} alt="" />
    </div>
    <div className="post_controls">
      <i className="bx bx-like" />
      <i className="bx bx-message-dots" />
    </div>
  </div>
  )
}

export default Postitem
