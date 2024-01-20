import { TfiMenu } from "react-icons/tfi";
import { BiSearch, BiSolidPhone } from "react-icons/bi";

function Navbar({ clickClose, handleClickClose }) {
    return (
        <div>
            {/* Navbar container with red background */}
            <div className="bg-red-200 px-[1rem]">
                {/* Top section with logo and phone icon */}
                <section className="flex justify-between items-center">
                    {/* Logo and TfiMenu icon */}
                    <section className="inline-flex items-center">
                        <TfiMenu />
                        <img
                            className="w-[6rem]"
                            src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1702561279/img/Edureka_V_W_logo.webp"
                            alt="edurekaIcon"
                        />
                    </section>

                    {/* Phone icon and View Offer button */}
                    <section className="inline-flex items-center gap-1">
                        <BiSolidPhone className="text-white" />
                        {/* Render View Offer button only if clickClose is true */}
                        {!clickClose && <button onClick={handleClickClose}>View Offer</button>}
                    </section>
                </section>

                {/* Bottom section with search input and search icon */}
                <section className="flex items-center justify-center">
                    {/* Search input */}
                    <input
                        className="w-[20rem] px-[0.9rem] py-[0.2rem]"
                        type="search"
                        name=""
                        placeholder="Enter Course, Category or keyword"
                        id=""
                    />
                    {/* Search icon */}
                    <BiSearch />
                </section>
            </div>
        </div>
    );
}

export default Navbar;
