import React from 'react'
import { Link } from 'react-router-dom'
import "./MyGigs.scss"

const MyGigs = () => {
  return (
    <div className='mygigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to='/add'><button>Add new gig</button></Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8ae41271373427.5bc375fa323ae.jpg"   alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8ae41271373427.5bc375fa323ae.jpg"   alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8ae41271373427.5bc375fa323ae.jpg"   alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8ae41271373427.5bc375fa323ae.jpg"   alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs