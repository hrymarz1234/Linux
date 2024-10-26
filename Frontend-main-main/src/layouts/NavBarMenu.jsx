import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarMenu = ({items}) => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#">Front</Navbar.Brand>
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
