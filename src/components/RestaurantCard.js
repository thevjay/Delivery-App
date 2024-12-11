import React from 'react'
import { CDN_URL } from '../utils/constants'
import { FaStar } from "react-icons/fa";
import '../App.css'

const RestaurantCard = ({resData}) => {
    const { name, avgRating, cuisines, cloudinaryImageId, locality } =resData?.info;
    
    const { slaString } = resData?.info?.sla;

  return (
    <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'>
      <div>
        <img 
            className='rounded-lg h-[170px] w-full object-cover'
            alt='res-logo'
            src={CDN_URL+cloudinaryImageId}
        />
      </div>
        <h3 className='font-bold py-2 text-lg'>{name}</h3>
        <div className='flex items-center  gap-3'>
          {
            avgRating >=4 ?(
              <FaStar  className='text-green-600'/>
            ):(
              <FaStar  className='text-red-600'/>
            )
          }
          <h4 className='font-semibold'>{avgRating}</h4>
          <span className='w-[5px] h-[5px] bg-black rounded-full'></span>
          <h3 className='font-semibold'>{slaString}</h3>
        </div>
        <p className='text-gray-500'>{cuisines.join(",")}</p>
        <p className='text-gray-500'>📍{locality}</p>
    </div>
  )
}

// Higher-Order Component (HOC) - A Higher-Order Component (HOC) is a function that takes a component and returns a new component with enhanced functionality.
export const topRated=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div className='top-rated'>
        <div className='ribbon'>
          <span>Top Reted</span>
        </div>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard
