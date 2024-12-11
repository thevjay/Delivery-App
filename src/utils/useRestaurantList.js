import { useEffect, useState } from "react"
import {SWIGGY_API_URL} from './constants'

const useRestaurantList=()=>{

    const [listOfRestaurants, setListOfRestaurants]=useState([]) ;//All Restaurants
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); //Filtered Restaurants

    //get restaurants list
    useEffect(()=>{
        getRestaurants();
    })

    const getRestaurants=async()=>{

        const restaurantList=await fetch(SWIGGY_API_URL);
        const jsonResData=await restaurantList.json();

        //set restaurants list
        setListOfRestaurants(jsonResData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        //filtered restaurants
        setFilteredRestaurants(jsonResData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }//getRestaurants


    return listOfRestaurants;
}

export default  useRestaurantList;