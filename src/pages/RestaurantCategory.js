import React from 'react'
import ItemList from './ItemList';

const Icon = ({ open }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
};

const RestaurantCategory = ({ data, showItems, onClick }) => {
    return (
        <div className="border-b pb-6 mb-6">
            <div className="flex justify-between items-center cursor-pointer mb-4" onClick={onClick}>
                <span className="font-semibold text-lg text-gray-800">{data.title} ({data.itemCards.length})</span>
                <Icon open={showItems} />
            </div>

            {/* Show Item List if Expanded */}
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    );
}

export default RestaurantCategory;
