import React from 'react';

export const Header = () => {
    return (
        <div className="absolute flex justify-between items-center z-20 w-full bg-white h-16 top-0 drop-shadow-md">
            <div className="relative w-full h-full">
                <div className="absolute w-full h-full flex items-center cursor-pointer">
                    <i className="fa-solid fa-chevron-left text-2xl pl-8 text-gray-600 "></i>
                </div>
                <div className="absolute w-full h-full flex justify-center items-center text-center">
                    <span className="text-gray-600 text-xl font-bold">무더위 쉼터</span>
                </div>
            </div>
            <span></span>
        </div>
    );
};
