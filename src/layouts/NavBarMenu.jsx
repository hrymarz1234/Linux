import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarMenu = ({items}) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Frameworki frontendowe</Navbar.Brand>
          <Nav className="me-auto">
          {items.map(item => (
            <Nav.Link key={item.id} href={`${item.url}`}>
              {item.label}
            </Nav.Link>
          ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarMenu;
