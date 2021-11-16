import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
import UserNav from './UserNav';

function Header(props) {

  return (
    <div className="Navbar mb-3">
      <Navbar className="navbar-bg-color" variant="light" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to="/">
          <img src="/pawsitivelyPawshLogo.png" width="400"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={props.location.pathname} className="ml-auto">
            <UserNav
              isAuthenticated={props.isAuthenticated}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);
//className="justify-content-center flex-column"