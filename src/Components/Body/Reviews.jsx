import { RxLinkedinLogo } from "react-icons/rx";
import Profile1 from '../../assets/Profile1.jpeg'
import Profile2 from '../../assets/Profile2.jpeg'
import Profile3 from '../../assets/Profile3.jpeg'
import Profile4 from '../../assets/Profile4.jpeg'
import Profile5 from '../../assets/Profile5.jpeg'
import Profile6 from '../../assets/Profile6.jpeg'
import Profile7 from '../../assets/Profile7.jpeg'
import Profile8 from '../../assets/Profile8.jpeg'
import Profile9 from '../../assets/Profile9.jpeg'
import Profile10 from '../../assets/Profile10.jpeg'
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function Reviews() {
    const [read,SetRead]=useState(true);
    const readFunction=()=>{
        SetRead(!read)
    }
    
    const Content =[
        {img:Profile1,Name:'Vivek Yadav',Profession:'Customer Project Manager',Course:'AI and Machine Learning Masters Course',Rating:'',Passage:'The Postgraduate Diploma in AIby Edureka in collaboration with NIT Warangal offered a superb learning experience for working professionals with convenient weekend live classes. The program provided a balanced mix of theoretical knowledge and hands-on experience in model development for ML, deep learning, and NLP. Overall, it exceeded expectations and equipped me with valuable AI skills for the professional arena. Higly recommended for those looking to enhance their expertise an AI.'},
        {img:Profile2,Name:'Ganesh Bapurao...',Profession:'Specialist Software Engineer',Course:'',Rating:'',Passage:"I am writing to share my positive experience upon completing the AngularJS course with Edureka. The entire learning journey was both enriching and rewarding. The modules were well-organized, and the curriculum provided a comprehensive understanding of AngularJS concepts. The hands-on exercises and real-world examples helped solidify my understanding and provided practical insights into application development using AngularJS. The instructors were knowledgeable, approachable, and demonstrated a keen passion for the subject matter. Their guidance and support throughout the course were instrumental in making the learning experience enjoyable. The platform's user interface was intuitive, making it easy to navigate through the modules, access course materials."},
        {img:Profile3,Name:'Lins Varghese',Profession:'Lead Administrator',Course:'DevOps Certification Training Course',Rating:'',Passage:'I have completed the DevOps Certification Training from Edureka, and it has been a transformative experience in understanding the principles and practices that drive deplayment. This course is a game-changerfor anyone looking to bridge the gap between development and operations teams. The Training covered a wide array of topics, starting from the fundamental concepts of DevOps to advanced automation techniques. The instructors were knowledgeable and provided clear explanations, making complex concepts accessible even for those new to the field. The hands-on labs and real-world case studies were particularly valuable, allowing me to apply theoritical knowledge in practical scenarios.'},
        {img:Profile4,Name:'Satybrata Mishra',Profession:'Senior Software Engineer',Course:'Python Programming Certification Training',Rating:'',Passage:'I recently completed the Python Programming Certification Training from Edureka, and I must say it was a fantastic learning experience. The course content was well-structured and covered all the essential concepts of Python programming. The hands-on labs and real-world projects were particularly helpful in solidifying my understanding of the language. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my programming skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to learn Python programming.'},
        {img:Profile5,Name:'Bhakat Raj Joshi',Profession:'Senior Associate',Course:'Microsoft Power BI Certification Course',Rating:'',Passage:'The course I enrolled in was titled Power Bi Masterclass, which spanned over 8 weeks and was led by experienced instructors. The course content was exceptional, covering all aspects of Power BI comprehensively. The material was up-to-date and included real-world examples. Our instructor was extremely knowledgeable and made complex topics easy to understand. Their teaching style was evgaging, and I felt motivated to learn throughout the course. The practical exercises and projects were invaluable. They provided hands-on experience, allowing me to apply the concepts I learned during the course.'},
        {img:Profile6,Name:'Sandeep Kumar',Profession:'Senior Software Engineer',Course:'AWS Architect Certification Training',Rating:'',Passage:'I recently completed the AWS Architect Certification Training from Edureka, and I must say it was an excellent learning experience. The course content was comprehensive and covered all the essential topics required to become an AWS Architect. The hands-on labs and real-world projects were particularly helpful in understanding the practical aspects of AWS. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to become an AWS Architect.'},
        {img:Profile7,Name:'Rajesh Kumar',Profession:'Senior Software Engineer',Course:'Big Data Hadoop Certification Training Course',Rating:'',Passage:'I recently completed the Big Data Hadoop Certification Training Course from Edureka, and I must say it was a fantastic learning experience. The course content was well-structured and covered all the essential concepts of Big Data and Hadoop. The hands-on labs and real-world projects were particularly helpful in solidifying my understanding of the subject. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to learn Big Data and Hadoop.'},
        {img:Profile8,Name:'Abhishek Roy',Profeesion:'',Course:'Tableau Certification Training Course',Rating:'',Passage:'I recently completed the Tableau Certification Training Course from Edureka, and I must say it was a fantastic learning experience. The course content was well-structured and covered all the essential concepts of Tableau. The hands-on labs and real-world projects were particularly helpful in solidifying my understanding of the subject. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to learn Tableau.'},
        {img:Profile9,Name:'Saurabh Sarkar',Profession:'SPS Associate',Course:'Microsoft Power BI Certification Course',Rating:'',Passage:'I recently completed the Microsoft Power BI Certification Course from Edureka, and I must say it was a fantastic learning experience. The course content was well-structured and covered all the essential concepts of Power BI. The hands-on labs and real-world projects were particularly helpful in solidifying my understanding of the subject. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to learn Power BI.'},
        {img:Profile10,Name:'Mohammad Sadaq',Profession:'Associate Basis Consultant',Course:'AWS SysOps Certification Training',Rating:'',Passage:'I recently completed the AWS SysOps Certification Training from Edureka, and I must say it was a fantastic learning experience. The course content was well-structured and covered all the essential concepts of AWS SysOps. The hands-on labs and real-world projects were particularly helpful in solidifying my understanding of the subject. The instructors were knowledgeable and provided clear explanations, making complex topics easy to understand. The course has helped me enhance my skills and has opened up new opportunities in my career. I would highly recommend this course to anyone looking to learn AWS SysOps.'}
    ];
    return (
        <div className="px-[0.6rem] w-[24rem] ">
            <h1 className='my-[1.5rem] text-[#404040] font-semibold'>Recent Additions</h1>
            {
               Content.map((content,id)=>{
                return(
                    <div key={id} className="flex flex-col px-[30px] py-[25px] mb-[15px] h-[250px] border shadow-[0_5px_20px_rgb(0,0,0,0.12)]">
                        <section className="flex items-center mb-[15px] bg-[rgba(255,255,255,.25)]">
                            <img src={content.img} className="rounded-full w-[4.2rem] h-[4.2rem] mr-[10px]"/>
                            <section className="w-78% leading-3">
                                <p className="text-[18px] flex gap-1 items-center mb-[5px] text-[#404040] font-bold"><span>{content.Name}</span> <RxLinkedinLogo size={20} className="text-blue-500"/></p>
                                <p className="text-[12px] text-[#4a4a4a] font-medium">{content.Profession}</p>
                            </section>
                        </section>
                        <section className="mb-[15px]">
                            <p className="text-[12px] font-semibold text-[#4a4a4a]">{content.Course}</p>
                            <p className="flex">{[...Array(5)].map((_, index) => (
                                <FaStar className="text-[#ffc700]" key={index} size={10} />
                            ))}</p>
                        </section> 
                        <p className={`text-[#404040] italic text-[14px] h-[90px] overflow-hidden ${read ? '' : 'overflow-ellipsis'}`}>
                            {content.Passage}
                            <button onClick={readFunction} className="text-[#0575b3]">Read {read?'More':'Less'}</button>
                        </p>
            </div> 
                )
               }) 
            }
            <button className="text-[#0c5397] text-[12px] font-bold mb-[25px] mt-[5px] w-full flex items-center justify-center">VIEW ALL REVIEWS <IoIosArrowForward size={19}/> </button>
        </div>
    );
}

export default Reviews;
