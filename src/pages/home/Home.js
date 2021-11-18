import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
import GridCards from "../../components/gridcards/GridCards";
import AboutUs from "../../components/aboutusinfo/AboutUsInfo"
import Footer from "../../components/footer/Footer";
import { isAuthenticated } from "../../utils/authHelper";

function Home(props) {
  return (
    <div className="Home">
        <Header isAuthenticated={isAuthenticated()}/>
        <Slideshow/>
        <br></br>
        <div class="separator"> Welcome to Pawsitively Pawsh! </div>
        <br></br>
        <AboutUs/>
        <br></br>
        <div class="separator"> Customer Testimonials </div>
        <br></br>
        <GridCards/>
        <Footer/>
    </div>
  );
}

export default Home;
