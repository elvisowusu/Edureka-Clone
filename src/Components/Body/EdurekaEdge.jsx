import { IoCheckmarkSharp } from "react-icons/io5";
import { FaInfinity } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';

function EdurekaEdge() {
    const Content=[{icon:<IoCheckmarkSharp size={50} className="text-white bg-[linear-gradient(312deg,#30eeff,#34f991)] rounded-full"/>,h2:'Real Time Doubt Resolution',p:'with Live Instructors'},
                   {icon:<FaInfinity size={70} className="text-indigo-500"/>,h2:'Unlimited Access',p:'to Online Learning Repository'},
                   {icon:<p className="text-[80px] bg-[linear-gradient(108deg,#248de4,#243be4)] inline bg-clip-text text-transparent">24/7</p>,h2:'Learning Assistants',p:'to Guide When You Are Stuck'},
                   {icon:<BsGraphUpArrow size={60} className="text-orange-500"/>,h2:'Track Your',p:'Career Growth'}
        ]
    return (
        <div className="mx-[0.6rem]">
            <p className="my-[15px] font-semibold">The Edureka Edge</p>
            {Content.map((content,index)=>{
                return <div key={index} className="pt-[15px] flex justify-center">
                        <div className=" w-[200px]">
                            <section className="h-[85px] flex justify-center items-center ">
                                {content.icon}
                            </section>
                            <section className="text-[14px] text-center px-1">
                                <h2 className="font-bold ">{content.h2}</h2>
                                <p>{content.p}</p>
                            </section>
                        </div>
                    </div>
            })}
        </div>
    );
}

export default EdurekaEdge;