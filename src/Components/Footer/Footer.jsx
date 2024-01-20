import AfterNav from "./AfterNav";
import BeforeNav from "./BeforeNav";
import Navbar from "./Navbar";
import { useState } from "react";


function Footer() {

    const [clickClose, setClickClose] = useState(true);

    const handleClickClose = () => {
        setClickClose(!clickClose); 
    };


    return (
        <div>
            {clickClose && <BeforeNav clickClose={clickClose} handleClickClose={handleClickClose} />}
            <Navbar clickClose={clickClose} handleClickClose={handleClickClose} />
            <AfterNav /> 
        </div>
    );
}

export default Footer;
