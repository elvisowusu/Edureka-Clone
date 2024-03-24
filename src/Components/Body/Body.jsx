import CareerRelatedPrograms from "./CareerRelatedPrograms";
import Carousel from "./Carousel";
import Courses from "./Courses";
import DiscoverTopCategories from "./DiscoverTopCategories";
import RecentAdditions from "./RecentAdditions";
import Reviews from "./Reviews";
import TrendingCourses from "./TrendingCourses";
import TrendingCoursesSlider from "./TrendingCoursesSlider";
function Body() {
    return (
        <section className="relative bg-[#F9F9F9]">
               <Carousel/>
               <Courses/>
               <TrendingCourses/>
               <TrendingCoursesSlider/>
               <CareerRelatedPrograms/>
               <RecentAdditions/>
               <DiscoverTopCategories/>
               <Reviews/>
        </section>
    );
}

export default Body;