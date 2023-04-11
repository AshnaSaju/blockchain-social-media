import React, { useContext } from 'react'
import "./friendmodal.css"
import userimg from "../../../assets/user.png"
import ModalContext from '../../../Context/ModalContext'

const FriendModal = () => {
    const context = useContext(ModalContext)
    const { openView, closeViewModal } = context

    return (
        <>
            {openView && <div className='FriendModal'>
                <div className="box">
                    <div className="header">
                        <div className="heading"><b>Views</b></div>
                        <i style={{ cursor: "pointer" ,color:"red" }} className='bx bx-x-circle bx-sm' onClick={() => { closeViewModal() }}></i>

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

        



                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default FriendModal