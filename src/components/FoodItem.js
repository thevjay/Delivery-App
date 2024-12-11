import React from 'react'
import { CDN_URL } from '../utils/constants'

const FoodItem = ({food}) => {
  return (
    <div className='w-[200px] keen-slider_slide'>
        <img
            src={CDN_URL + food?.imageId}
            className='w-full pointer-events-none'
            alt=''
        />
    </div>
  )
}

export default FoodItem
