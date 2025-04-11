import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function ResponsiveNavbar() {
  return (
    <Navbar expand="lg" className="fixed-top" data-bs-theme="dark">
      <Container fluid>
        {/* Logo on the Extreme Left */}
        <Navbar.Brand className="ps-0 mx-0">
          <img src="/images/cci-logo.svg" alt="Logo" />
        </Navbar.Brand>

        {/* Navbar Toggler for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="custom-navbar-collapse">
          <Nav className="mx-auto nav-links">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/campuses">
              CAMPUSES
            </Nav.Link>
            <Nav.Link as={Link} to="/ministries">
              MINISTRIES
            </Nav.Link>
            <Nav.Link as={Link} to="/sermons">
              SERMONS
            </Nav.Link>
            <Nav.Link as={Link} to="/give">
              GIVE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
