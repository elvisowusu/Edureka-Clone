import Carousel from "./Carousel";
function Body() {
    const slides =["https://d24vv731hdkcnd.cloudfront.net/carousel-banner/1706687183-Web-banner_1920x410.jpg","https://d24vv731hdkcnd.cloudfront.net/carousel-banner/1694011067-Current-Home-Page-Banner_1920x410.jpg"]

    return (
        <section className="relative">
           <section className="max-w-lg">
               <Carousel>
                     {slides.map((slide, index) => (
                            <img key={index} src={slide} alt="" />
                     ))}
                </Carousel>
           </section>
           <section>
             <h1 className="">Trending Courses</h1>
             <section className="flex justify-between px-[1rem]">
                <h1 className="">All</h1>
                <button>Menu</button>
             </section>
           </section>
        </section>
    );
}

export default Body;