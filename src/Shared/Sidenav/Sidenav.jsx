import React from 'react'


const Sidenav = ({ isOpen, handleToggle, navWrapper }) => {
    return (

        <div
            ref={navWrapper}
            className={`bg-slate-800 w-[80%] h-[100%] fixed left-[-100%] z-[9999] top-0 py-[4.9rem] overflow-x-hidden shadow-lg shadow-gray-300 text-center transition-all delay-[0.7s] ${isOpen === true ? 'left-0' : 'left-[-100%]'}`}

        >


            <button
                className="absolute right-[29px] top-[10px] bg-none border-none text-[2rem] p-[0.5rem] cursor-pointer transition-all delay-[0.3s] text-[#111] hover:text-[#222]"
                onClick={handleToggle}
            >
                <AiFillCloseCircle />
            </button>
            <ul className="h-[500px]">

                i ne d you
                i ne d you
                i ne d you
                i ne d you
                i ne d you

            </ul>
        </div>
    )
}

export default Sidenav