
import {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nav, navBar, navLink, navbTN} from "../../assets/style";
import Link from '@mui/joy/Link';
import Button from 'react-bootstrap/Button';
import "../../App.css";
import ModalComponent from './Modal';

export function NavbarComponent() { 

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
      setShowModal(false);
  }

  return (
      <div>
        <div>
          <Navbar variant="light" fixed="top" sticky="top" expand="lg" style= {navBar} id = "navTabCont">

            <Container style= {navBar}>
              <Navbar.Brand href="#home" 
                style= {{marginLeft: "-5em", color: 'white'}} 
              >
                {/* <img src={logoWhite} alt="OAK Orijentiring" style= {navLink}></img> */}
                <Link color="neutral" underline="hover" href="/" style= {navLink}><b>NS OAK</b></Link> 
              </Navbar.Brand>

              <Nav className="me-auto" style={nav}>
                <Nav.Link color="neutral"  href="/" style= {navLink}><b>Sve vesti</b></Nav.Link> 
                {/* underline="hover" */}
                <Nav.Link  color="neutral" href="/aboutUs" style= {navLink}><b>O nama</b></Nav.Link > 
                <Nav.Link  color="neutral" href="#events" style= {navLink}><b>Dogadjaji</b></Nav.Link > 
                <Nav.Link  color="neutral" href="#orientiring" style= {navLink}><b>O orijentiringu</b></Nav.Link > 
                <Button variant="outline-light" className='btn' style= {navbTN} onClick={() => openModal()}><b>Kontakt</b></Button> 
                {/* DA NA hover menja u zeleno */}
                
              </Nav>

            </Container>
          </Navbar>
        </div>
        <div>
          <ModalComponent
            showModal ={showModal}
            openModal = {openModal}
            closeModal = {closeModal}
            />
        </div>
      </div>
   
  );
}

export default NavbarComponent;

