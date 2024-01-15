import AfterNav from "./AfterNav";
import BeforeNav from "./BeforeNav";
import Navbar from "./Navbar";

function Footer() {
    return (
        <div>
           <BeforeNav/>
           <Navbar/>
           <AfterNav/> 
        </div>
    );
}

export default Footer;