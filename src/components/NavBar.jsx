import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ResponsiveNavbar() {
  return (
    <Navbar
      expand="lg"
      className="fixed-top"
      style={{ padding: "0 20px" }}
      data-bs-theme="dark">
      <Container fluid>
        {/* Logo on the Extreme Left */}
        <Navbar.Brand href="#home" className="ps-0 mx-0">
          <img src="/images/cci-logo.svg" alt="Logo" />
        </Navbar.Brand>

        {/* Navbar Toggler for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="custom-navbar-collapse">
          <Nav className="mx-auto nav-links">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">CAMPUSES</Nav.Link>
            <Nav.Link href="#pricing">MINISTRIES</Nav.Link>
            <Nav.Link href="#pricing">SERMONS</Nav.Link>
            <Nav.Link href="#pricing">GIVE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
