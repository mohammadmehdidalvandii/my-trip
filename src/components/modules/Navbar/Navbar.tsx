import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [activeMenu , setActiveMenu] =useState(false);

    const handlerShowMenu = ()=>{
        setActiveMenu(true);
    }
    const handlerExitMenu = ()=>{
        setActiveMenu(false);
    }

  return (
    <section className="navBar">
      <div className="containers">
        <div className="navbar_wrapper">
          <Link to="/" className="navbar_link_logo">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="navbar_img"
            />
          </Link>
          <ul className="navbar_items">
            <li className="navbar_item">
              <Link to="/" className="navbar_item_link">
                خانه
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="/" className="navbar_item_link">
                پرواز
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="/" className="navbar_item_link">
                هتل
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="/" className="navbar_item_link">
                درباره ما
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="/" className="navbar_item_link">
                تور
              </Link>
            </li>
            <li className="navbar_item">
              <Link to="/" className="navbar_item_link">
                تماس با ما
              </Link>
            </li>
          </ul>
          {/* Navbar Menu Mobile */}
          <span className="button_primary navbar_res_icon" 
          onClick={handlerShowMenu}
          >
            <FaBars />
          </span>
          {activeMenu && (
          <div className="shadow">
          <span className="navbar_icon_shadow    button_primary"
            onClick={handlerExitMenu}
          >
            <FaTimes />
          </span>
            <div className="navbar_rs_wrapper">
              <ul className="navbar_items_res">
                <li className="navbar_item">
                  <Link to="/" className="navbar_item_link">
                    خانه
                  </Link>
                </li>
                <li className="navbar_item">
                  <Link to="/" className="navbar_item_link">
                    پرواز
                  </Link>
                </li>
                <li className="navbar_item">
                  <Link to="/" className="navbar_item_link">
                    هتل
                  </Link>
                </li>
                <li className="navbar_item">
                  <Link to="/" className="navbar_item_link">
                    درباره ما
                  </Link>
                </li>
                <li className="navbar_item">
                  <Link to="/" className="navbar_item_link">
                    تور
                  </Link>
                </li>
                <li className="navbar_item">
                  <Link to="/" className="navbar_item_link">
                    تماس با ما
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          )}
          {/* Navbar Menu Mobile */}
          <Link to="" className="button_primary navbar_link_service">
            یک متخصص شوید
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
