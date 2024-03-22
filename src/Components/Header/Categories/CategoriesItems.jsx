import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CategoriesItems({CategoriesFunction}) {
    const categories = ['Cloud Computing','DevOps','Cyber Security','BI and Visualization','Programming & Frameworks','Data Science','Project Management and Methodologies','PG Programs','Artificial Intelligence','Big Data','Software Testing','Frontend Development','Databases','Robotic Process Automation','Data Warehousing and ETL','Mobile Development','Operating Systems','Architecture & Design Patterns','Blockchain','Digital Marketing']
    return (
        <div className="overflow-scroll">
            <button onClick={CategoriesFunction} className="flex py-[14px] w-full items-center "><IoIosArrowBack size={21}/>Categories</button>
            {categories.map((category, index) =>(
                <button key={index} className="w-full py-[14px] flex justify-between items-center"><span className="text-left">{category}</span> <IoIosArrowForward size={21}/> </button>
            ))}
        </div>
    );
}

export default CategoriesItems;