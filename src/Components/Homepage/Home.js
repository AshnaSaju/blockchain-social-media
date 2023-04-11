import React, { useContext } from "react"
import Middlesection from "../Middlesection/MiddleSection"
import Rightsection from "../Rightsection/Rightsection"
import SideBar from "../Sidebar/Sidebar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./Home.css"
import MyPosts from "../MyPosts/MyPosts"
import MyProfile from "../MyProfile/MyProfile"
import FriendModal from "../Modals/FriendsModal/FriendModal"
import PeopleModal from "../Modals/PeopleModal/PeopleModal"
import CreateModal from "../Modals/CreateModal/CreateModal"


function Home() {
    return (
        <div className="main_container">
            <Router>
            <SideBar />
                <FriendModal/>
                <PeopleModal/>
                <CreateModal/>
                <Routes>
                    <Route exact path="/" element={<>
                        <Middlesection />
                        <Rightsection/>
                    </>
                    }/>
                    <Route exact path="/myposts" element={<MyPosts/>} />
                    <Route exact path="/myprofile" element={<MyProfile/>}/>

                </Routes>
            </Router>
        </div>
    )
}
export default Home