import { MdKeyboardArrowRight } from "react-icons/md";

function Courses() {
    const content =[{name:"DEVOPS ENGINEER",link:"https://www.edureka.co/masters-program/devops-engineer-training"},
                     {name:"CLOUD ARCHITECT",link:"https://www.edureka.co/masters-program/cloud-architect-training"},
                     {name:"DATA SCIENCE",   link:"https://www.edureka.co/masters-program/data-scientist-certification"}]
    return (
        <div className="absolute top-[26.9rem] w-[100%] flex gap-[0.7rem] items-center px-[1rem] text-left text-[14px] text-[#404040]">
            {content.map((content,id)=>{
                return <section className={`${id>1?'hidden':''} h-[90px] rounded-sm shadow-lg px-[15px] w-[50%] py-[10px] bg-white`} key={id}>
                    <p className="leading-4 mb-[10px] text-[12px]">BECOME A <span className="block font-semibold">{content.name}</span></p>
                    <section className="flex items-center mb-[10px] text-[#0c5397] font-bold"><a className="" href={content.link}>KNOW MORE</a><MdKeyboardArrowRight size={22}/></section>
                </section>
            })}
        </div>
    );
}

export default Courses;