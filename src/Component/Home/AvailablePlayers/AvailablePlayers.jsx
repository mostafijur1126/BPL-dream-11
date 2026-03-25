import React from 'react';
import Card from '../../Ui/Card';

const AvailablePlayers = ({ playerData, coin, setCoin }) => {
    // console.log(playerData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {
                playerData.map((players,index) => {
                    return <Card key={index} players={players} coin={coin} setCoin={setCoin}></Card>;
                })
            }


        </div>
    );
};

export default AvailablePlayers;