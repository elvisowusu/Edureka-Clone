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
    const CorporateClients=[
        {name:"CocaCola",img:"https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1714656664/img/optimized/cocacola-corp.png",href:"https://www.coca-colaindia.com/"},
        {name:"Visa",img:"https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1714656664/img/optimized/visa-corp.png",href:"https://www.visa.co.in/"},
        {name:"Cisco",img:"https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1714656664/img/optimized/cisco-corp.png",href:"https://www.cisco.com/c/en_in/index.html"},
        {name:"Wipro",img:"https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1714656664/img/optimized/wipro_new-corp.png",href:"https://www.wipro.com/en-IN/"},
        {name:"Dell",img:"https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1714656664/img/optimized/compdd.png",href:"https://www.dell.com/en-in"},
        {name:"Citi",img:"https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1714656664/img/optimized/city-corp.png",href:"https://www.citigroup.com/citi/"},
        {name:"Honeywell",img:"https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1714656664/img/optimized/honeywell-corp.png",href:"https://www.honeywell.com/"},
        {name:"Walmart",img:"https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1714656664/img/optimized/walmart-corp.png",href:"https://www.walmart.com"}
        ]
       
    return (
        <>
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
                    <div className="text-center h-5">...</div>
        </div>
        <section className="relative mt-[30px] w-full text-center text-white">
             <div className="z-20 px-[15px] pt-[50px] pb-[30px] bg-[url(https://d1jnx9ba8s6j9r.cloudfront.net/img/optimized/edureka-business.png)] bg-center">
                <p className="mb-[0.6rem]"><span className="text-[2.4rem]">edureka!</span> for Business</p>   
                <section className="px-[10px]">
                    <p className="text-[1rem] font-bold">No more dull edges in your company. Make your employees into masters.</p>
                    <p className="text-[12px] mt-[10px]">Nurture talent with instructor-led courses on trending technologies</p>
                </section>
                <button className="text-[#0c5397] mt-[15px] text-[16px] bg-white font-bold w-[170px] h-[40px] rounded-sm">LEARN MORE</button>
             </div>
        </section>
        <section className="bg-[#ffffff] px-[15px] ">
            <h1 className="py-[40px] text-center">Our Corporate Clients</h1>
            <div className="grid-cols-3 grid grid-rows-3 gap-2 items-center justify-center ">
            {CorporateClients.map((clients,id)=>{
                return <img key={id} src={clients.img} alt={clients.name} href={clients.href} />
            })}
            </div>
        </section>
        <section className="px-[15px]">
            <img className="py-[25px] w-[110px]" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1714656664/img/Edureka_V_logo.webp" alt="" />
            <h1 className="text-[14px] text-[#030303] font-bold mb-[20px]">TRENDING CERTIFICATION COURSES</h1>
        </section>
        </>
    );
}

export default EdurekaEdge;