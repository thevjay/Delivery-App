import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useResturantMenu from '../hooks/useResturantMenu';
import { CDN_URL, MENU_TYPE } from '../utils/constants';
import RestaurantCategory from './RestaurantCategory';
import MenuShimmer from '../components/Shimmer/MenuShimmer';

const ResturantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(0);

    const resInfo = useResturantMenu(resId);
    //console.log(resInfo)

    if (resInfo == null) return <MenuShimmer/>;

    const {
        name,
        cuisines,
        avgRating,
        costForTwoMessage,
        locality,
        totalRatingsString,
        cloudinaryImageId,
    } = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.['@type'] === MENU_TYPE)

    return (
      
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl w-11/12 mx-auto my-8">
            {/* Restaurant Info Section */}
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mr-6">
                    <img 
                        className="w-full h-full object-cover" 
                        src={CDN_URL + cloudinaryImageId} 
                        alt="Restaurant Logo" 
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
                    <p className="text-sm text-gray-600 mt-1">{cuisines.join(", ")}</p>
                    <span className="text-sm text-gray-500 mt-1">{locality}</span>
                </div>
            </div>

            {/* Rating and Cost Section */}
            <div className="mt-4 flex justify-between items-center text-sm text-gray-700">
                <div className="flex items-center">
                    <p className="text-yellow-500 font-semibold">{avgRating}⭐</p>
                </div>
                <p className="text-gray-500">{totalRatingsString}</p>
            </div>

            {/* Cost for Two Section */}
            <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-inner">
                <p className="text-sm text-gray-700">{costForTwoMessage}</p>
            </div>

            {/* Restaurant Categories */}
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={index}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    onClick={() => setShowIndex(index === showIndex ? -1 : index)}
                />
            ))}
        </div>
    );
}

export default ResturantMenu;
