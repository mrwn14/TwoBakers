import React from 'react'
import bigBg from "../assets/image2.jpg"


function Recipes() {
  return (
    <div className='text-black h-screen relative overflow-hidden'>
        <div className='bg-cover h-screen overflow-hidden'>
            <img className='' src={bigBg} />
        </div> 
        <div className='absolute top-1/3 text-center w-screen overflow-hidden  z-20 justify-center'>
            <div className='h-40 bg-white/75'>
                <p className='text-xl opacity-1 font-semibold py-10'>
                    Enjoy our baked goodies from anywhere <br/>and your tongue will thank us soon.
                </p>
            </div>
            
                
        </div>
    </div>
  )
}

export default Recipes