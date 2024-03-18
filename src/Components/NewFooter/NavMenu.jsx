import { IoIosCloseCircleOutline } from "react-icons/io";

function NavMenu() {
    return (
        <div className="fixed top-0 z-20 w-[20rem]">
            <section className="flex items-center justify-between bg-[#f4f4f4] text-[#4a4a4a] font-semibold text-[15px] px-[30px] pt-[20px] pb-[19px] border-b-[#d7d7d7] border-b-2">Browse Categories <IoIosCloseCircleOutline size={23} className="text-[#4a4a4a]"/></section>
        </div>
    );
}

export default NavMenu;