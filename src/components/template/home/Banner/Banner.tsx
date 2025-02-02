import React from 'react';
import './Banner.css';

const Banner:React.FC =  () =>{
  return (
    <section className="banner">
        <div className="banner_shadow">
        <div className="containers">    
        <div className="banner_content">
                <h1 className="banner_title">کاوش کنید جهان  باهم</h1>
                <p className="banner_text">پرواز کردن پرواز عالی , عالی , تور , ماشین و بسته ها</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Banner