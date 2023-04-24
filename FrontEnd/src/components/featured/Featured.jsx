import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>
                    Find the perfect <i>fashion designing</i> serives for your identity
                </h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder='try "build a wedding dress"'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>New year Special</button>
                    <button>Traditional Dresses</button>
                    <button>Women clothing</button>
                    <button>Occassions</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/mman.png" alt="" /></div>        
        </div>
    </div>
  )
}

export default Featured