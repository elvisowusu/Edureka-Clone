import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import CategoriesItems from "./Categories/CategoriesItems";
function NavMenu({NavMunuFunction}) {
    const [categories,SetCategories]=useState(false)
    const categoriesItemsFunction=()=>{
        SetCategories(!categories)
    }
    return (
        <div className="fixed top-0 z-50 w-[83%]">
            <section onClick={NavMunuFunction} className="fixed w-full -z-10 h-full opacity-65 bg-[rgba(0,0,0,0.5)]"></section>
            <button onClick={NavMunuFunction}  className="flex items-center w-full justify-between bg-[#f4f4f4] text-[#4a4a4a] font-semibold text-[15px] px-[30px] pt-[20px] pb-[19px] border-b-[#d7d7d7] border-b-2">Browse Categories <IoIosCloseCircleOutline size={23} className="text-[#4a4a4a]"/></button>
            <section className="px-[30px] text-[#4a4a4a] bg-white h-[60rem] overflow-scroll">
                
                {categories?
                    <CategoriesItems CategoriesState={categories} CategoriesFunction={categoriesItemsFunction}/>
                    :
                <>
                    <button onClick={categoriesItemsFunction} className="flex py-[14px] w-full justify-between items-center">Categories<IoIosArrowForward size={21}/> </button>
                    <button className="py-[14px] block">Corporate Training </button>
                    <button className="py-[14px] ">Courses </button>
                    <button className="items-center w-full py-[12px] text-[#404040] font-bold text-[14px] border border-[#e9963e] my-[15px]">Log In</button>
                    <button className="items-center w-full py-[12px] text-white font-bold text-[14px] bg-[#e9963e] mb-[15px]">Sign Up</button>
                </>
                }
            </section>
        </div>
    );
}

export default NavMenu;