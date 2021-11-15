import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
import GridCards from "../../components/gridcards/GridCards";
import Footer from "../../components/footer/Footer";

function Home(props) {
  return (
    <div className="Home">
        <Header/>
        <Slideshow/>
        <GridCards/>
        <Footer/>
    </div>
  );
}

export default Home;
