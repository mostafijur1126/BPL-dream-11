
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Home/Banner/Banner'
import PlayersInfo from './Component/Home/PlayersInfo/PlayersInfo'
import Navbar from './Component/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from './Component/Footer/Footer'

const loadData = async () => {
  const res = await fetch("/Data.json");
  return res.json();
}

function App() {
  const [coin, setCoin] = useState("3000000");
  const playerPromise = loadData();

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PlayersInfo playerPromise={playerPromise} coin={coin} setCoin={setCoin}></PlayersInfo>
      </Suspense>
      <Footer></Footer>
      {/* react tostify */}
      <ToastContainer />
    </>
  )
}

export default App
