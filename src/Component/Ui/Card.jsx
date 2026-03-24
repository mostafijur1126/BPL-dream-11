import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa6';
const Card = ({players,index}) => {
    return (
        <div>
            <div key={index} className='container mx-auto'>
                        <div  className="card bg-base-100 w-96 shadow-sm">
                            <figure className='w-full h-48 md:h-64 lg:h-72 overflow-hidden'>
                                <img className='h-full w-full object-cover'
                                    src={players.playerImg}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold"><FaUser /> {players.playerName}</h2>
                                <div className='flex justify-between text-gray-400'>
                                    <div className='flex items-center gap-2'>
                                        <FaFlag />
                                        <p> {players.country}</p>
                                    </div>
                                    <button className='btn text-gray-500'>{players.playerType}</button>
                                </div>
                                <div className="divider"></div>
                                <div>
                                    <button className=' font-bold'>Rating {players.rating}</button>
                                </div>
                                <div className='flex justify-between'>
                                    <button>{players.battingStyle}</button>
                                    <button className=' text-gray-500'>{players.bowlingStyle}</button>
                                </div>
                                <div className='flex justify-between'>
                                    <p className=' font-bold'>Price: ${players.price}</p>
                                    <button className='btn'>Choose Player</button>
                                </div>

                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Card;