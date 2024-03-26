import { useEffect } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaInfinity, FaQuoteLeft } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import 'aos/dist/aos.css';
import gadgetsNow from '../../assets/gadgetsNow.png'
import theEconomicTimes from '../../assets/theEconomicTimes.png'
import indiatoday from '../../assets/indiatoday.png'
import bwEducation from '../../assets/bwEducation.png'

function EdurekaEdge() {
    const Content=[{icon:<IoCheckmarkSharp size={50} className="text-white bg-[linear-gradient(312deg,#30eeff,#34f991)] rounded-full"/>,h2:'Real Time Doubt Resolution',p:'with Live Instructors'},
                   {icon:<FaInfinity size={70} className="text-indigo-500"/>,h2:'Unlimited Access',p:'to Online Learning Repository'},
                   {icon:<p className="text-[80px] bg-[linear-gradient(108deg,#248de4,#243be4)] inline bg-clip-text text-transparent">24/7</p>,h2:'Learning Assistants',p:'to Guide When You Are Stuck'},
                   {icon:<BsGraphUpArrow size={60} className="text-orange-500"/>,h2:'Track Your',p:'Career Growth'}
        ]
    const Comments=[{p:"How learning Bitcoin's backbone tech can boost your career",img:gadgetsNow},
                    {p:'Techies need to up-skill 15-20 times to achieve career growth',img:theEconomicTimes},
                    {p:'Top 10 courses you should take in 2019 for a great career ahead',img:indiatoday},
                    {p:"Edureka Launches Machine Learning Engineer Master's Program to Meet Rising Demand for ML Engineers",img:bwEducation}
                ]
       
    return (
        <div className="mx-[0.6rem] w-[22.9rem]">
            <p className="my-[15px] font-semibold">The Edureka Edge</p>
            {Content.map((content,index)=>{
                return <div data-aos="fade-up" data-aos-duration="700"  key={index} className="pt-[15px] flex justify-center mb-[40px]">
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
            {Comments.map((comments,index)=>{
                return <div key={index} className="my-[30px]">
                            <FaQuoteLeft size={40} className="text-blue-700"/>
                            <p className="text-[18px] my-[20px] text-center">{comments.p}</p>
                            <section className="flex flex-col items-center overflow-hidden h-[7.6rem] ">
                                <button className="text-[#337ab7] text-[14px]">Read More</button>
                                <img src={comments.img} alt="" width={150} />
                            </section>
            </div>
            })}
                    <p className="text-center">...</p>
        </div>
    );
}

export default EdurekaEdge;