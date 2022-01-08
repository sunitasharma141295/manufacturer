import React from 'react';
import {Link } from 'react-router-dom';

// css
import './sideBar.css';

// img
import ProfilePic from '../img/Avtar01.jpg';
import logo from '../img/logo.png';

function SideBar(){
    return (
        <>
        
<div className="sideBar shadow">

      <img src={logo} alt='...' className='logo mx-auto d-block mt-4' />

  <div className="Profile mt-5 mb-4 ml-4">
    <div className="dp">
      <img src={ProfilePic} alt='...'  className="profile_photo  " circle="Profile Image"/>
    </div>
    <div>
      <p className="userTitle">Sierra Ferguson</p>
      <p className="userSubTitle">s.ferguson@gmail.com</p>
    </div>
  </div>
  <ul>
    <li>
      <Link to="" >
        <i className="fa fa-dashboard" />
        Dashboard
      </Link>
    </li>
    <li className="dropdown">
      {/*drop down btn*/}
      <Link to=""
        
        className="dropdown-toggle"
        type="button"
        id="clientDropDown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fa fa-address-book-o" />
        Client
      </Link>
      {/*drop down content*/}
      <div className="dropdown-menu" aria-labelledby="clientDropDown">
        <Link to="/manufacturer-list" className="dropdown-item" >
          Manufacturer
        </Link>
        <Link to="/retailer-list" className="dropdown-item" >
          Retailer
        </Link>
        <Link to="/stockies-list" className="dropdown-item" >
          Stockist
        </Link>
        <Link to="/customer-list" className="dropdown-item" >
          Customer
        </Link>
      </div>
    </li>
    <li className="dropdown">
      {/*drop down btn*/}
      <Link to=""
        
        className="dropdown-toggle"
        type="button"
        id="catDropDown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fa fa-list-ul" />
        Categories
      </Link>
      {/*drop down content*/}
      <div className="dropdown-menu" aria-labelledby="catDropDown">
        <Link to="/all-category" className="dropdown-item" >
          All Category
        </Link>
        <Link to="/add-category" className="dropdown-item" >
          Add Categories
        </Link>
        <Link to="/request-list" className="dropdown-item" >
          Request List
        </Link>        
        <Link to="review-list" className="dropdown-item" >
          Review List
        </Link>
      </div>
    </li>
    <li>
      <Link to="/product-list" >
        <i className="fa fa-superpowers" />
        Product
      </Link>
    </li>
    <li>
      <Link to="/account" >
        <i className="fa fa-user" />
        Account
      </Link>
    </li>
    <li>
      <Link to="" >
        <i className="fa fa-briefcase" />
        Deal
      </Link>
    </li>
    <li>
      <Link to="/help-support" >
        <i className="fa fa-plug" />
        Help Support
      </Link>
    </li>
   
    <li>
      <Link to="/subscription" >
        <i className="fa fa-check-circle-o" />
        Subscription
      </Link>
    </li>
    
  </ul>
  {/*-bottome section of  side bar*/}
  <span style={{ position: "absolute", bottom: 0 }}>
    <ul>
      <li>
        <Link to="" >
          <i className="fa fa-bullseye" />
          FAQ
        </Link>
      </li>
      <li>
        <Link to="/profile-setting" >
          <i className="fa fa-gear" />
          Setting
        </Link>
      </li>
      <li>
        <Link to="" >
          <i className="fa fa-sign-out" />
          Log Out
        </Link>
      </li>
    </ul>
  </span>
</div>
        </>

    );
}

export default SideBar  ;