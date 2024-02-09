import Carousel from "./Carousel";
function Body() {
    
    const n =0;
    return (
        <section className="relative">
           <section className="">
               <Carousel/>
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