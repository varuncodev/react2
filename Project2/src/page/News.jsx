import React from 'react'
import Wrapper from '../components/Wrapper';
import { useEffect } from 'react';
import api from '../config/axios'
import { useNewsContext } from '../context/NewsContext';
import Loader from '../components/Loader'


const News =() => {
const {news ,setNews,fetchNews,loading} =useNewsContext()


// load data on initial 
useEffect(()=>{
 
 (async()=>{
  const data = await fetchNews()
  setNews(data.articles)
 })()
   
},[])

if(loading) return <Loader/>

  return (
    <Wrapper>
        <div className='grid grid-cols-4 gap-4 p-10'>
            {news.map((newsDetail,index)=>{
              return(
                <NewCards key={index} details={newsDetail}/>
              )
            })}
        </div>
   
    </Wrapper>
   
  )
}

const NewCards =({details})=>{
  console.log(details)
    return(
             <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
    className= 'w-full aspect-video'
      src={details?.urlToImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {details?.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className= 'line-clamp-2 overflow-hidden'>{details.url}</p>
    <div className="card-actions justify-end">
     
      <button className="badge badge-outline">Read More...</button>
    </div>
  </div>
</div>

    )
}

export default News