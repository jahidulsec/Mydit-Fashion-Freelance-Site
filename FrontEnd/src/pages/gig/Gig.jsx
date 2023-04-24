import React from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel/lib'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const Gig = () => {

  const {id} = useParams()
  console.log(id)

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs/${id}`
        )
        .then(res => {
          return res.data
      })
  })
  
  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ["user"],
    queryFn: () => 
      newRequest
        .get(`/users/${data.userId}`)
        .then(res => {
          return res.data
        })
  })

  return (
    <div className='gig'>
      {isLoading ? "Loading..." : error ? "Something went wrong!" :
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">MYDIT {">"} TRADITIONAL {">"}</span>
          <h1>{data.title}</h1>

          {isLoadingUser? "Loading...": errorUser? "Something went wrong!":
            <div className="user">
              <img className='pp' src={dataUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{dataUser.username}</span>
              {
                !isNaN(data.totalStars / data.starNumber) &&
                <div className="stars">
                  {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,idx) => (
                    <img src="/img/star.png" alt="" key={idx} />
                  ))}
                  <span>
                        {Math.round(data.totalStars / data.starNumber)}
                  </span>
                </div>
              }
            </div>
          }
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Slider>
          <h2>About this gig</h2>
          <p>
            {data.desc}
          </p>
          { isLoadingUser ? "Loading...": errorUser? "Something went wrong!":
          <div className="seller">
            <h2>About the seller</h2>
              <div className="user">
               <img src={dataUser.img||"/img/noavatar.jpg"} alt="" />
               <div className="info">
                 <span>{dataUser.username}</span>
                 {
                   !isNaN(data.totalStars / data.starNumber) &&
                     <div className="stars">
                       {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,idx) => (
                         <img src="/img/star.png" alt="" key={idx} />
                       ))}
                       <span>
                             {Math.round(data.totalStars / data.starNumber)}
                       </span>
                     </div>
                 }
                 <button>Contact me</button>
               </div>
              </div>
            
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">{dataUser.country}</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Jul 2021</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">1 hour</span>
                </div>
                <div className="item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">Vietnamese ,English</span>
                </div>
              </div>
              <hr />
              <p>
                {dataUser.desc}
              </p>
            </div>
          </div>
          }
          <div className="reviews">
            <h2>Review</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="/img/noavatar.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" alt="" />
                    <span> United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I definitely love working with this artist. 
                She takes all my asks into consideration and illustrates them beautifully! Thank you!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="/img/noavatar.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" alt="" />
                    <span> United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I definitely love working with this artist. 
                She takes all my asks into consideration and illustrates them beautifully! Thank you!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="/img/noavatar.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" alt="" />
                    <span> United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I definitely love working with this artist. 
                She takes all my asks into consideration and illustrates them beautifully! Thank you!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>{data.shortTitle}</h3>
            <h3>$ {data.price}</h3>
          </div>
          <p>
            {data.shortDesc}
          </p>
          <div className="details">
            <div className="item">
            <img src="/img/clock.png" alt="" />
            <span>{data.deliveryTime} days delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>{data.revisionNumber} Revisions</span>
            </div>
          </div>
          <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <span style={{color: "#9900ff"}} class="material-symbols-outlined">
                    check
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            <button>Continue</button>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Gig