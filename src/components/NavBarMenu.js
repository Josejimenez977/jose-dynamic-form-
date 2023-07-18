import { Container, Navbar } from "react-bootstrap";

export default function NavBarMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#!">
            José - Dynamic <b>Form</b>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as:{" "}
              <a
                href="https://github.com/Josejimenez977?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                josé Jimenez Yancy
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
