import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
 


  return (
    <Navbar bg="light" expand="lg" className='sticky-top'>
      <Container fluid>
        <div className='m-2'>
        <img style={{width:'30px',height:'30px'}}
      src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-letter-n-design_460848-13903.jpg?w=826&t=st=1676288921~exp=1676289521~hmac=4a66548b26ac8385a61ae8b527fa0bd438a24a583c5f6e940c82b614d10914f9'
        alt="front.png" >
            
         </img>
        </div>
     
     
        <Navbar.Brand href="/" >News Dare
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">India</Nav.Link>
            
            <Nav.Link href="/Wallstreet" >
              Wall Street 
            </Nav.Link>
            <Nav.Link href="/tesla ">Tesla</Nav.Link>
            <Nav.Link href="/apple ">Apple</Nav.Link>

            <Nav.Link href="/bitcoin">Bitcoin</Nav.Link>
            <NavDropdown title="Country" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/usa">USA</NavDropdown.Item>
              <NavDropdown.Item href="#/">Russia</NavDropdown.Item>
              <NavDropdown.Item href="#/">UK</NavDropdown.Item>

              
              <NavDropdown.Item href="#action4">
               China
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
              India
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
           <Button href='/search'><i class="fa-solid fa-magnifying-glass"></i></Button>
             
          
            
            

         
    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;