import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {

    const [active,setActive] = useState(false)
    const [open,setOpen] = useState(false)
    const {pathname} = useLocation()

    const isActive = () => {
        window.scrollY>0 ? setActive(true) : setActive(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll", isActive)

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    },[])

    const currentUser = {
        id:1,
        username: "John Doe",
        isSeller: true,
    }

  return (
    <div className={(active || pathname !== '/') ? "navbar active" : "navbar home"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
                    <span className='text'>myd</span>
                    <span className="dot">.</span>
                    <span className="text">it</span>
                </Link>
            </div>
            <div className="links">
                <span>Mydit Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser && (<span>Sign in</span>)}
                {!currentUser?.isSeller && (
                    <span>Become a Seller</span>
                )}
                {!currentUser && (
                    <button>Join</button>
                    )
                }
                {currentUser && (
                    <div className="user" onClick={()=>{setOpen(!open)}}>
                        <img src="/img/noavatar.jpg" alt="" />
                        <span>{currentUser?.username}</span>
                        {open && (<div className="options">
                            {currentUser?.isSeller && (
                                <>
                                <Link to="/gigs" className='link dropdown'>Gigs</Link>
                                <Link to="/add" className='link dropdown'>Add New Gigs</Link>
                                <Link to="/mygigs" className='link dropdown'>My Gigs</Link>
                                </>
                            )}
                            <Link to="/orders" className='link dropdown'>Orders</Link>
                            <Link to="/messages" className='link dropdown'>Messages</Link>
                            <Link to="/" className='link dropdown'>Logout</Link>

                        </div>)
                        }
                    </div>
                )
                }
            </div>
        </div>
        
       {(active ) && (
        <>
       <hr />  
        <div className="menu">
            <Link className='link' to="/">Men </Link>
            <Link className='link' to="/">Women</Link>
            <Link className='link' to="/">Children</Link>
            <Link className='link' to="/">Occasionals</Link>
            <Link className='link' to="/">Weddings</Link>
            <Link className='link' to="/">Formals</Link>           
            <Link className='link' to="/">Traditionals</Link>           
        </div>
        <hr />
        </>
       )
        }
    </div>
  )
}

export default Navbar