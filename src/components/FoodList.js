import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import FoodItem from './FoodItem';
import 'keen-slider/keen-slider.min.css';
import { ArrowLongLeftIcon } from '@heroicons/react/16/solid';
import { ArrowLongRightIcon } from '@heroicons/react/16/solid';

const FoodList = ({ foods }) => {
     

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    renderMode: 'performance',
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    initial: 0,

    breakpoints: {
      '(max-width: 480px)': {
        slides: { perView: 4, spacing: 10 },
      },
      '(min-width: 480px)': {
        slides: { perView: 6, spacing: 10 },
      },
      '(min-width: 768px)': {
        slides: { perView: 8, spacing: 10 },
      },
    },
  });

  if (!foods) return <h1>Loading........</h1>;

  return (
    <div className="my-5 mt-5">
      <div className="flex justify-start">
        <h1 className="mb-4 ml-3 font-bold text-2xl text-zinc-700">
          {foods?.header?.title}
        </h1>

        {instanceRef.current && (
          <div className="flex gap-2 items-center">
            <button
              disabled={currentSlide === 0}
              onClick={() => instanceRef.current?.prev()}
              className="bg-red-600 p-2 rounded-full disabled:bg-gray-300 disabled:text-gray-500 text-white"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
              }}
            >
              <ArrowLongLeftIcon className="w-5 h-5" />
            </button>
            <button
              disabled={currentSlide === instanceRef?.current?.track?.details?.slides?.length - 1}
              onClick={() => instanceRef.current?.next()}
              className="bg-gray-100 p-2 rounded-full disabled:bg-gray-300 disabled:text-gray-500 text-black"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
              }}
            >
              <ArrowLongRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <div className="keen-slider flex">
        {foods?.gridElements?.infoWithStyle?.info?.map((food) => (
          <FoodItem food={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
