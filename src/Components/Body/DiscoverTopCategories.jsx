import {useState} from 'react'
import { IoMdCloudOutline } from "react-icons/io";
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
    const [view,setView] = useState(false)
    const categories = [{image:<IoMdCloudOutline className="text-[#ff8f9d]"/>,Field:'Cloud Computing'},
                        {image:<GoInfinity className="text-[#6e97ff]"/>,Field:'DevOps'},
                        {image:<GrShieldSecurity className="text-[#91c653]"/>,Field:'Cyber Security'},
                        {image:<IoBulbOutline className="text-[#c891f8]"/>,Field:'BI and Visualization'},
                        {image:<TfiWorld className="text-[#7bdcfc]"/>,Field:'Programming & Frameworks'},
                        {image:<GiMaterialsScience className="text-[#fea101]"/>,Field:'Data Science'},
                        {image:<GrDocumentText className="text-[#ff8f9d]"/>,Field:'Project Management and Methodologies'},
                        {image:<PiGraduationCap className="text-[#ff8f9d]"/>,Field:'PG Programs'},
                        {image:<GiBrain className="text-[#6e97ff]"/>,Field:'Artificial Intelligence'},
                        {image:<BsGraphUpArrow className="text-[#91c653]"/>,Field:'Big Data'},
                        {image:<GiAutoRepair className="text-[#c891f8]"/>,Field:'Software Testing'},
                        {image:<FaCode className="text-[#7bdcfc]"/>,Field:'Frontend Development'},
                        {image:<BsDatabase className="text-[#fea101]"/>,Field:'Databases'},
                        {image:<TbRobot className="text-[#ff8f9d]"/>,Field:'Robotic Process Automation'},
                        {image:<IoSettingsOutline className="text-[#6e97ff]"/>,Field:'Data Warehousing and ETL'},
                        {image:<CiMobile3 className="text-[#7bdcfc]"/>,Field:'Mobile Development'},
                        {image:<BsWindowFullscreen className="text-[#c891f8]"/>,Field:'Operating Systems'},
                        {image:<SiMaterialdesign className="text-[#fea101]"/>,Field:'Architecture & Design Patterns'},
                        {image:<SiHiveBlockchain className="text-[#6e97ff]"/>,Field:'Blockchain'},
                        {image:<HiOutlineMegaphone className="text-[#ff8f9d]"/>,Field:'Digital Marketing'},

                    ]
        const viewFunction =()=>{
            setView(!view)
        }
    return (
        <div>
            <h1 className='px-[0.6rem] my-[1.5rem] text-[#404040] font-semibold'>Discover Top Categories</h1>
            {categories.map((categories,index)=>{
                return(
                    <div key={index} className='flex items-center text-[12px] text-[#404040] font-semibold'>
                            {categories.image}
                            <p className='ml-[15px]'>{categories.Field}</p>
                    </div>
                )
            })}
            <button onClick={viewFunction} className='text-[#0c5397] font-bold text-[12px] mt-[19px]'>VIEW {view?'MORE':'LESS'} </button>
        </div>
    );
}

export default DiscoverTopCategories;