import { IoIosArrowForward } from "react-icons/io";

function CategoriesItems() {
    const categories = ['Cloud Computing','DevOps','Cyber Security','BI and Visualization','Programming & Frameworks','Data Science','Project Management and Methodologies','PG Programs','Artificial Intelligence','Big Data','Software Testing','Frontend Development','Databases','Robotic Process Automation','Data Warehousing and ETL','Mobile Development','Operating Systems','Architecture & Design Patterns','Blockchain','Digital Marketing']
    return (
        <div>
            {categories.map((category, index) => (
                <button key={index} className="py-[14px] block">{category} <IoIosArrowForward/> </button>
            ))}
        </div>
    );
}

export default CategoriesItems;