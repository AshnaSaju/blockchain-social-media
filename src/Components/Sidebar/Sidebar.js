import React, { useContext, useState } from "react";
import "./Sidebar.css"
import pic3 from "../../assets/blockchain.png"
import { Link } from "react-router-dom"
import ModalContext from "../../Context/ModalContext";
function SideBar() {
  const context = useContext(ModalContext)
  const {openViewModal,openPeopleModal,openCreateModal} = context
  return (

    <div className="sidebar">
      <div className="bars">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="{1.5}" stroke="currentColor" classname="w-6 h-6">
          <path strokelinecap="round" strokelinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
      </div>
      <div className="sidebar_contents">
        <div className="image-text">
          <div className="img">
            <img src={pic3} alt="" />
          </div>
          <div className="logo-text">
            <span>WeChain</span>
          </div>
        </div>
        <div className="list_items">
          <div className="menu">
            <ul className="menu_links">
              <div className="main_links">
                <li>
                  <Link to="/">
                    <i className="bx bxs-home" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={()=>{openViewModal()}}>
                    <i className="bx bx-user-plus" />
                    <span>Friends</span>
                  </Link>
                </li>
                <li>
                  <a href>
                    <i className="bx bx-search" />
                    <span>Search</span>
                  </a>
                </li>
                <li>
                  <a href>
                    <i className="bx bx-message-square-dots" />
                    <span>Chat</span>
                  </a>
                </li>
                <li>
                  <Link onClick={()=>{openCreateModal()}}>
                    <i className="bx bx-edit-alt" />
                    <span>Create</span>
                  </Link>
                </li>
                <li>
                  <Link to='/myposts'>
                    <i className="bx bx-archive-in" />
                    <span>My Posts</span>
                  </Link>
                </li>
                <li>
                  <Link to="/myprofile">
                    <i className="bx bx-user-pin" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={openPeopleModal}>
                    <i className="bx bx-group" />
                    <span>People</span>
                  </Link>
                </li>
                <li>
                  <a href>
                    <i className="bx bx-info-circle" />
                    <span>About</span>
                  </a>
                </li>
              </div>
              <div className="bottom_content">
                <li>
                  <a href>
                    <i className="bx bx-log-out" />
                    <span>Logout</span>
                  </a>
                </li>
                <li className="mode">
                  <div className="sun-moon">
                    <i className="bx bx-moon icon moon" />
                    <i className="bx bx-sun icon sun" />
                  </div>
                  <span className="mode-text text">Dark mode</span>
                  <div className="toggle-switch">
                    <span className="switch" />
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideBar