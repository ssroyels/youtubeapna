import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSolidPlaylist } from "react-icons/bi";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { GiFilmProjector } from "react-icons/gi";
import { MdLiveTv } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { PiNewspaperClipping } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
import { SiCoursera } from "react-icons/si";
import { FaPeopleRobbery } from "react-icons/fa6";
import { MdOutlinePodcasts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineReport } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import "./sidebar.css"

function SideBar() {
    return (  
        <div className='h-full w-[38vh] p-[20px]  bg-gray-50'>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <AiFillHome className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Home</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
            <SiYoutubeshorts className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Shorts</p>
            </div>

            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
            <MdSubscriptions className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Subscriptions</p>
            </div>

            <hr />

            <div className='d-flex '>
                <p className='font-bold text-xl mt-[10px] mr-[10px]'>You</p>
                <MdKeyboardArrowRight className='mt-[15px] text-2xl' />
            </div>

            <div className='d-flex p-[10px] back rounded-xl mt-[10px] mb-[10px]'>
            <FaHistory  className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>History</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
            <BiSolidPlaylist  className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>PlayLists</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <BiSolidVideos className='mr-[15px] text-2xl'/>
                <p className=' text-xl'>Your videos</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <MdOutlineWatchLater className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Watch Later</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <FaRegThumbsUp className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Liked videos</p>
            </div>

            <hr />

<div className='d-flex '>
    <p className='font-bold text-xl mt-[10px] mr-[10px]'>Subscriptions</p>
    
</div>
<div className='d-flex p-[10px] back rounded-xl mb-[10px] mt-[10px]'>
               
                <p className=' text-xl'>Khan sir</p>
            </div>

            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
               
                <p className=' text-xl'>India TV</p>
            </div>

            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
               
                <p className=' text-xl'>Firstpost</p>
            </div>

            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
               
                <p className=' text-xl'>Aaj Tak</p>
            </div>

            <hr />

<div className='d-flex '>
    <p className='font-bold text-xl mt-[10px] mr-[10px]'>Explore</p>
    
</div>
<div className='d-flex p-[10px] back rounded-xl mb-[10px] mt-[10px]'>
                <IoIosTrendingUp className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Trending</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <MdOutlineShoppingBag className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Shopping</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <IoMusicalNotesOutline className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Music</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <GiFilmProjector className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Films</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <MdLiveTv className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Live</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <SiYoutubegaming className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Gaming</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <PiNewspaperClipping className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>News</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <GiTrophyCup className='mr-[15px] text-2xl'/>
                <p className=' text-xl'>Sport</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <SiCoursera className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Courses</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <FaPeopleRobbery className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Fashion & beauty</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <MdOutlinePodcasts className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Podcasts</p>
            </div>

            <hr />

            <div className='d-flex p-[10px] mt-[10px] back rounded-xl mb-[10px]'>
                <IoSettingsOutline className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Settings</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <MdOutlineReport className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Report history</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <IoMdHelpCircleOutline className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Help</p>
            </div>
            <div className='d-flex p-[10px] back rounded-xl mb-[10px]'>
                <VscFeedback className='mr-[15px]  text-2xl'/>
                <p className=' text-xl'>Send feedback</p>
            </div>

            <hr />

            <div>
                <p className='font-bold text-muted mt-[10px]'>About Press Copyright Contact us Creator Advertise Developers</p>
                <p className='font-bold text-muted mt-[10px]'>Terms Privacy Policy & Safety How YouTube works Test new features</p>
                <p className='font-semibold text-muted mt-[10px]'>© 2025 Google LLC</p>
            </div>


          
        </div>
    );
}

export default SideBar;