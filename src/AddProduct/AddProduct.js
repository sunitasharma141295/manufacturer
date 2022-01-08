import React from 'react';
import {Link} from 'react-router-dom'; 

// css
import './addProduct.css';

// img


function AddProduct(){
    return(
      <>
<div className="container" >

<div className="col-md-10  ml-auto mr-auto mb-3 ">
        <p className="btn table-title">Add Products  </p>
        {/* <Link to='/add-category' className="btn bg-primary text-light float-right ">Requested Categories</Link> */}
        
</div>
  

    <div  className="col-md-10 box shadow mb-5 mr-auto ml-auto p-5">     
      
      <form className="row">
        <div className="form-group col-md-4 ">
          <label>Product Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Sub Text</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Category</label>
          <select className="custom-select" id="category">
            <option >Select Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="form-group col-md-4 ">
          <label>SKU</label>
          <select className="custom-select" id="SKU">
            <option >Select SKU</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        
        
        <div className="form-group col-md-4 ">
          <label>Price </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">$</span>
            </div>
            <input type="text" className="form-control" placeholder="Enter Price"  />
          </div>
        </div>
        <div className="form-group col-md-4 ">
          <label>Discount</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">%</span>
            </div>
            <input type="text" className="form-control" placeholder="Enter Discount"  />
          </div>
        </div>
        <div className="form-group col-md-4 ">
          <label>Meta Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Meta Keyword</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4 ">
          <label>Status</label>
          <select className="custom-select" id="category" disabled>
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
        </div>
        
        <div className="form-group col-md-12 ">
          <label>Description</label>
          <textarea className="form-control" id="Description" rows="3"></textarea>
        </div>
        
        <div className="form-group col-md-12 ">
          <button type='file' className='col-md-12 btn btn-md btn-light border-light pt-3 pb-3'>
            <i className='fa fa-cloud-upload' /> Drag & Drop or Brouse to Upload</button>

            <p className='input-info'> Upload upto 10 images </p>
            <p className='input-info'> Only .png .jpg .jpeg formate allowed  </p>
            <p className='input-info'> Allowed file size up to 200kb </p>
        </div>



        

        <button type="submit" className="w-auto btn btn-light border-primary ml-auto mr-3  mt-3">
          Cancel
        </button>
        <button type="submit" className="w-auto  btn btn-primary mr-auto mt-3">
          Submit
        </button>

      </form>
    </div>


    <div className="col-md-10  ml-auto mr-auto mb-3 ">
        <p className="btn table-title">Added Products  </p>
    </div>


    <div className="datatable  col-md-10 card box shadow p-4 mb-5 mt-1 ml-auto mr-auto">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th scope="col">Price</th>
            <th scope="col">Discount</th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Iphone 13 pro </td>
            <td>Electronics</td>
            <td>Draft</td>
            <td>$5000 </td>
            <td>20%</td>
            <td>
                <div className=" " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className='fa fa-ellipsis-h' />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to='/view-product' className="dropdown-item" >View</Link>
                    <Link to='/edit-product' className="dropdown-item" >Edit </Link>
                </div>
            </td>
          </tr>
        
         
        </tbody>
      </table>
    </div>
  








</div>
</>
    
    );
}

export default  AddProduct ;