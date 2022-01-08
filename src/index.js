// libraries
import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// css
import "./index.css";

// components
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

import ManufacturerList from "./manufacturerList/ManufacturerList";
import ManufacturerDetails from "./ManufacturerDetails/ManufacturerDetails";
import RequestList from "./RequestList/RequestList";
import RetailerList from "./RetailerList/RetailerList";
import StockiesList from "./StockiesList/StockiesList";
import CustomerList from "./CustomerList/CustomerList";
import ReviewList from "./ReviewList/ReviewList";
// categories routing
import AllCategory from "./AllCategory/AllCategory";
import AddCategory from "./AddCategory/AddCategory";
import EditCategory from "./EditCategory/EditCategory";
import ViewCategory from "./ViewCategory/ViewCategory";
// product routing
import ProductList from "./ProductList/ProductList";
import AddProduct from "./AddProduct/AddProduct";
import EditProduct from "./EditProduct/EditProduct";
import ViewProduct from "./ViewProduct/ViewProduct";

import Account from "./Account/Account";
import ProfileSetting from "./profileSetting/ProfileSetting";
import HelpSupport from "./HelpSupport/HelpSupport";
import Subscription from "./Subscription/Subscription";
// import ErrorPage from "./ErrorPage";
import Home from "./homefile";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


reactDom.render(
  <>
    
    <Router>
    
      <Routes>
        {/* <Route path="*" element={ <ErrorPage /> } /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={ <><SideBar /> <NavBar /> <ProfileSetting /> </> } /> */}
        <Route path="/profile-setting" element={ <><SideBar />  <NavBar /><ProfileSetting /> </> } />
        <Route path="/manufacturer-list" element={ <><SideBar />  <NavBar /><ManufacturerList /> </> } />
        <Route path="/manufacturer-details" element={ <><SideBar />  <NavBar /><ManufacturerDetails /> </> } />
        <Route path="/request-list" element={ <><SideBar />  <NavBar /><RequestList /> </> } />
        <Route path="/retailer-list" element={ <><SideBar />  <NavBar /><RetailerList /> </> } />
        <Route path="/stockies-list" element={ <><SideBar />  <NavBar /><StockiesList /> </> } />
        <Route path="/customer-list" element={ <><SideBar />  <NavBar /><CustomerList /> </> } />
        <Route path="/review-list" element={ <><SideBar />  <NavBar /><ReviewList /> </> } />
        <Route path="/all-category" element={ <><SideBar />  <NavBar /><AllCategory /> </> } />
        <Route path="/add-category" element={ <><SideBar />  <NavBar /><AddCategory /> </> } />
        <Route path="/account" element={ <><SideBar />  <NavBar /><Account /> </> } />
        <Route path="/help-support" element={ <><SideBar />  <NavBar /><HelpSupport /> </> } />
        <Route path="/subscription" element={ <><SideBar />  <NavBar /><Subscription /> </> } />
        <Route path="/product-list" element={ <><SideBar />  <NavBar /><ProductList /> </> } />
        <Route path="/add-product" element={ <><SideBar />  <NavBar /><AddProduct /> </> } />
        <Route path="/edit-product" element={ <><SideBar />  <NavBar /><EditProduct /> </> } />
        <Route path="/view-product" element={ <><SideBar />  <NavBar /><ViewProduct /> </> } />
        <Route path="/edit-category" element={ <><SideBar />  <NavBar /><EditCategory /> </> } />
        <Route path="/view-category" element={ <><SideBar />  <NavBar /><ViewCategory /> </> } />
      </Routes>
    </Router>
  </>,
  document.getElementById("root")
);
