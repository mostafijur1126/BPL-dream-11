import React, { use, useState } from 'react';
import AvailablePlayers from './../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const PlayersInfo = ({ playerPromise, coin, setCoin}) => {
    const playerData = use(playerPromise)
    const [activeType, setActiveType] = useState("Available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    // console.log(activeType);
    return (
        <div className="container mx-auto">
            <div className='flex justify-between items-center my-5'>
                {activeType === "Available" ?
                    <h1 className='text-3xl font-bold'>Available Players</h1>
                    :
                    <h1 className='text-3xl font-bold'>Selected Players (0)</h1>}

                <div>
                    <button
                        onClick={() => setActiveType("Available")}
                        className={`btn ${activeType === "Available" ? "bg-[#E7FE29]" : "btn"} rounded-l-xl rounded-r-none`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setActiveType("Selected")}
                        className={`btn ${activeType === "Selected" ? "bg-[#E7FE29]" : "btn"} rounded-r-xl rounded-l-none`}
                    >
                        Selected
                    </button>
                </div>

            </div>
            {activeType === "Available" ?
                <AvailablePlayers playerData={playerData} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></AvailablePlayers>
                :
                <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayers>}

        </div>
    );
};

export default PlayersInfo;