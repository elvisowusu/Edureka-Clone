import { IoMdArrowDropdown } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";

function AfterNav() {
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
        <div className="flex">
           <section>
                <p >Browse <span className="block">Categories <IoMdArrowDropdown className="w-[1.5rem] h-[1.5rem] inline" /> </span></p>
           </section>
           <section className="flex justify-evenly items-center">
                {Courses.map((course,key)=>{
                   return <a key={key} href={course.link}>{course.name}</a>
                })}
           </section>
           <TfiMenu/>
        </div>
    );
}

export default AfterNav;