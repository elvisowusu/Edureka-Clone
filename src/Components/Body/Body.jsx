import Carousel from "./Carousel";
import Courses from "./Courses";
import TrendingCourses from "./TrendingCourses";
import TrendingCoursesSlider from "./TrendingCoursesSlider";
function Body() {
    return (
        <section className="relative bg-[#F9F9F9]">
               <Carousel/>
               <Courses/>
               <TrendingCourses/>
               <TrendingCoursesSlider/>
        </section>
    );
}

export default Body;