import {useState} from 'react'
import { IoIosArrowForward, IoMdCloudOutline } from "react-icons/io";
import { GoInfinity } from "react-icons/go";
import { GrShieldSecurity, GrDocumentText } from "react-icons/gr";
import { IoBulbOutline, IoSettingsOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { GiMaterialsScience, GiBrain ,GiAutoRepair } from "react-icons/gi";
import { PiGraduationCap } from "react-icons/pi";
import { BsGraphUpArrow, BsDatabase, BsWindowFullscreen } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { TbRobot } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { SiMaterialdesign, SiHiveBlockchain } from "react-icons/si";
import { HiOutlineMegaphone } from "react-icons/hi2";

function DiscoverTopCategories() {
    const [view,setView] = useState(true)
    const categories = [{image:<IoMdCloudOutline size={40} className="text-[#ff8f9d]"/>,Field:'Cloud Computing'},
                        {image:<GoInfinity size={40} className="text-[#6e97ff]"/>,Field:'DevOps'},
                        {image:<GrShieldSecurity size={40} className="text-[#91c653]"/>,Field:'Cyber Security'},
                        {image:<IoBulbOutline size={40} className="text-[#c891f8]"/>,Field:'BI and Visualization'},
                        {image:<TfiWorld size={40} className="text-[#7bdcfc]"/>,Field:'Programming & Frameworks'},
                        {image:<GiMaterialsScience size={40} className="text-[#fea101]"/>,Field:'Data Science'},
                        {image:<GrDocumentText size={40} className="text-[#ff8f9d]"/>,Field:'Project Management and Methodologies'},
                        {image:<PiGraduationCap size={40} className="text-[#ff8f9d]"/>,Field:'PG Programs'},
                        {image:<GiBrain size={40} className="text-[#6e97ff]"/>,Field:'Artificial Intelligence'},
                        {image:<BsGraphUpArrow size={40} className="text-[#91c653]"/>,Field:'Big Data'},
                        {image:<GiAutoRepair size={40} className="text-[#c891f8]"/>,Field:'Software Testing'},
                        {image:<FaCode size={40} className="text-[#7bdcfc]"/>,Field:'Frontend Development'},
                        {image:<BsDatabase size={40} className="text-[#fea101]"/>,Field:'Databases'},
                        {image:<TbRobot size={40} className="text-[#ff8f9d]"/>,Field:'Robotic Process Automation'},
                        {image:<IoSettingsOutline size={40} className="text-[#6e97ff]"/>,Field:'Data Warehousing and ETL'},
                        {image:<CiMobile3 size={40} className="text-[#7bdcfc]"/>,Field:'Mobile Development'},
                        {image:<BsWindowFullscreen size={40} className="text-[#c891f8]"/>,Field:'Operating Systems'},
                        {image:<SiMaterialdesign size={40} className="text-[#fea101]"/>,Field:'Architecture & Design Patterns'},
                        {image:<SiHiveBlockchain size={40} className="text-[#6e97ff]"/>,Field:'Blockchain'},
                        {image:<HiOutlineMegaphone size={40} className="text-[#ff8f9d]"/>,Field:'Digital Marketing'},

                    ]
        const viewFunction =()=>{
            setView(!view)
        }
    return (
        <div className='px-[0.6rem]'>
            <h1 className='mb-[1.5rem] text-[#404040] font-semibold'>Discover Top Categories</h1>
            {categories.map((categories,index)=>{
                return(
                    <div key={index} className={`${view && index > 6 ?'hidden':''} my-[13px] flex items-center text-[12px] text-[#404040] font-semibold px-[20px] py-[18px] w-[22.7rem] shadow-[0_8px_30px_rgb(0,0,0,0.11)] bg-white`}>
                            {categories.image}
                            <p className='ml-[15px]'>{categories.Field}</p>
                    </div>
                )
            })}
            <button onClick={viewFunction} className='flex items-center justify-center text-[#0c5397] font-bold text-[12px] mt-[19px] w-[22.7rem]'>VIEW {view?'MORE':'LESS'} <IoIosArrowForward size={18}/> </button>
        </div>
    );
}

export default DiscoverTopCategories;