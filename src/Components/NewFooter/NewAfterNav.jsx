import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { UserFooterContext } from "./newFooter";
import { useContext } from "react";
function NewAfterNav() {

    const Courses = [
                        {name:"Cloud Computing", link:""},
                        {name:"DevOps",link:""},
                        {name:"BI and Visualization",link:""},
                        {name:"Cyber Security",link:""},
                        {name:"Data Science",link:""},
                        {name:"Programming & Frameworks",link:""},
                        {name:"Project Management and Methodologies",link:""}
    ]

    const content =useContext(UserFooterContext)

    return (
        <div className="flex  w-[100%] shadow-inner mt-2 items-center px-[1rem] pt-[0.2rem]">
            {/* md:max-h-[45px] md:min-h-[45px] md:px-[40px] md:pt-[7px] */}
           <section>
                <p className="text-[12px]">Browse <span className="flex font-semibold text-[14px] leading-3 mr-[1.5rem]">Categories <IoMdArrowDropdown className="inline " /> </span></p>
                {/* w-[1.5rem] h-[1.5rem] */}
           </section>
           <section className="flex items-center justify-between flex-grow-[1]">
           <section className="flex items-center gap-[2rem]">
            {/* gap-[5rem] */}
                {Courses.map((course,key)=>{
                   return <a className={` ${content.screenState<720 & key>1?'hidden':''}`} key={key} href={course.link}>{course.name}</a>
                //    py-[5px] px-[10px]
                })}
           </section>
           <button className="rounded-[16.5px] hover:bg-slate-400 bg-opacity-10 py-[5px] px-[10px] font-extrabold"><IoMenuOutline className="opacity-100 h-[1.2rem] w-[1.2rem]"/></button>
           </section>
        </div>
    );
}

export default NewAfterNav;