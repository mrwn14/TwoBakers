import React from 'react';
import bigBg from "../assets/image2.jpg";
import { useNavigate } from "react-router-dom";
import Chatbot from '../components/Chatbot'

function Home(props) {
    const navigate = useNavigate();
    const {language} = props;
    // console.log(language)

  return (
    <div className='text-black h-screen relative overflow-hidden'>
        <Chatbot language = {language} />
        <div className='bg-cover h-screen overflow-hidden'>
            <img className='bg-cover max-w-none md:w-screen h-screen' src={bigBg} />
        </div> 
        <div className='absolute top-1/3 text-center w-screen overflow-hidden z-20 justify-center'>
            <div className='h-40 bg-white/75'>
                {
                    language? 
                     <p className='text-xl opacity-1 font-semibold py-10'> Savourez nos pâtisseries de n'importe où <br/>et votre langue nous remerciera bientôt. </p>
                    : <p className='text-xl opacity-1 font-semibold py-10'> Enjoy our baked goodies from anywhere <br/>and your tongue will thank us soon. </p>
                }
            </div>
            <button onClick={() => navigate("/TwoBakers/Recipes")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-5 px-4 rounded-full hover:scale-105 transition ease-in-out">
                EXPLORE
            </button>
                
        </div>
        
    </div>
  )
}

export default Home