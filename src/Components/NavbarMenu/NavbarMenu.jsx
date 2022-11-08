import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useRef } from "react";
import "./NavbarMenu.scss";

const NavbarMenu = (props) => {
  const { lang, onChangeLanguage } = props;
  const navRef = useRef(null);

  const navbarShrink = () => {
    if (window.scrollY === 0) {
      navRef.current.classList.remove("navbar-shrink");
    } else {
      navRef.current.classList.add("navbar-shrink");
    }
  };

  useEffect(() => {
    // If scroll shrink navbar
    document.addEventListener("scroll", navbarShrink);
  }, []);

  return (
    <Navbar collapseOnSelect expand='lg' fixed='top' variant='dark' id='mainNav' ref={navRef}>
      <Container>
        <Navbar.Brand href='#page-top'>
          <img loading='lazy' src={"/img/logo.png"} alt='...' />
        </Navbar.Brand>
        <Navbar.Toggle className='navbar-toggler' aria-controls='navbarResponsive'>
          Menu
          <i className='fas fa-bars ms-1'></i>
        </Navbar.Toggle>
        <Navbar.Collapse id='navbarResponsive'>
          <Nav className='text-uppercase ms-auto py-4 py-lg-0'>
            <Nav.Item>
              <Nav.Link href='#services'>ΠΡΟΪΟΝΤΑ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#portfolio'>ΕΡΓΑ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#about'>ΕΤΑΙΡΕΙΑ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#contact'>ΕΠΙΚΟΙΝΩΝΙΑ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <button
                  className='border-0 bg-transparent'
                  onClick={() => {
                    onChangeLanguage(lang === "gr" ? "en" : "gr");
                  }}
                >
                  <img src={"/img/" + (lang === "gr" ? "gr.png" : "uk.png")} alt='...' />
                </button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
