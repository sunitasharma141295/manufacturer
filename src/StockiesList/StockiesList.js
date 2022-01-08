import React from 'react';
import {Link} from 'react-router-dom'; 

// css
import './stockiesList.css';

// img
import img1 from '../img/s4.jpg';

function StockiesList(){
    return(
        <>
<div className="container" >
    
    <div className="col-md-12  ml-3 ">
            <p className="btn table-title">Stockies   </p>
            {/* <Link  className="btn bg-primary text-light float-right ">+ Add Category</Link>
            <Link  className="btn bg-light border-primary float-right mr-2">+ Add Product</Link> */}
    
    </div>
    
    {/* table */}
    <div className="col-md-12 box  mt-3 mb-5 ml-3 p-4 shadow ">
    
    {/* table  */}
    <table className="table  table-hover">
        <thead>
            <tr>
                <th scope="col" className='dp-colums'></th>
                <th scope="col">Name</th>
                <th scope="col">Id</th>
                <th scope="col">Region</th>
                <th scope="col" className='last-column'></th>
            </tr>
        </thead>
        
        <tbody>
            
            <tr className=''>
                <td>
                    <img src={img1}  alt='...' className="list_photo  " />
                </td>
                <td>Rahul Diwan </td>
                <td>RW-45-654  </td>
                <td>Brazil  </td>
                <td>
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                        <Link to='' className="dropdown-item" >Request List </Link>
                        <Link to='' className="dropdown-item" >Chat</Link>
                    </div>
                </td>
            </tr>
            
            <tr className=''>
                <td>
                    <img src={img1}  alt='...' className="list_photo  " />
                </td>
                <td>Rahul Diwan </td>
                <td>RW-45-654  </td>
                <td>Brazil  </td>
                <td>
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                        <Link to='' className="dropdown-item" >Request List </Link>
                        <Link to='' className="dropdown-item" >Chat</Link>
                    </div>
                </td>
            </tr>
            
            <tr className=''>
                <td>
                    <img src={img1}  alt='...' className="list_photo  " />
                </td>
                <td>Rahul Diwan </td>
                <td>RW-45-654  </td>
                <td>Brazil  </td>
                <td>
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                        <Link to='' className="dropdown-item" >Request List </Link>
                        <Link to='' className="dropdown-item" >Chat</Link>
                    </div>
                </td>
            </tr>
            
            <tr className=''>
                <td>
                    <img src={img1}  alt='...' className="list_photo  " />
                </td>
                <td>Rahul Diwan </td>
                <td>RW-45-654  </td>
                <td>Brazil  </td>
                <td>
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                        <Link to='' className="dropdown-item" >Request List </Link>
                        <Link to='' className="dropdown-item" >Chat</Link>
                    </div>
                </td>
            </tr>
            
            <tr className=''>
                <td>
                    <img src={img1}  alt='...' className="list_photo  " />
                </td>
                <td>Rahul Diwan </td>
                <td>RW-45-654  </td>
                <td>Brazil  </td>
                <td>
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                        <Link to='' className="dropdown-item" >Request List </Link>
                        <Link to='' className="dropdown-item" >Chat</Link>
                    </div>
                </td>
            </tr>
            
            <tr className=''>
                <td>
                    <img src={img1}  alt='...' className="list_photo  " />
                </td>
                <td>Rahul Diwan </td>
                <td>RW-45-654  </td>
                <td>Brazil  </td>
                <td>
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                        <Link to='' className="dropdown-item" >Request List </Link>
                        <Link to='' className="dropdown-item" >Chat</Link>
                    </div>
                </td>
            </tr>
            
            <tr className=''>
                <td>
                    <img src={img1}  alt='...' className="list_photo  " />
                </td>
                <td>Rahul Diwan </td>
                <td>RW-45-654  </td>
                <td>Brazil  </td>
                <td>
                    <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className='fa fa-ellipsis-h' />
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to='/manufacturer-details' className="dropdown-item" >View Detail</Link>
                        <Link to='' className="dropdown-item" >Request List </Link>
                        <Link to='' className="dropdown-item" >Chat</Link>
                    </div>
                </td>
            </tr>
            
            
            
    
        </tbody>
    </table>
    
    {/* pagination  */}
            <div className='nav   justify-content-end'>
            <nav aria-label="...">
            <ul className="pagination">
            <li className="page-item disabled">
            <button className="page-link"  tabIndex="-1">Previous</button> </li>
            <li className="page-item active">
                <button className="page-link" >1</button></li>
            <li className="page-item ">
            <button className="page-link" >2 </button>  </li>
            <li className="page-item">
                <button className="page-link" >3</button></li>
            <li className="page-item">
            <button className="page-link" >Next</button>    </li>
        </ul>
            </nav>
            </div>
    
    
    
    
            </div>
    
    
    
    
    
    
    
    
    
    </div>
    </>
    
    );
}

export default StockiesList  ;