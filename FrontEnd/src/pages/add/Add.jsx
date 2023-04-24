import React from 'react'
import "./Add.scss"

const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" name="" placeholder="e.g. I will do something I'm really good at" id="" />
            <label htmlFor="cats">Category</label>
            <select name="cats" id="cats">
              <option value="Men"> Men's Clothing</option>
              <option value="Women">Women's Clothing</option>
              <option value="Traditional">Traditional Dress</option>
              <option value="Occasion">Occasional Dress</option>
            </select>
            <label htmlFor="coverImage">Cover Image</label>
            <input type="file" name="coverImage" id="coverImage" />
            <label htmlFor="uploadImage">Upload Image</label>
            <input type="file" name="uploadImage" id="uploadImage" multiple />
            <label htmlFor="description ">Description</label>
            <textarea 
              name="description" 
              id="description" 
              cols="30" 
              rows="16"
              placeholder='Brief description to introduce your service to customers'  
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="title">Service Title</label>
            <input type="text" name="title" id="title" placeholder="e.g. Men's clothing design" />
            <label htmlFor="decs">Short Description</label>
            <textarea name="decs" id="decs" cols="30" rows="10" placeholder='Short description for your service'></textarea>
            <label htmlFor="deliveryTime">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="deliveryTime" id="deliveryTime" min={1}/>
            <label htmlFor="revision">Revision Number</label>
            <input type="number" name="revision" id="revision" />
            <label htmlFor="features">Add Features</label>
            <input type="text" name="" id="" placeholder="e.g. clothing designs" />
            <input type="text" name="" id="" placeholder='e.g. file uploading'/>
            <input type="text" name="" id="" placeholder='e.g. Measurement charts'/>
            <input type="text" name="" id="" placeholder='e.g. Mock'/>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add