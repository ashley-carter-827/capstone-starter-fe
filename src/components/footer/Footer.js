import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';

function Footer(props) {

  return (
    <div className="Navbar mb-3">
      <Navbar className="navbar-bg-color" variant="light" expand="lg" fixed="bottom">
        <Navbar.Brand><b>Contact Us</b>
          <br/>Phone:1-800-PAW-POSH
          <br/>Email: PawsitivelyPawsh@gmail.com
          <br/>Address: 123 Paws Lane Wagging Tails, CA
          <br/>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={props.location.pathname} className="ml-auto">
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar className="justify-content-center flex-column">
        <Navbar.Brand>
          <img src="https://www.clipartmax.com/png/small/21-217566_delivery-van-clipart-png-amp-delivery-van-clip-art-delivery-truck-clipart.png"/>
        </Navbar.Brand>
      </Navbar> */}
      <Navbar className="justify-content-end" variant="light" expand="lg" fixed="bottom">
        <Navbar.Brand>
          <b>Hours</b>
          <br/>Monday - Friday: 9:00am - 5:30pm
          <br/>Saturday: 9:00am - 2:00pm
          <br/>Sunday: Closed
          <br/>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default withRouter(Footer);