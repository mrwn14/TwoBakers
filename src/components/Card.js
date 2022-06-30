import React from 'react'

function Card({menuItem}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 pb-5 grid-cols-1 translate-y-16 lg:mx-40 md:mx-20">
    {
        menuItem.map((item) =>{
            return <div className="item-container bg-white border drop-shadow-xl p-10 m-b5 hover:bg-gray-200 m-4 hover:scale-105 transition ease-in-out" key={item.id}>
                <div className="item-container overflow-hidden justify-center text-center">
                    <img className='w-full mb-5 border' src={item.image} alt="food"/>
                    <h2 className='text-xl'>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </div>
        })
    }
</div>
  )
}

export default Card