import { GiOpenBook } from "react-icons/gi";
import { PiCertificateDuotone } from "react-icons/pi";
import { useState } from 'react';
import { SiAzuredevops } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { DiMysql } from "react-icons/di";
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
function CareerRelatedPrograms() {
    const content =[{courseName:'DevOps Engineer Masters Program',bgGradient:"bg-pink",img:<GiOpenBook className="text-white"/>,number:"",stars:""},
                    {courseName:'Data Engineering Certification Courses (Masters Program)',bgGradient:"bg-pink",img:<FaDocker className="text-pink-400 bg-white rounded-full p-2"/>,number:"",stars:""},
                    {courseName:'Cyber Security Masters Program',bgGradient:"bg-pink",img:'',number:"",stars:""},
                    {courseName:'Business Analyst Masters Course',bgGradient:"bg-[linear-gradient(240deg,#bdd377,#09adef)]",img:<GiOpenBook className="text-white"/>,number:"",stars:""},
                    {courseName:'Microsoft Azure Cloud Master Training',bgGradient:"bg-[linear-gradient(240deg, #426a9f, #4edbec)]",img:<PiCertificateDuotone className="text-white"/>,number:"",stars:""},
                    {courseName:'Salesforce Architect Masters Course',bgGradient:"bg-pink",img:<GiOpenBook className="text-white"/>,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
                    // {courseName:,bgGradient:,img:,number:"",stars:""},
    ]
    return (
        <div>
            <section>
                <button>Browse All Courses</button>
                <p>Expore our wide range of courses</p>
            </section>
            <section>
                <h1>Career Related Programs</h1>
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
        </div>
    );
}

export default CareerRelatedPrograms;