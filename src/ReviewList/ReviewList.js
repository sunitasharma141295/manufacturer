import React from 'react';
import {Link} from 'react-router-dom';
// css
import './reviewList.css';

// img


function ReviewList(){
    return(
        <>
        <div className="container" >

<div className="col-md-12   ">
        <p className="btn table-title">Review list </p>
        <Link  to='/add-category' className="btn bg-primary text-light float-right ">+ Add Category</Link>
        <Link  to='/add-product' className="btn bg-light border-primary float-right mr-2">+ Add Product</Link>

</div>

{/* table */}
<div className="col-md-12 box  mt-3 mb-5 ml-3 p-4 shadow ">
        
        
        
        <table className="table  table-hover">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Region</th>
                        <th scope="col">Manufecturer</th>
                        <th scope="col">Product</th>
                        <th scope="col" className='last-column' ></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Category  </td>
                        <td>Region </td>
                        <td>Manufacturer  </td>
                        <td>Product  </td>
                        <td><Link to=''className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td>Category  </td>
                        <td>Region </td>
                        <td>Manufacturer  </td>
                        <td>Product  </td>
                        <td><Link to=''className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td>Category  </td>
                        <td>Region </td>
                        <td>Manufacturer  </td>
                        <td>Product  </td>
                        <td><Link to=''className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td>Category  </td>
                        <td>Region </td>
                        <td>Manufacturer  </td>
                        <td>Product  </td>
                        <td><Link to=''className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td>Category  </td>
                        <td>Region </td>
                        <td>Manufacturer  </td>
                        <td>Product  </td>
                        <td><Link to=''className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td>Category  </td>
                        <td>Region </td>
                        <td>Manufacturer  </td>
                        <td>Product  </td>
                        <td><Link to=''className="btn btn-primary"  > Review </Link></td>
                    </tr>
                    <tr>
                        <td>Category  </td>
                        <td>Region </td>
                        <td>Manufacturer  </td>
                        <td>Product  </td>
                        <td><Link to=''className="btn btn-primary"  > Review </Link></td>
                    </tr>
                  

                </tbody>
            </table>
        </div>





        </div>
        </>
    );
}

export default ReviewList  ;
