import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Carousel({children: slides}) {

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
           <div className="flex overflow-hidden min-h-[480px]">{slides}</div> 
           <section className="absolute top-[50%] flex justify-between w-full px-[1rem]">
            <button><SlArrowLeft className="slider"/></button>
            <button><SlArrowRight className="slider"/></button>
           </section>
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