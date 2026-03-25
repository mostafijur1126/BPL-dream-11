import React from 'react';
import SelectedCard from '../../Ui/SelectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    // console.log(selectedPlayers);
    const handelFilterSelectedPlayer = (player) =>{
        const filteredPlayer = selectedPlayers.filter(filterPlayer =>
        filterPlayer.playerName !== player.playerName);
        setSelectedPlayers(filteredPlayer);
        const returnCoin = coin + player.price;
        setCoin(returnCoin);
    // console.log(returnCoin);
    }
    return (
        <div>
            {
                selectedPlayers.length === 0 ? 
                <div className='flex flex-col items-center justify-center h-60'>
                    <h1 className='text-2xl font-bold text-gray-500'>No player selected yet </h1>
                    <p className='text-gray-400 my-3'>Go to Available tab to select players</p>
                </div> 
                : 
                selectedPlayers.map((player, index) => {
                    return (
                        <SelectedCard key={index} player={player} handelFilterSelectedPlayer= {handelFilterSelectedPlayer}></SelectedCard>
                    )
                })
            }
        </div>
    );
};

export default SelectedPlayers;