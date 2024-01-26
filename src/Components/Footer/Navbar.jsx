import { IoMenuOutline } from "react-icons/io5";
import { BiSearch, BiSolidPhone } from "react-icons/bi";

function Navbar({ clickClose, handleClickClose }) {
    return (
        <div>
            <div className="bg-red-200 px-[1rem] pt-[1rem] pb-[0.5rem]">
                <section className="flex justify-between pb-[0.2rem]">
                    <section className="flex items-center">
                        <IoMenuOutline className="w-[1.5rem] h-[1.5rem] mb-2 text-white"/>
                        <img
                            className="w-[7rem]"
                            src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1702561279/img/Edureka_V_W_logo.webp"
                            alt="edurekaIcon"
                        />
                    </section>

                    <section className="inline-flex items-center gap-2 pb-2">
                        <BiSolidPhone className="text-white h-[1.1rem] w-[1.1rem]" />
                        {!clickClose && <button className="bg-white rounded-sm px-[0.87rem] py-[0.1rem] text-blue-600 text-[0.98rem] font-medium" onClick={handleClickClose}>View Offer</button>}
                    </section>
                </section>

                <section className="flex items-center justify-center h-[2rem] w-full">
                    <input
                        className="w-full h-[100%] px-[0.9rem] py-[0.2rem] rounded-l-sm border focus:border-black outline-none"
                        type="search"
                        name=""
                        placeholder="Enter Course, Category or keyword"
                        id=""
                    />
                    <button className="bg-red-300 h-[100%] px-[0.7rem] rounded-r-sm"><BiSearch className="h-[1.2rem] w-[1.2rem]"/></button>
                </section>
            </div>
        </div>
    );
}

export default Navbar;
