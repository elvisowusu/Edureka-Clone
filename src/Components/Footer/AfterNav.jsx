import { IoMdArrowDropdown } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";

function AfterNav({screenWidth}) {
    const Courses = [
                        {name:"Cloud Computing", link:""},
                        {name:"DevOps",link:""},
                        {name:"BI and Visualization",link:""},
                        {name:"Cyber Security",link:""},
                        {name:"Data Science",link:""},
                        {name:"Programming & Frameworks",link:""},
                        {name:"Project Management and Methodologies",link:""}
                    ]
    return (
        <div className="flex  w-[100%] shadow-inner mt-2 items-cente px-[1rem] pt-[0.2rem]">
            {/* md:max-h-[45px] md:min-h-[45px] md:px-[40px] md:pt-[7px] */}
           <section>
                <p >Browse <span className="flex font-semibold text-[15px] leading-3 mr-[1rem]">Categories <IoMdArrowDropdown className="inline " /> </span></p>
                {/* w-[1.5rem] h-[1.5rem] */}
           </section>
           <section className="flex items-center justify-between flex-grow-[1]">
           <section className="flex items-center gap-[2rem]">
            {/* gap-[5rem] */}
                {Courses.map((course,key)=>{
                   return <a className={` ${screenWidth<720 & key>1?'hidden':''}`} key={key} href={course.link}>{course.name}</a>
                //    py-[5px] px-[10px]
                })}
           </section>
           <button className="rounded-[16.5px] hover:bg-slate-400 bg-opacity-10 py-[5px] px-[10px] font-extrabold"><TfiMenu className="opacity-100"/></button>
           </section>
        </div>
    );
}

export default AfterNav;