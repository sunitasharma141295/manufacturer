import React from 'react';
import {Link} from 'react-router-dom';

// css
import './manufacturerDetails.css';

// img
import img1 from '../img/dp-1.jpg';

function ManufacturerDetails(){
    return(
        <>
<div className="container" >
<h5 className="btn table-title">Manufacturer Details</h5>

<div className="row">
    {/*  profile section  */}
        <div className="col-md-5 box p-4 ml-5 shadow d-flex">
            {/* left side  */}
            <div className="col-md-3  manuf-card2 ">
                <img src={img1} alt='...' className='list-dp'/>
                <p className="mt-1 mb-0">User Id</p>
                <p className="id m-0">RWE-78</p>
            </div>

            {/* mid  */}
            <div className="col-md-4 ml-3 ">
                <p className="textHead mt-3">Name</p>
                <p className="text">Ryan Reynolds</p>

                <p className="textHead mt-3">Vat/GST no.</p>
                <p className="text">123456789</p>

                <p className="textHead mt-3">Region</p>
                <p className="text">Canda</p>

                <p className="textHead mt-3">Total Sales</p>
                <p className="text">1522</p>
            </div>

            {/* right side */}
            <div className="col-md-4  ">
                <p className="textHead mt-3">Date of birth</p>
                <p className="text">13-03-2002</p>

                <p className="textHead mt-3">CIN no.</p>
                <p className="text">147258369</p>

                <p className="textHead mt-3">City</p>
                <p className="text">Toronto</p>

                <p className="textHead mt-3">Total transaction</p>
                <p className="text">$450</p>


            </div>
        </div>

{/* Top Product sales  */}
        <div className="col-md-6 box  p-1 ml-4 shadow ">
        <p className="textHead mt-3 ml-2">Top Product sales</p>
        
        <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Item</th>
                        <th scope="col">Region</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Sale%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                  

                </tbody>
            </table>
        </div>


{/* Request status  */}
        <div className="col-md-12 box  mt-3 mb-5 ml-3 p-4 shadow ">
        <p className="table-title mt-3">Request status</p>
        
        <table className="table table-hover mr-5 Request-tbl">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Item</th>
                        <th scope="col">Region</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Category  </td>
                        <td>Item </td>
                        <td>Region  </td>
                        <td>Price  </td>
                        <td>Status  </td>
                        <td><Link to='' > <i className="fa fa-ellipsis-h" /> </Link></td>
                    </tr>
                  

                </tbody>
            </table>
        </div>


</div>

</div>
</>
    );
}

export default  ManufacturerDetails ;
