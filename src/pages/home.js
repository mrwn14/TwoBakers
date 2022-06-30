import React from 'react'
import bigBg from "../assets/image2.jpg"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

  return (
    <div className='text-black h-screen relative overflow-hidden'>
        <div className='bg-cover h-screen overflow-hidden'>
            <img className='bg-cover max-w-none md:w-screen h-screen' src={bigBg} />
        </div> 
        <div className='absolute top-1/3 text-center w-screen overflow-hidden z-20 justify-center'>
            <div className='h-40 bg-white/75'>
                <p className='text-xl opacity-1 font-semibold py-10'>
                    Enjoy our baked goodies from anywhere <br/>and your tongue will thank us soon.
                </p>
            </div>
            <button onClick={() => navigate("/TwoBakers/Recipes")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-5 px-4 rounded-full hover:scale-105 transition ease-in-out">
                EXPLORE
            </button>
                
        </div>
    </div>
  )
}

export default Home