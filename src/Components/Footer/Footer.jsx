import AfterNav from "./AfterNav";
import BeforeNav from "./BeforeNav";
import Navbar from "./Navbar";
import { useState } from "react";


function Footer() {
    // State to manage the close/open state of BeforeNav
    const [clickClose, setClickClose] = useState(true);

    // Function to handle click and close BeforeNav
    const handleClickClose = () => {
        setClickClose(!clickClose); // Toggle visibility of the offer
    };


    return (
        <div>
            {/* Render BeforeNav only if viewOffer is true */}
            {clickClose && <BeforeNav clickClose={clickClose} handleClickClose={handleClickClose} />}

            {/* Render Navbar with necessary props */}
            <Navbar clickClose={clickClose} handleClickClose={handleClickClose} />

            {/* Render AfterNav */}
            <AfterNav /> 
        </div>
    );
}

export default Footer;
