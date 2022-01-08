import React from 'react';
import {Link} from 'react-router-dom';

// img
import ProfilePic from './../img/Avtar01.jpg';

const nav={
  position: "fixed",
  top: "0",
  right: "0",
  left: "240px",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  height: "auto",
  boxSizing: "border-box",
  backgroundColor: "#ffffff"
};
const searchBox={
  width: "55%",
  display: "flex",
  alignItems: "center",
  color: "#808080",
  paddingRight: "10px",
  marginRight:"auto",
  marginLeft:"auto",
};

const Profile={ 
  display: "flex", 
  alignItems: "center"
};

const profile_photo={
  height: "50px",
  width: "50px",
  marginRight: "5px",
  borderRadius: "50px",
  boxSizing: "border-box"
};

const userTitle={
  margin: "0",
  fontFamily: "'Inter', sans-serif",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: "14px",
  color: "#192A3E"
};

const userSubTitle={
  margin: "0",
  fontFamily: "'Inter', sans-serif",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  color: "#90A0B7"
};

const navBtn={
  alignItem:'end',
};



function NavBar(){
    return(
        
<nav style={nav} className="  mb-3 shadow ">
        <div style={ searchBox } className=" ">
          <i className=" fa fa-search mr-2 ml-2"></i>
          <input type="search"  className=" form-control border-0 " placeholder="Search"/>
        </div>
    
        <div className=" dropdown" >
          <div   style={Profile} className=" btn dropdown-toggle "     
          id="navProfileDropDown" 
          data-toggle="dropdown"    
          >
            <img src={ProfilePic} alt='...' style={profile_photo  } className="  " circle="Profile Image"/>
            
          <div  className=" mr-1">
                <p style={ userTitle } className=" ">Sierra Ferguson</p> 
                <p style={ userSubTitle } className=" ">Admin</p>
          </div>
        </div>
        <div  className=" dropdown-menu text-center p-4" aria-labelledby="navProfileDropDown">
          <Link  to ='/account' className=" dropdown-item" >
            Profile</Link>
          <Link  to ='/profile-setting' className=" dropdown-item" >
            Account Setting </Link>
          <Link  to ='/help-support' className=" dropdown-item" >
            Help & Support</Link>
          <Link  to ='' className=" dropdown-item" >
            Log Out</Link>
        </div>      
        </div>
    
        <div  className=" ml-2 mr-2 ">
          <button  className=" btn ml-2 mr-2" id="notificationDropDown"   data-toggle="dropdown"  >
            <i  className=" fa fa-bell" > </i>
          </button>
          <div  className=" dropdown-menu" aria-labelledby="notificationDropDown">
            <Link to='' className=" dropdown-item" >Notification 1</Link>
            <Link to='' className=" dropdown-item" >Notification 2 </Link>
            <Link to='' className=" dropdown-item" >Notification 3</Link>
          </div>   
        </div>
    
        <div style={navBtn} className='mr-5'  >
          <Link to=''  className="btn btn-primary text-light">Invite</Link>
        </div>
    
      </nav>

    
     
    );
}

export default  NavBar ;


