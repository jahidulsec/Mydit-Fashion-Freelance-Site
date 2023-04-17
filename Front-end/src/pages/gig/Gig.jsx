import React from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel/lib'

const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">MYDIT > GRAPHIC DESIGN ></span>
          <h1>I will create ai generated picture for you</h1>

          <div className="user">
            <img className='pp' src="/img/noavatar.jpg" alt="" />
            <span>John Doe</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slideToShow={1} arrowSlide={1} className='slider'>
            <img src="https://cdn.tophatch.com/media/filer_public_thumbnails/filer_public/9c/25/9c25bddc-005e-4c11-8926-9f28b1d10337/emilykeller_concepts1-colorsketches.jpg__2400.0x1760.0_q85_subsampling-2.jpg" alt="" />
            <img src="https://fashionmingle.com/wp-content/uploads/2015/11/xdrawing657-888x538.jpg.pagespeed.ic.vPAqGTyk-V.webp" alt="" />
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8ae41271373427.5bc375fa323ae.jpg" alt="" />
          </Slider>
          <h2>About this gig</h2>
          <p>
          Hello, my name is Dung Nguyen and Im a fashion illustrator. <br />
          First, I wanna say thanks for taking an interest in my custom illustration work! <br />
          Do you want me to turn your ideas to a beautiful illustration for your presentation? <br />
          You can contact me directly for custom orders! <br />
            - Describe your ideas by providing clear instruction Reference pictures or sketches for garments, colors, pose style, hair, skin tone....etc, so there will be no misunderstanding between us. <br />
            - I prepare a rough sketch and send it to you for feedback. <br />
            - We make together with the needed adjustments and the print ready file (png or pdf or jpg) is sent to you. <br />
            - Price can vary base on your requirement of illustration. <br />
          Look forward to working with you! Thank you and have a great day! 
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img src="/img/noavatar.jpg" alt="" />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Vietnam</span>
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
                Hello! My name is Dung Nguyen and I’m an artist and illustrator. I specialize in fashion and beauty illustration and use Adobe Illustrator and Photoshop in my work.
                I can provide you with: - fashion sketches and illustrations for social media and commercial use - fashion and stylized portraits - beauty.
                I’ll be happy to help you make your ideas come to life as a professional illustrations! 
                If you are looking for an illustrator don't hesitate to contact me!. 
              </p>
            </div>
          </div>
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
            <h3>1 AI generated image</h3>
            <h3>$ 59.99</h3>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a 
            description that you gave me
          </p>
          <div className="details">
            <div className="item">
            <img src="/img/clock.png" alt="" />
            <span>2 days delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gig