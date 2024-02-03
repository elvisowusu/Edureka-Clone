import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Carousel from "./Carousel";
function Body() {
    const slides =["https://d24vv731hdkcnd.cloudfront.net/carousel-banner/1706687183-Web-banner_1920x410.jpg","https://d24vv731hdkcnd.cloudfront.net/carousel-banner/1694011067-Current-Home-Page-Banner_1920x410.jpg"]

    return (
        <div>
           {/* <section className="bg-[url(src/assets/cambridge.jpg)] bg-inherit h-[20rem] w-full flex justify-between items-center px-[1rem]">
            <SlArrowLeft className="slider"/>
            <SlArrowRight className="slider"/>
           </section>  */}
           <section className="max-w-lg">
                <Carousel>
                    {slides.map((items)=>{
                        <img src={items} alt="" />
                    })}
                </Carousel>
           </section>
        </div>
    );
}

export default Body;