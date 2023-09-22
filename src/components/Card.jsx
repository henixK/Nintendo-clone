import React from 'react';
import {Heart} from "@acme/icons"


export const MiniCard = ({ img, title }) => {
    return (
        <div
            className="mt-5 mb-10 border rounded-md w-52 h-[250px] lg:h-[280px] lg:w-[250px] flex flex-col flex-shrink-0 overflow-hidden -z-20"
        >
            <img src={img} alt="" />
            <div className="p-4">
                <h2 className="font-bold text-base inline-block">{title}</h2>
                <div className="mt-10">
                    <div className="mt-1 flex gap-1">
                        <span className="border border-red-600"></span>
                        <p className="text-xs font-thin">Nintendo Switch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Card = ({ img, date, title, price }) => {
    return (
        <div
            className="my-5 border rounded-md overflow-hidden flex flex-col flex-shrink-0 w-[200px] lg:w-[280px] lg:min-h-[320px] -z-20"
        >
            <img src={img} alt="" />
            <div className="p-4">
                <div>
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p className="text-xs mt-2">{date}</p>
                </div>
                <div className="mt-10">
                    <p className="font-bold">{price}</p>
                    <div className="mt-1 flex items-center justify-between w-full">
                        <div className='flex items-center gap-1 w-full'>
                        <span className="h-[25px] border border-red-600"></span>
                        <p className="text-xs font-thin">Nintendo Switch</p>
                        </div>
                        <div className='outline-red-600'>
                        <Heart/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
