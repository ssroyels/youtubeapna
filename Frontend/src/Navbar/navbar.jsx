import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar() {
    return ( 
        <div className='fixed-top bg-gray-50 '>
        <div className="collapse" id="navbarToggleExternalContent">
  <div className=" p-4">
    <h5 className="text-body-emphasis h4">Collapsed content</h5>
    <span className="text-body-secondary">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav className="navbar navbar-black">
  <div className='d-flex'>
  <div className="container-fluid mt-[10px] ml-[10px] w-[13vh]">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
  <div>
    <img className='h-[5vh] w-[20vh] mt-[10px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="" />
  </div>
  </div>

  <div className='d-flex '>
<div className='d-flex'>
  <input type="text" placeholder='Search' className=' border border-gray px-[20px] rounded-l-full w-[70vh] h-[50px] text-xl '/>
  <div><CiSearch className='border-gray-600 bg-gray-200 p-[10px] w-[10vh] h-[50px] rounded-r-full font-bold text-4xl ' /></div>
</div>
<div><FaMicrophone className='ml-[20px] rounded-full text-5xl border border-gray-600 bg-gray-200 p-[10px] ' /></div>
  </div>
  <div className='d-flex justify-between w-[30vh]  '>
<div className='d-flex rounded-full bg-gray-100 h-[5vh] w-[20vh]  p-[5px]'>
<FaPlus className='mr-[10px] mt-[5px]  ' /><p>Create</p>
</div>
<div className='ml-[15px]'>
<FaBell className='font-bold mr-[15px]  h-[5vh] w-[5vh] p-[5px] rounded-full bg-gray-100' />
</div>
<div className='mr-[15px]'>
<CgProfile className='font-bold mr-[15px]  h-[5vh] w-[5vh] p-[5px] rounded-full bg-blue-400' />
</div>
  </div>
</nav>
        </div>
);
}

export default Navbar;