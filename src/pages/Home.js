import { useEffect, useState } from "react";
import RestaurantCard, { topRated } from "../components/RestaurantCard";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import Shimmer from "../components/Shimmer/Shimmer";
import FoodList from "../components/FoodList";

const Home=()=>{

    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [foods,setFoods]=useState([]);
    const [searchText,setSearchText]=useState('')

    const TopRatedRestaurant=topRated(RestaurantCard)

    useEffect(()=>{
        fetchData()
    },[])
    
    const fetchData=async()=>{
        try{
            const data=await fetch(RES_API)
            const json=await data.json();
    
             // Add checks before accessing nested properties

            const restaurantsData=json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

            if(restaurantsData){
                setListOfRestraunt(restaurantsData)
                setFilteredRestaurant(restaurantsData); 
            }
            
            const foodsData=json?.data?.data?.cards[0]?.card?.card
            if(foodsData){
                setFoods(foodsData)
            }
              
        }catch(error){
            console.error("Error fetching data:", error);
        }
    }
   
    return(
        <div className="mt-1">
            <div className="ml-4">
                <FoodList foods={foods} />
            </div>
            <div className="flex  items-center justify-center gap-12">
                
                <div className="flex gap-4 ">
                    <input
                        className="w-[300px] rounded-lg p-2 border border-solid"
                        type="text"
                        placeholder="Enter restaurant name"
                        onChange={(e)=>setSearchText(e.target.value)}
                    />
                   
                </div>
            </div>
            {listOfRestaurants.length === 0 || !filteredRestaurant ? (
                <Shimmer/>
            ):(
                
                <div className="flex flex-wrap">
                    {filteredRestaurant
                        .filter((item)=>{
                            return searchText.toLowerCase() === "" 
                            ? item
                            : item.info.name.toLowerCase().includes(searchText)
                        })
                        .map((restaurant)=>(
                            <Link key={restaurant?.info?.id} to={`restaurant/${restaurant?.info?.id}`}>
                                {restaurant.info.avgRatingString >=4 ?(
                                    <TopRatedRestaurant resData={restaurant}/>
                                ):(
                                    <RestaurantCard resData={restaurant}/>
                                )}
                            </Link>
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default Home;