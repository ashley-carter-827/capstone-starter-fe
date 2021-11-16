import Header from "../../components/header/Header";
import ServicesGridCards from "../../components/servicesGridcards/ServicesGridCards";
import Footer from "../../components/footer/Footer";

function Services(props) {
  return (
    <div className="Services">
        <Header/>
        <ServicesGridCards/>
        <Footer/>
    </div>
  );
}

export default Services;
