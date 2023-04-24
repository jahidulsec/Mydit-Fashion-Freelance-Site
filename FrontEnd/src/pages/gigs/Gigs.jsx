import React, { useEffect, useRef, useState } from 'react'
import "./Gigs.scss"
import { gigs } from '../../data'
import GigCard from '../../components/gigCard/GigCard'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { useLocation } from 'react-router-dom'

const Gigs = () => {

  const [open,setOpen] = useState(false)
  const [sort,setSort] = useState('sales')
  const minRef = useRef()
  const maxRef = useRef()

  const {search} = useLocation()

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then(res => {
          return res.data
      })
  })

 


  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  useEffect(()=>{
    refetch()
  },[sort])

  const apply = () => {
    refetch()
  }

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">
          MYDIT {">"} TRADITIONALS {">"}
        </span>
        <h1>Traditionals</h1>
        <p>
          Explore the boundaries of traditions with mydit's artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="number" placeholder='min' ref={minRef} />
            <input type="number" placeholder='max' ref={maxRef} />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortedBy">Sorted By</span>
            <span className="sortedType">{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
            <img src="./img/down.png" alt="" onClick={()=>{setOpen(!open)}}/>
            {open && (
            <div className="rightMenu">
              {sort === 'sales' ? <span onClick={()=> {reSort('createdAt')}}>Newest</span> :
              <span onClick={() =>{reSort('sales')}}>Best Selling</span>}
            </div>
            )}
          </div>
        </div>
        <div className="cards">
          { isLoading ? "Loading" : error ? "Something wrong!" :
            data.map(gig => (
              <GigCard key={gig._id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs