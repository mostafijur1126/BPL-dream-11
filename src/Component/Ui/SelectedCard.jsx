import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
const SelectedCard = ({handelFilterSelectedPlayer,player}) => {
    return (
        <div>
            <div className='my-5'>
                <div className=' flex items-center justify-between border p-5 rounded-md'>
                    <div className='flex items-center gap-5'>
                        <div className='h-[75px] w-[75px] overflow-hidden'>
                            <img className=' h-full w-full object-cover  rounded-md' src={player.playerImg} alt={player.playerName} />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold flex items-center gap-2'><FaUser />{player.playerName}</h2>
                            <p >{player.playerType}</p>
                        </div>
                    </div>
                    <button onClick={() => handelFilterSelectedPlayer(player)} className='btn text-red-600'><MdDelete /></button>
                </div>

            </div>
        </div>
    );
};

export default SelectedCard;