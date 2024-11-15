import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
  return (
    <div className="testimonials">
        <img src={next_icon} alt="" className='next-btn'/>
        <img src={back_icon} alt="" className='back-btn'/>
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William jackson</h3>
                                <span>Educity,USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora illum dolore accusantium voluptas et neque veritatis magni quo provident est, asperiores molestias quam magnam quis iste aperiam, quod eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, et. Quas consectetur, similique quasi ratione placeat aliquid esse blanditiis voluptatem explicabo, eveniet itaque magnam unde odio voluptatibus alias nisi qui!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William jackson</h3>
                                <span>Educity,USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora illum dolore accusantium voluptas et neque veritatis magni quo provident est, asperiores molestias quam magnam quis iste aperiam, quod eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, et. Quas consectetur, similique quasi ratione placeat aliquid esse blanditiis voluptatem explicabo, eveniet itaque magnam unde odio voluptatibus alias nisi qui!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William jackson</h3>
                                <span>Educity,USA</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora illum dolore accusantium voluptas et neque veritatis magni quo provident est, asperiores molestias quam magnam quis iste aperiam, quod eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, et. Quas consectetur, similique quasi ratione placeat aliquid esse blanditiis voluptatem explicabo, eveniet itaque magnam unde odio voluptatibus alias nisi qui!</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William jackson</h3>
                                <span>Educity,USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora illum dolore accusantium voluptas et neque veritatis magni quo provident est, asperiores molestias quam magnam quis iste aperiam, quod eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, et. Quas consectetur, similique quasi ratione placeat aliquid esse blanditiis voluptatem explicabo, eveniet itaque magnam unde odio voluptatibus alias nisi qui!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials