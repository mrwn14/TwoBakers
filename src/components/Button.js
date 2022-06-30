import React from 'react'

function Button({button, filter}) {
    return (
        <div className="w-2/3 my-auto text-center translate-y-20 grid grid-cols-1 md:flex m-auto">
            {
                button.map((cat, i)=> {
                    return <button key={i} type="button" onClick={()=> filter(cat)} className="w-full mb-5 flex-1 p-2 bg-btnColor border-none text-amber-500 mr-10 last:mr-0 hover:bg-btnHover">{cat}</button>
                })
            }
        </div>
    )
}

export default Button;