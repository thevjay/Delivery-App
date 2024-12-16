import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';

import { addItems } from '../slices/cartSlice';

const Item = ({ item }) => {


    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.cart.items)


    const handleAddItem=()=>{
        //console.log("Item being added:", item); // Log the item before dispatching
        dispatch(addItems(item));
        //console.log("Add")
    }
    
    return (
        <div key={item.card.info.id} className="flex border-b pb-4 mb-4">
            {/* Item Details */}
            <div className="flex-1 pr-4">
                <h4 className="text-lg font-semibold text-gray-800">{item.card.info.name}</h4>
                <p className="text-sm text-gray-500">₹{(item.card.info.defaultPrice || item.card.info.price) / 100}</p>
                <p className="text-sm text-gray-600 mt-2">{item.card.info.description}</p>
            </div>

            {/* Item Image and Add Button */}
            <div className="flex flex-col items-center justify-between relative mb-4">

                <div className="mt-2">
                    <img
                        loading="lazy"
                        src={CDN_URL + item.card.info.imageId}
                        alt={item.card.info.name}
                        className="w-24 h-24 object-cover rounded-lg shadow-md mt-2"
                    />
                </div>

                <div className="flex absolute bottom-[-20px] items-center  bg-gray-100 p-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition"
                    onClick={()=>handleAddItem(item)}                
                >
                    <p className="text-sm font-semibold text-gray-700">Add</p>
                    <p className="text-xl font-bold text-green-600">+</p>
                </div>

                
            </div>
        </div>
    );
}

const ItemList = ({ items }) => {
    return (
        <div className="space-y-4">
            {items.map((item) => (
                <Item key={item.card.info.id} item={item} />
            ))}
        </div>
    )
}

export default ItemList
