import React, { useContext } from 'react'
import "./peoplemodal.css"
import userimg from "../../../assets/user.png"
import ModalContext from '../../../Context/ModalContext'

const PeopleModal = () => {
    const context = useContext(ModalContext)
    const { openPeople, closePeopleModal } = context

    return (
        <>
            {openPeople && <div className='PeopleModal'>
                <div className="box">
                    <div className="header">
                        <div className="heading"><b>People</b></div>
                        <i style={{ cursor: "pointer" ,color:"red" }} className='bx bx-x-circle bx-sm' onClick={() => { closePeopleModal() }}></i>

                    </div>
                    <div className="list">

                        <div className="user">
                            <div className='info'>
                                <img src={userimg} alt="" width={50} />
                                <div className="name">
                                    <b>username</b>
                                    <span>name</span>
                                </div>
                            </div>
                            <div className="btn follow">
                                Follow
                            </div>
                        </div>


                        <div className="user">
                            <div className='info'>
                                <img src={userimg} alt="" width={50} />
                                <div className="name">
                                    <b>username</b>
                                    <span>name</span>
                                </div>
                            </div>
                            <div className="btn">
                                Following
                            </div>
                        </div>

                        <div className="user">
                            <div className='info'>
                                <img src={userimg} alt="" width={50} />
                                <div className="name">
                                    <b>username</b>
                                    <span>name</span>
                                </div>
                            </div>
                            <div className="btn follow">
                                Follow
                            </div>
                        </div>

                        <div className="user">
                            <div className='info'>
                                <img src={userimg} alt="" width={50} />
                                <div className="name">
                                    <b>username</b>
                                    <span>name</span>
                                </div>
                            </div>
                            <div className="btn">
                                Following
                            </div>
                        </div>

                        <div className="user">
                            <div className='info'>
                                <img src={userimg} alt="" width={50} />
                                <div className="name">
                                    <b>username</b>
                                    <span>name</span>
                                </div>
                            </div>
                            <div className="btn">
                                Following
                            </div>
                        </div>

                        <div className="user">
                            <div className='info'>
                                <img src={userimg} alt="" width={50} />
                                <div className="name">
                                    <b>username</b>
                                    <span>name</span>
                                </div>
                            </div>
                            <div className="btn follow">
                                Follow
                            </div>
                        </div>

        



                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default PeopleModal