import Carousel from "./Carousel";
function Body() {
    const slides =["https://d24vv731hdkcnd.cloudfront.net/carousel-banner/1706687183-Web-banner_1920x410.jpg","https://d24vv731hdkcnd.cloudfront.net/carousel-banner/1694011067-Current-Home-Page-Banner_1920x410.jpg"]

    return (
        <div>
           <section className="max-w-lg">
               <Carousel>
                     {slides.map((slide, index) => (
                            <img key={index} src={slide} alt="" />
                     ))}
                </Carousel>
           </section>
        </div>
    );
}

export default Body;