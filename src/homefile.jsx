import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import './home.css';
 function Home(){
     return(
         <>

      
        <div className="home">
         <SideBar />
         <NavBar/>
         </div>
        </>
     );
 }
export default Home;