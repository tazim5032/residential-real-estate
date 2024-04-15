import CustomerReviews from "../Components/CustomerReviews";
import FAQ from "../Components/FAQ";
import Slider from "../Components/Slider";
import TopProperties from "../Components/TopProperties";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopProperties></TopProperties>
            <CustomerReviews></CustomerReviews>
            <FAQ></FAQ>
            
        </div>
    );
};

export default Home;