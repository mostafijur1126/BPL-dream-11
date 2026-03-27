
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Home/Banner/Banner'
import PlayersInfo from './Component/Home/PlayersInfo/PlayersInfo'
import Navbar from './Component/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from './Component/Footer/Footer'
import Newsletter from './Component/Home/Newsletter/Newsletter'

const loadData = async () => {
  const res = await fetch("/Data.json");
  return res.json();
}

function App() {
  const [coin, setCoin] = useState("30000000");
  const playerPromise = loadData();

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PlayersInfo playerPromise={playerPromise} coin={coin} setCoin={setCoin}></PlayersInfo>
      </Suspense>
      <Newsletter></Newsletter>
      <Footer></Footer>
      {/* react tostify */}
      <ToastContainer />
    </>
  )
}

export default App
