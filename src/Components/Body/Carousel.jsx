import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Carousel() {
    const slides =["https://d24vv731hdkcnd.cloudfront.net/carousel-banner/1706687183-Web-banner_1920x410.jpg","https://d24vv731hdkcnd.cloudfront.net/carousel-banner/1694011067-Current-Home-Page-Banner_1920x410.jpg"]
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className="relative mt-[0.5rem]">    
             <img className="min-h-[480px] transition-transform ease-out duration-500 object-cover " src={slides[current]} alt="" />
           <section className="absolute top-[50%] flex justify-between w-full px-[1rem]">
            <button onClick={prevSlide}><SlArrowLeft className="slider"/></button>
            <button onClick={nextSlide}><SlArrowRight className="slider"/></button>
           </section>
           <p className="absolute bottom-[5rem] text-sm gap-[1rem] w-full flex justify-center text-[#dddada] opacity-[0.9]"> <GoDotFill className={`${current===0? 'text-white':''}`} onClick={prevSlide}/><GoDotFill className={`${current===1? 'text-white':''}`} onClick={nextSlide}/></p>
        </div>
    );
}

export default Carousel;






















// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// function Carousel() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       };
//     return (
//         <Slider {...settings}>
//                 <img src="https://d24vv731hdkcnd.cloudfront.net/carousel-banner/1706687183-Web-banner_1920x410.jpg" alt="" />

//                 <img src="https://d24vv731hdkcnd.cloudfront.net/carousel-banner/1694011067-Current-Home-Page-Banner_1920x410.jpg" alt="" />
//         </Slider>
//     );
// }

// export default Carousel;