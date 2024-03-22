import{ useState } from 'react';
import { FaStar } from "react-icons/fa6";



function RecentAdditions() {
    const content =[{courseName:'Advanced Certificate Program in Data Science',bgGradient:"bg-[linear-gradient(240deg,#426a9f,#4edbec)]",img:'',number:"",stars:""},
                    {courseName:'Artificial Intelligence Certification Courses',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'Advanced Certificate Program in cloud Computing',bgGradient:"bg-pink",img:'',number:"",stars:""},
                    {courseName:'Microsoft SQL Course',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'UI UX Design Certification Course',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'CISSP Certification Training Course',bgGradient:"bg-pink",img:"",number:"",stars:""},
                    {courseName:'Flutter Application Development Course',bgGradient:"bg-pink",img:'',number:"",stars:""},
                    {courseName:'Human-Computer Interaction(HCI) for AI Systems Design',bgGradient:"bg-pink",img:"",number:"",stars:""},
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
            <h1 className='px-[0.6rem] my-[1.5rem] text-[#404040] font-semibold'>Recent Additions</h1>
            <section className="px-[1.5rem]">
                {content.map((items,key)=>{
                return <section key={key} className="flex my-[1.3rem]">
                <div className={`${items.bgGradient} text-[50px] h-[100px] w-[93px] min-w-[93px] flex items-center justify-center`}>
                    {items.img}
                </div>
                <div className="px-[10px] py-[11px] flex flex-col justify-between">
                    <h1>{items.courseName}</h1>
                    <div className="flex items-center gap-[0.2rem]">
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
                <span className="font-semibold pt-1 pl-1">{ratings[key]}</span>
                    </div>
                </div>
            </section>
            })}
            </section>
        </div>
    );
}

export default RecentAdditions;