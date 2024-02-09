import { useState } from "react";
import { VscMenu } from "react-icons/vsc";

function TrendingCourses() {
    const [view,setView]=useState(false)
    const content = [{Name:'Cloud Computing',link:''},
                     {Name:'DevOps', link:''},
                     {Name:'BI and Visualization',link:''},
                     {Name:'Cyber Security',link:''},
                     {Name:'Data Science',link:''},
                     {Name:'Programming & Frameworks',link:''},
                     {Name:'Project Management and Methodologies',link:''},
                     {Name:'Software Testing',link:''},
                     {Name:'Big Data',link:''},
                     {Name:'Artificial Intelligence',link:''},
                     {Name:'Frontend Development',link:''},
                     {Name:'Databases',link:''},
                     {Name:'Robotic Process Automation',link:''},
                     {Name:'Data Warehousing and ETL',link:''},
                     {Name:'Digital Marketing',link:''},
                     {Name:'Operating Systems',link:''},
                     {Name:'Mobile Development',link:''},
                     {Name:'Architecture & Design Patterns',link:''},
                     {Name:'Blockchain',link:''},
                    ]

    const handleView =()=>{setView(!view)}
    return (
        <section className="relative mt-[5rem] px-[1rem] bg-[#F9F9F9]">
             <h1 className="my-[15px] text-[#404040] text-[1rem] font-semibold">Trending Courses</h1>
             <section className="relative flex justify-between items-center">
                <h1 className="text-[#777] text-[14px]">All</h1>
                <button onClick={handleView} className="border rounded-md border-[#ddd] px-[10px] py-[9px]"><VscMenu size={20} className="text-[#888]"/></button>
                {view && <section className="absolute top-[2.45rem] bg-white shadow-xl w-full text-[17px]  font-medium text-[#757575] h-[16rem] overflow-y-scroll">
                    <button onClick={handleView} className="font-semibold text-[18px] text-[#404040] w-full text-left border-b-[5px] border-[#0f4e91] px-[15px]">All</button>
                    {content.map((content,id)=>{
                        return <ul key={id}><li className="px-[15px] py-[3px]"><a href={content.link} className="" >{content.Name}</a></li></ul>
                    })}
                </section>}
             </section>
        </section>
    );
}

export default TrendingCourses;