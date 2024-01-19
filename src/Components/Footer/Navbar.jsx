import { TfiMenu } from "react-icons/tfi";
import { BiSearch, BiSolidPhone } from "react-icons/bi";
import { useState } from "react";
import BeforeNav from "./BeforeNav";

function Navbar() {
    const [click, setClick] = useState(false);
    const [closeClicked, setCloseClicked] = useState(false);
    const [viewOfferClicked, setViewOfferClicked] = useState(false);

    const handleClick = () => {
        setClick(!click);
        setCloseClicked(false);
        setViewOfferClicked(true);
    };

    const handleCloseClicked = () => {
        setCloseClicked(true);
        setViewOfferClicked(false);
    };

    return (
        <div>
            {click || viewOfferClicked ? null : <BeforeNav onCloseClicked={handleCloseClicked} />}
            <div className="bg-red-200 px-[1rem]">
                <section className="flex justify-between items-center">
                    <section className="inline-flex items-center">
                        <TfiMenu />
                        <img
                            className="w-[6rem]"
                            src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1702561279/img/Edureka_V_W_logo.webp"
                            alt="edurekaIcon"
                        />
                    </section>
                    <section className="inline-flex items-center gap-1">
                        <BiSolidPhone className="text-white" /> {closeClicked && !viewOfferClicked && <button onClick={handleClick}>View Offer</button>}
                    </section>
                </section>
                <section className="flex items-center justify-center">
                    <input
                        className="w-[20rem] px-[0.9rem] py-[0.2rem]"
                        type="search"
                        name=""
                        placeholder="Enter Course, Category or keyword"
                        id=""
                    />
                    <BiSearch />
                </section>
            </div>
        </div>
    );
}

export default Navbar;
