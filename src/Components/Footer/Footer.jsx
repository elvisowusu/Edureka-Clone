import AfterNav from "./AfterNav";
import BeforeNav from "./BeforeNav";
import Navbar from "./Navbar";
import { useState } from "react";

function Footer() {
    // State to manage the close/open state of BeforeNav
    const [clickClose, setClickClose] = useState(false);
    // State to manage the visibility of the offer
    const [viewOffer, setViewOffer] = useState(true);

    // Function to handle click and close BeforeNav
    const handleClickClose = () => {
        setClickClose(!clickClose);
        setViewOffer(!viewOffer); // Toggle visibility of the offer
    };

    // Function to handle click and toggle the visibility of the offer
    const handleViewOffer = () => {
        setViewOffer(!viewOffer); // Toggle visibility of the offer
        setClickClose(!clickClose);
    };

    return (
        <div>
            {/* Render BeforeNav only if viewOffer is true */}
            {viewOffer && <BeforeNav clickClose={clickClose} handleClickClose={handleClickClose} />}

            {/* Render Navbar with necessary props */}
            <Navbar clickClose={clickClose} handleClickClose={handleClickClose} viewOffer={viewOffer} handleViewOffer={handleViewOffer} />

            {/* Render AfterNav */}
            <AfterNav /> 
        </div>
    );
}

export default Footer;
