import { useState } from 'react';
import { GiOpenBook } from "react-icons/gi";
import { PiCertificateDuotone } from "react-icons/pi";
import { GiBrain } from "react-icons/gi";
import { FaDocker } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
function CareerRelatedPrograms() {
    const content =[{courseName:'DevOps Engineer Masters Program',bgGradient:"bg-pink",img:<GiOpenBook className="text-white"/>,number:"",stars:""},
                    {courseName:'Data Engineering Certification Courses (Masters Program)',bgGradient:"bg-pink",img:<FaDocker className="text-pink-400 bg-white rounded-full p-2"/>,number:"",stars:""},
                    {courseName:'Cyber Security Masters Program',bgGradient:"bg-pink",img:'',number:"",stars:""},
                    {courseName:'Business Analyst Masters Course',bgGradient:"bg-[linear-gradient(240deg,#bdd377,#09adef)]",img:<GiOpenBook className="text-white"/>,number:"",stars:""},
                    {courseName:'Microsoft Azure Cloud Master Training',bgGradient:"bg-[linear-gradient(240deg,#426a9f,#4edbec)]",img:<PiCertificateDuotone className="text-blue-400 bg-white rounded-md p-2"/>,number:"",stars:""},
                    {courseName:'Salesforce Architect Masters Course',bgGradient:"bg-pink",img:<GiOpenBook className="text-white"/>,number:"",stars:""},
                    {courseName:'Generative AI Course: Masters Program',bgGradient:"bg-pink",img:'',number:"",stars:""},
                    {courseName:'Automation Testing Engineer Course For Master',bgGradient:"bg-pink",img:<PiCertificateDuotone className="text-pink-400 bg-white rounded-md p-2"/>,number:"",stars:""},
                    {courseName:'AI and Machine Learning Masters Course',bgGradient:"bg-pink",img:<GiBrain className='text-white'/>,number:"",stars:""},
                    {courseName:'Full Stack Web Developer Masters Program Course',bgGradient:"bg-[linear-gradient(240deg,#e0ec51,#2eb18d)]",img:<PiCertificateDuotone className='text-green-400 bg-white rounded-md p-2'/>,number:"",stars:""},
                    {courseName:'Data Science Traning Masters Program',bgGradient:"bg-pink",img:<PiCertificateDuotone className='text-pink-400 bg-white rounded-md p-2'/>,number:"",stars:""},
                    {courseName:'Project Management Masters Program',bgGradient:"bg-[linear-gradient(240deg,#80d0c7,#166a9b)]",img:<GiOpenBook className='text-white'/>,number:"",stars:""},
                    {courseName:'Python Developer Masters Program',bgGradient:"bg-pink",img:<PiCertificateDuotone className='text-pink-400 bg-white rounded-md p-2'/>,number:"",stars:""},
                    {courseName:'Big Data Architect Masters Program',bgGradient:"bg-[linear-gradient(240deg,#70bc55,#ea6f6f)]",img:<PiCertificateDuotone className='text-green-400 bg-white rounded-md p-2'/>,number:"",stars:""},
                    {courseName:'AWS Masters Certification Program',bgGradient:"bg-pink",img:<GiOpenBook className='text-white'/>,number:"",stars:""},
                    {courseName:'Cloud Architect Course-Masters Program',bgGradient:"bg-[linear-gradient(240deg,#ff6364,#ff88bc)]",img:<PiCertificateDuotone className='text-red-400 bg-white rounded-md p-2'/>,number:"",stars:""},
                    {courseName:'Data Analytics Masters Program',bgGradient:"bg-pink",img:<PiCertificateDuotone className='text-pink-400 bg-white rounded-md p-2'/>,number:"",stars:""},
                    {courseName:'Business Intelligence Masters Program',bgGradient:"bg-[linear-gradient(240deg,#426a9f,#4edbec)]",img:<PiCertificateDuotone className='text-blue-400 bg-white rounded-md p-2'/>,number:"",stars:""},
                    {courseName:'RPA Master Certification Course',bgGradient:"bg-[linear-gradient(240deg,#d66868,#e1a940)]",img:<PiCertificateDuotone className='text-orange-600 bg-white rounded-md p-2'/>,number:"",stars:""},
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