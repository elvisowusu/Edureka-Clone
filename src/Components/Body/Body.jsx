import Blog from "./Blog";
import CareerRelatedPrograms from "./CareerRelatedPrograms";
import Carousel from "./Carousel";
import Courses from "./Courses";
import DiscoverTopCategories from "./DiscoverTopCategories";
import EdurekaEdge from "./EdurekaEdge";
import RecentAdditions from "./RecentAdditions";
import Reviews from "./Reviews";
import TrendingCourses from "./TrendingCourses";
import TrendingCoursesSlider from "./TrendingCoursesSlider";
import ViewAllCourses from "./ViewAllCourses";
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
               <ViewAllCourses/>
               <Blog/>
               <EdurekaEdge/>
        </section>
    );
}

export default Body;