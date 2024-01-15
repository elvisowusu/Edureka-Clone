import { TfiMenu } from "react-icons/tfi";

function Navbar() {
    return (
        <div className="bg-red-200">
            <section className="flex justify-between items-center" >
            <section className="inline-flex items-center">
            <TfiMenu/>
            <img className="w-[6rem]" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1702561279/img/Edureka_V_W_logo.webp" alt="edurekaIcon"/>
            </section>
            <button>View Offer</button>
            </section>
        </div>
    );
}

export default Navbar;