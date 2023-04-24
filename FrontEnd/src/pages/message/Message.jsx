import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to = "/messages">MESSAGES</Link> > JOHN DOE >
        </span>
        <div className="messages">
          <div className="item">
            <img src="/img/noavatar.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quaerat illo eaque 
              laudantium iure ratione illum eveniet provident voluptate tempora aspernatur, 
              pariatur perspiciatis optio suscipit ab quam itaque ex molestias.
            </p>
          </div>
          <div className="item">
            <img src="/img/noavatar.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quaerat illo eaque 
              laudantium iure ratione illum eveniet provident voluptate tempora aspernatur, 
              pariatur perspiciatis optio suscipit ab quam itaque ex molestias.
            </p>
          </div>
          <div className="item">
            <img src="/img/noavatar.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quaerat illo eaque 
              laudantium iure ratione illum eveniet provident voluptate tempora aspernatur, 
              pariatur perspiciatis optio suscipit ab quam itaque ex molestias.
            </p>
          </div>
          <div className="item owner">
            <img src="/img/noavatar.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quaerat illo eaque 
              laudantium iure ratione illum eveniet provident voluptate tempora aspernatur, 
              pariatur perspiciatis optio suscipit ab quam itaque ex molestias.
            </p>
          </div>
          <div className="item">
            <img src="/img/noavatar.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quaerat illo eaque 
              laudantium iure ratione illum eveniet provident voluptate tempora aspernatur, 
              pariatur perspiciatis optio suscipit ab quam itaque ex molestias.
            </p>
          </div>
          <div className="item owner">
            <img src="/img/noavatar.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quaerat illo eaque 
              laudantium iure ratione illum eveniet provident voluptate tempora aspernatur, 
              pariatur perspiciatis optio suscipit ab quam itaque ex molestias.
            </p>
          </div><div className="item">
            <img src="/img/noavatar.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quaerat illo eaque 
              laudantium iure ratione illum eveniet provident voluptate tempora aspernatur, 
              pariatur perspiciatis optio suscipit ab quam itaque ex molestias.
            </p>
          </div>
          <div className="item owner">
            <img src="/img/noavatar.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quaerat illo eaque 
              laudantium iure ratione illum eveniet provident voluptate tempora aspernatur, 
              pariatur perspiciatis optio suscipit ab quam itaque ex molestias.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" id="" placeholder='write a message' cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message