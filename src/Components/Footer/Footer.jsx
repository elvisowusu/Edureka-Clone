import AfterNav from "./AfterNav";
import BeforeNav from "./BeforeNav";
import Navbar from "./Navbar";
import { useState } from "react";

function Footer() {
    const [clickClose, setClickClose] = useState(false);
    const [viewOffer, setViewOffer] =useState(true)
    const handleClickClose = () => {
        setClickClose(!clickClose);
        setViewOffer(!viewOffer)
    };
    const handleViewOffer =()=>{
        setViewOffer(!viewOffer)
        setClickClose(!clickClose)
    }

    return (
        <div>
           {viewOffer && <BeforeNav clickClose={clickClose} handleClickClose={handleClickClose}/>}
           <Navbar clickClose={clickClose} handleClickClose={handleClickClose} viewOffer={viewOffer} handleViewOffer={handleViewOffer}/>
           <AfterNav/> 
        </div>
    );
}

export default Footer;