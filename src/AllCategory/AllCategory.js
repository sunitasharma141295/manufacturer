import React from 'react';
import {Link} from 'react-router-dom';
// css
import './allCategory.css';

// img


function AllCategory(){
    return(
        <>
        <div className="container" >

        <div className="col-md-12  ">
            <p className="btn table-title">All Category </p>
            <Link  to='/add-category' className="btn bg-primary text-light float-right ">+ Add Category</Link>
            <Link  to='/add-product' className="btn bg-light border-primary float-right mr-2">+ Add Product</Link>

        </div>

{/* table */}
<div className="col-md-12 box  mt-3 mb-5 ml-3 p-4 shadow ">
       
       <div className='d-flex'>

            <div className="dropdown mr-3">
                <select className="custom-select" id="category">
                    <option >Select Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>


            <form>
                <div className="form-group">
                    <input type="email" className="form-control" id="Search"  placeholder="Search" />
                </div>
            </form>
                            
        
       </div>


        <table className="table  table-hover">
                <thead>
                    <tr>
                        <th scope="col">Category </th>
                        <th scope="col">Client Name</th>
                        <th scope="col">Region</th>
                        <th scope="col">Total Sale</th>
                        <th scope="col" className='last-column'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Electronic  </td>
                        <td>Ryan Reynolds  </td>
                        <td>Canada </td>
                        <td>7000  </td>
                        <td>
                            <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='fa fa-ellipsis-h' />
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to='/edit-category' className="dropdown-item" >Edit</Link>
                                <Link to='/view-category' className="dropdown-item" >View </Link>
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

export default  AllCategory ;
