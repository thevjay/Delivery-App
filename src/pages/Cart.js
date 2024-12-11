import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CDN_URL } from '../utils/constants'
import { MdDelete } from "react-icons/md"
import { addItems, deleteItems, removeItems } from '../slices/cartSlice'

const CartItem = ({ item }) => {

  const dispatch=useDispatch();


  const handleRemoveItem=()=>{
    dispatch(removeItems(item))
  }

  const handleAddItem=()=>{
    dispatch(addItems(item))
  }

  const handleDeleteItem=(item)=>{
    dispatch(deleteItems(item))
  }

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <div className="flex items-center">
        <img
          src={CDN_URL + item.card.info.imageId}
          alt="dish"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{item.card.info.name}</h3>
          <p className="text-sm text-gray-500">
            
            <span className='font-bold text-black'>₹{parseFloat(item.quantity * parseFloat((item.card.info.price || item.card.info.defaultPrice)/100 )).toFixed(2)}</span>{"  "}
            <span>({(item.card.info.price || item.card.info.defaultPrice)/100} × {item?.quantity})</span>
          </p>
          <p className="text-sm text-gray-500">{item.card.info.description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <button onClick={()=>handleRemoveItem(item)} className="text-2xl text-red-600 ">-</button>
          <span className="text-lg">{item.quantity}</span>
          <button onClick={()=>handleAddItem(item)} className="text-2xl text-green-600">+</button>
        </div>
        <MdDelete onClick={()=>handleDeleteItem(item)} className="text-xl text-red-600 cursor-pointer" />
      </div>
    </div>
  )
}

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)


  const totalPrice=useMemo(()=>{
    return cartItems.reduce((total,item)=>{
       // Calculate the price of each item by multiplying its price by its quantity
      const itemPrice=(item.card.info.price || item.card.info.defaultPrice) /100;
      const itemTotalPrice=itemPrice*item.quantity;

      // Add the price of the current item to the total
      return total+itemTotalPrice;
    },0)
  },[cartItems])

  const discount = (totalPrice * 0.1) / 100;
  const deliveryCharges = (totalPrice * 0.05) / 100;
  const totalAmt = totalPrice / 100 + deliveryCharges - discount;

  

  return cartItems.length === 0 ? (
    <div className="flex flex-col items-center justify-center py-16">
      <h3 className="text-2xl font-semibold">Your Cart is Empty</h3>
      <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
    </div>
  ) : (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-100 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4 mb-4">
          <div className="flex justify-between text-lg">
            <p>Item Total <span>₹{totalPrice}</span></p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Discount (10%)</p>
            <p>₹{parseFloat(discount).toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Delivery charges (5%)</p>
            <p>₹{parseFloat(deliveryCharges).toFixed(2)}</p> 
          </div>
          <div className="flex justify-between text-lg">
            <p>GST and Restaurant Charges</p>
            <p>₹12</p>
          </div>
          <p className='text-sm my-2'>
          You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
        </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="p-2 border border-gray-300 rounded-md w-2/3"
          />
          <button className="ml-2 p-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Apply</button>
        </div>
        <div className="flex justify-between text-xl font-semibold mb-4">
          <p>Order Total <span>₹{parseFloat(totalAmt +12).toFixed(2)}</span></p>
        </div>
        <div className="text-sm text-gray-500 mb-6">Coupon Code</div>
        <button className="w-full py-3 bg-orange-600 text-white text-lg rounded-md hover:bg-orange-700 transition duration-300">
          Place order
        </button>
      </div>
    </div>
  )
}

export default Cart
