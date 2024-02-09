import Carousel from "./Carousel";
import Courses from "./Courses";
import TrendingCourses from "./TrendingCourses";
function Body() {
    return (
        <section className="relative bg-[#F9F9F9]">
               <Carousel/>
               <Courses/>
               <TrendingCourses/>
        </section>
    );
}

export default Body;