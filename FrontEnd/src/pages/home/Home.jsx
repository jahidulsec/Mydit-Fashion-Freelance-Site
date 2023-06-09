import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import { TrustedBy } from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import { cards, projects } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/projectCard/ProjectCard'


function Home() {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <div className="popular-project">
        <div className="container">
          <h1>Popular professional services</h1>
          <Slide slidesToShow={4} arrowsScroll={3}>
            {cards.map(card => (
          <CatCard item={card} key={card.id}/>
        ))}
      </Slide>
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>
              A whole world of freelance designer at your fingertips
            </h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price. No hourly rates, just project-based pricing.
            </p>
          </div>
          <div className="item">
            <img src="./img/clothing.gif" alt="" className='fashionImg' />
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Mydit Business
            </h1>
            <h1>
              A business solution designed for teams
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to business.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect freelancer with proven business experience.
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Mydit Business</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
             alt="" />
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="container">
          <h1>Get inspired with projects made by our freelancers</h1>
          <Slide slidesToShow={4} arrowsScroll={2}>
            {projects.map(project => (
              <ProjectCard item={project} key={project.id}/>
            ))}
          </Slide>
        </div>
      </div>
      
    </div>
  )
}

export default Home