import React from 'react';
import './TopBar.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaUser } from 'react-icons/fa';
import { MdLogin } from "react-icons/md";


const TopBar:React.FC = ()=>{
  return (
    <section className="topBar">
        <div className="containers">
            <div className="topBar_wrapper">
                <div className="topBar_right">
                    <ul className="topBar_media">
                        <li className="topBar_media_item">
                            <Link to='' className='topBar_media_link'>
                                <FaFacebook/>
                            </Link>
                        </li>
                        <li className="topBar_media_item">
                            <Link to='' className='topBar_media_link'>
                                <FaTwitter/>
                            </Link>
                        </li>
                        <li className="topBar_media_item">
                            <Link to='' className='topBar_media_link'>
                                <FaInstagram/>
                            </Link>
                        </li>
                        <li className="topBar_media_item">
                            <Link to='' className='topBar_media_link'>
                                <FaLinkedin/>
                            </Link>
                        </li>
                    </ul>
                        <Link to='' className='topBar_Link'>
                            <FaPhone/>
                                <span className="topBar_Link_text">
                                09123244556
                                </span>
                        </Link>
                        <Link to='' className='topBar_Link'>
                            <FaMailBulk/>
                            <span className="topBar_Link_text">
                                    myTripInfo@gmail.com
                                </span> 
                        </Link>
                </div>
                <div className="topBar_left">
                <Link to='' className='topBar_Link'>
                            <MdLogin/>
                                <span className="topBar_Link_text">
                                    وارد شدن
                                </span>
                        </Link>
                        <Link to='' className='topBar_Link'>
                            <FaUser/>
                            <span className="topBar_Link_text">
                                    ثبت نام
                                </span> 
                        </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopBar