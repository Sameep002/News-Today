import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex bg-gray-700 text-white'>
                    <div className='flex mr-[450px] ml-10'>
                        <div className='w-10 m-2'>
                            <img src="./images/global-news.png" alt="" />
                        </div>
                        <div className='my-auto'>News Today</div>
                    </div>
                    <div className='flex ml-[150px] space-x-8 my-auto '>
                        {/* <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center">Home</div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center">Business</div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center">Entertainment</div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center">Sports</div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center">Health</div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center">Science</div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center">Technology</div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center">About Us</div> */}
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center"><Link to="/">Home</Link></div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center"><Link to="/business">Business</Link></div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center"><Link to="/entertainment">Entertainment</Link></div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center"><Link to="/sports">Sports</Link></div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center"><Link to="/health">Health</Link></div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center"><Link to="/science">Science</Link></div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center"><Link to="/technology">Technology</Link></div>
                        <div className="transform transition duration-500 hover:scale-125 flex justify-center items-center"><Link to="/aboutus">About Us</Link></div>
                    </div>
                </nav>
    </>
  )
}

export default Navbar