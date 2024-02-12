import { useState } from 'react';
import { SiAzuredevops } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { GiOpenBook } from "react-icons/gi";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { DiScrum } from "react-icons/di";
import { SiMicrosoftazure } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiOpensourcehardware } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { FaSalesforce } from "react-icons/fa";
import { IoLogoTableau } from "react-icons/io5";
import { SiSelenium } from "react-icons/si";
import { SiCyberdefenders } from "react-icons/si";
import { GrCertificate } from "react-icons/gr";
import { SiPowerbi } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { PiInfinityDuotone } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";

function TrendingCoursesSlider() {
    const content =[{courseName:'DevOps Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#4fcdce,#975ae0)]",img:<PiInfinityDuotone className="bg-white rounded-full text-blue-400 p-2"/>,number:"",stars:""},
                    {courseName:'AWS Certification Training Course for Solutions',bgGradient:"bg-pink",img:<SiAmazonaws className="text-white"/>,number:"",stars:""},
                    {courseName:'ChatGPT Complete Course: Beginings to Advance',bgGradient:"bg-pink",img:<GiOpenBook className="text-white"/>,number:"",stars:""},
                    {courseName:'Microsoft Power BI Certification Training Course',bgGradient:"bg-pink",img:<SiPowerbi className="bg-white text-pink-400 p-2 rounded-md"/>,number:"",stars:""},
                    {courseName:'PMP Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#e59f39,#d475c5)]",img:<GrCertificate className="text-white"/>,number:"",stars:""},
                    {courseName:'Cyber Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#73db9d,#fcb279)]",img:<SiCyberdefenders className="text-white"/>,number:"",stars:""},
                    {courseName:'Selenium Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#80d0c7,#166a9b)]",img:<SiSelenium className="text-white rounded-md"/>,number:"",stars:""},
                    {courseName:'Tableau Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#f9a652,#00c5b0)]",img:<IoLogoTableau className="text-green-400 bg-white rounded-full p-2"/>,number:"",stars:""},
                    {courseName:'Python Programming Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#f9a652,#00c5b0)]",img:<FaPython className="text-white"/>,number:"",stars:""},
                    {courseName:'Salesforce Certification Training Course',bgGradient:"bg-pink",img:<FaSalesforce className="text-white"/>,number:"",stars:""},
                    {courseName:'Microservices Certification Training Course',bgGradient:"bg-pink",img:<FaMicrochip className="text-pink-400 rounded-full p-2 bg-white"/>,number:"",stars:""},
                    {courseName:'Azure Data Engineer Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#8affe7,#5939e0)]",img:<GiOpenBook className="text-white"/>,number:"",stars:""},
                    {courseName:'Java Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#ff6364,#ff88bc)]",img:<FaJava className="rounded-full bg-white text-red-400 p-2"/>,number:"",stars:""},
                    {courseName:'Certified Ethical Hacking Course-CEH v12',bgGradient:"bg-[linear-gradient(240deg,#d677c0,#41bbbd)]",img:<SiOpensourcehardware className="text-white"/>,number:"",stars:""},
                    {courseName:'Data Science with Python Certification Course',bgGradient:"bg-pink",img:<FaPython className="text-white"/>,number:"",stars:""},
                    {courseName:'Microsoft Azure Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#ff6364,#ff88bc)]",img:<SiMicrosoftazure className="text-white"/>,number:"",stars:""},
                    {courseName:'Ceritied Scrum Master Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#ffe583,#ff63cc)]",img:<DiScrum className="bg-white text-pink-300 rounded-full p-1"/>,number:"",stars:""},
                    {courseName:'Microsoft SQL Service Certification',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'Digital Marketing Course',bgGradient:"bg-pink",img:<BsFillMegaphoneFill className="text-pink-400 bg-white rounded-sm p-2"/>,number:"",stars:""},
                    {courseName:'Microsoft Azure DevOps Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#6568ff,#d879ec)]",img:<SiAzuredevops className="text-white"/>,number:"",stars:""},
                    {courseName:'Blockchain Developer Certification Course',bgGradient:"bg-[linear-gradient(240deg,#bdd377,#09adef)]",img:<GiOpenBook className="text-white"/>,number:"",stars:""},
                    {courseName:'Kubernetes Certification Training Course',bgGradient:"bg-[linear-gradient(240deg,#46dbea,#507fd9)]",img:<SiKubernetes className="text-white"/>,number:"",stars:""},
                    {courseName:'Docker Certification Training Course',bgGradient:"bg-pink",img:<FaDocker className="text-pink-400 bg-white rounded-full p-2"/>,number:"",stars:""},
                    {courseName:'MySQL DBA Certification Training',bgGradient:"bg-pink",img:<DiMysql className="text-pink-400 rounded-full p-2 bg-white"/>,number:"",stars:""},
    ]

    // State to manage ratings for each course
    const [ratings, setRatings] = useState(new Array(content.length).fill(0));
    // Function to handle rating click event
    const handleRatingClick = (index, rating) => {
        // Clone the existing ratings array
        const newRatings = [...ratings];
        // Update the rating for the clicked course
        newRatings[index] = rating;
        // Update the state with new ratings
        setRatings(newRatings);
      };
    
    return (
        <section className="w-[356px] px-[1.5rem] grid gap-[1rem]">
            {content.map((items,key)=>{
                return <section key={key} className="flex">
                <div className={`${items.bgGradient} text-[50px] h-[100px] w-[93px] min-w-[93px] flex items-center justify-center`}>
                    {items.img}
                </div>
                <div className="px-[10px] py-[11px] flex flex-col justify-between">
                    <h1>{items.courseName}</h1>
                    <div className="">
                    {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    onClick={() => handleRatingClick(key, starIndex + 1)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Render filled star if starIndex is less than the current rating, otherwise render outline star */}
                    {starIndex < ratings[key] ? <FaStar className="inline text-[#ffc700]" /> : <FaStar className="inline text-[#f0f0f0]" />}
                  </span>
                ))}
                {/* Display the number of ratings */}
                <span className="bg">({ratings[key]})</span>
                    </div>
                </div>
            </section>
            })}
        </section>
    );
}

export default TrendingCoursesSlider;