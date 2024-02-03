
function Carousel({children: slides}) {
    return (
        <div>
           <div className="flex overflow-hidden">{slides}</div> 
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