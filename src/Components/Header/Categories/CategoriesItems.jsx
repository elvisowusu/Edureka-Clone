import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CategoriesItems({CategoriesFunction, CategoriesState}) {
    const categories = ['Cloud Computing','DevOps','Cyber Security','BI and Visualization','Programming & Frameworks','Data Science','Project Management and Methodologies','PG Programs','Artificial Intelligence','Big Data','Software Testing','Frontend Development','Databases','Robotic Process Automation','Data Warehousing and ETL','Mobile Development','Operating Systems','Architecture & Design Patterns','Blockchain','Digital Marketing']
    useEffect(() => {
        Aos.init({duration: 400});
    }, [])
    return (
        <div data-aos={`${CategoriesState?'fade-left':'fade-right'}`} className="overflow-scroll">
            <button onClick={CategoriesFunction} className="flex py-[14px] w-full items-center "><IoIosArrowBack size={21}/>Categories</button>
            {categories.map((category, index) =>(
                <button key={index} className="w-full py-[14px] flex justify-between items-center"><span className="text-left">{category}</span> <IoIosArrowForward size={21}/> </button>
            ))}
        </div>
    );
}

export default CategoriesItems;