
import { Suspense } from 'react'
import './App.css'
import Banner from './Component/Home/Banner/Banner'
import PlayersInfo from './Component/Home/PlayersInfo/PlayersInfo'
import Navbar from './Component/Navbar/Navbar'

const loadData = async () => {
  const res = await fetch("/Data.json");
  return res.json();
}

function App() {
  const playerPromise = loadData();

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <PlayersInfo playerPromise={playerPromise}></PlayersInfo>
     </Suspense>
     {/* <PlayerCard></PlayerCard> */}
    </>
  )
}

export default App
