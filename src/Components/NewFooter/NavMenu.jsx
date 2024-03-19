import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function NavMenu({NavMunuFunction}) {
    const List=['Categories','Corporate Training','Courses']
    return (
        <div className="fixed top-0 z-50 w-[83%]">
            <section onClick={NavMunuFunction} className="fixed w-full -z-10 h-full opacity-65 bg-[rgba(0,0,0,0.5)]"></section>
            <button onClick={NavMunuFunction}  className="flex items-center w-full justify-between bg-[#f4f4f4] text-[#4a4a4a] font-semibold text-[15px] px-[30px] pt-[20px] pb-[19px] border-b-[#d7d7d7] border-b-2">Browse Categories <IoIosCloseCircleOutline size={23} className="text-[#4a4a4a]"/></button>
            <section className="px-[30px] text-[#4a4a4a] bg-white">
                {List.map((list,key)=>{
                return <ul key={key}>
                <li className="flex justify-between items-center">{list}<IoIosArrowForward className={` ${key != 0? 'hidden':''}`}/> </li>
                </ul>})}
            </section>
        </div>
    );
}

export default NavMenu;