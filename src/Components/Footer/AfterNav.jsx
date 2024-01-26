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
        <div className="flexs">
           <section>
                <p >Browse <span className="inline-flex items-center">Categories <IoMdArrowDropdown className="w-[1.5rem] h-[1.5rem]" /> </span></p>
           </section>
           <section>
                {
                    Courses.map((course,key)=>{
                        <a key={key} href={course.link}>{course.name}</a>
                    })
                }
           </section>
           <TfiMenu/>
        </div>
    );
}

export default AfterNav;