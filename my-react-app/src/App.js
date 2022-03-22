import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useRef , useState} from "react";
import portrait from './images/portrait.jpg';
import georgia from './images/pianowithgeorgia.png';
import beach from './images/beach.png';
import schubert from './images/schubert.png';
import portfolio from './images/portfolio.png';
import hiking from './images/hiking.png';
import intdirect from './images/intdirect.png';
import mars from './images/mars.png';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import resume from './images/Michael_Brady_Resume.pdf'
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Anchor from 'react-bootstrap/Anchor';
import { Nav } from 'react-bootstrap';
console.log(portrait);

function App() {
  /*FORM VALIDATION AND SEND DATA TO EMAIL*/

  /*initialize form data*/
  const initialFormData = Object.freeze({
    name: "",
    email: "",
    message: ""
  });

  /*store form data in state*/
  const [formData, updateFormData] = React.useState(initialFormData);

  /*update form data*/
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  
  const formRef = useRef(null);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }
    else{
      event.preventDefault()
      const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        )
      }
      alert(`Form Submitted!`);
      const templateId = 'template_64vw5ot';
      const serviceID = "service_2tba71g";
      sendFeedback(serviceID, templateId, { name: formData.name, email: formData.email, message: formData.message})
      console.log(formData);
      formRef.current.reset();
      setValidated(false);
    }
  };

  return (
    <>

    {/*NAV*/}
    <Navbar collapseOnSelect fixed="top" className="mx-2" expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#top" className="navitem text-light">Home</Nav.Link>
          <Nav.Link href="#prjline" className="navitem text-light">Projects</Nav.Link>
          <Nav.Link href="#abtline" className="navitem text-light">About</Nav.Link>
          <Nav.Link href={resume} className="navitem text-light">Resume</Nav.Link>
          <Nav.Link href="#ctline" className="navitem text-light">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

     {/*HOME*/} 
    <div class="home">
    <h1 class="top text-center mt-5 mb-5 display-1 dark text-light">Michael Brady</h1>
    <img src={portrait} className="portrait img-fluid rounded-circle d-flex"/>
    <h1 class="top text-center mt-5 display-2 dark text-light">Front-End Developer</h1>
    </div>
    <hr id="prjline"></hr>
    
     {/*PROJECTS*/}
     <div id="projects">
     <h1 class="proj text-center text-light display-1">Projects</h1>
    <div class="col-md-8 p-0 container-fluid justify-content-center">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={georgia}
          alt="First slide"
        />
        <Carousel.Caption className="p-5 mb-5">
          <div class="caption">
          <Anchor href="http://webtrain.austincc.edu/~mbrady/capstone/seconddraft/index.php"
          className="caritem display-1 text-decoration-none text-light">Piano With Georgia</Anchor>
          </div>
        </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src={mars}
          alt="Second slide"
        />
        <Carousel.Caption className="p-5 mb-5">
          <div class="caption">
          <Anchor href="http://webtrain.austincc.edu/~mbrady/interactiondesign/COMPLETE/14-mars.html"
          className="caritem display-1 text-decoration-none text-light">Mars</Anchor>
          </div>
        </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src={intdirect}
          alt="Second slide"
        />
        <Carousel.Caption className="p-5 mb-5">
          <div class="caption">
          <Anchor href="http://webtrain.austincc.edu/~mbrady/interactiondesign/COMPLETE/directory.html"
          className="caritem display-1 text-decoration-none text-light">Interaction Design Exercises</Anchor>
          </div>
        </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src={hiking}
          alt="Third slide"
        />
        <Carousel.Caption className="p-5 mb-5">
          <div class="caption">
          <Anchor href="http://webtrain.austincc.edu/~mbrady/advwww/finalproject/index.html"
          className="caritem display-1 text-decoration-none text-light">The Austin Hiking Club</Anchor>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={portfolio}
          alt="Third slide"
        />
        <Carousel.Caption className="p-5 mb-5">
          <div class="caption">
          <Anchor href="http://webtrain.austincc.edu/~mbrady/portfoliosite/firstdraft/"
          className="caritem display-1 text-decoration-none text-light">Portfolio First Draft</Anchor>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={beach}
          alt="Second slide"
        />
        <Carousel.Caption className="p-5 mb-5">
          <div class="caption">
          <Anchor href="http://webtrain.austincc.edu/~mbrady/interwww/beach/interhtmlfinal.html"
          className="caritem display-1 text-decoration-none text-light">The Amy Beach Piano Foundation</Anchor>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={schubert}
          alt="Third slide"
        />
        <Carousel.Caption className="p-5 mb-5">
          <div class="caption">
          <Anchor href="http://webtrain.austincc.edu/~mbrady/interwww/schubert/gradedassignment1.html"
          className="caritem display-1 text-decoration-none text-light">Schubert Piano Sonatas</Anchor>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    </div>
    </div>
    <hr id="abtline"></hr>

    {/*ABOUT*/} 
    <div id="about">
    <h1 class="text-center mt-5 mb-5 text-light display-1">About</h1>
    <div class="pc container-lg p-5 rounded ml-5">
    <p className='about'>Originally from Baltimore, MD, I came to Austin to study piano at UT. I graduated with my Bachelor's in Music 
      Performance in Piano in 2019 and went on to obtain my Master's in Piano Performance from Texas State in 2021. 
      I currently teach piano at the Orpheus Academy of Music in Austin, TX.</p>

    <p className='about'>Although I received my degrees in music, I've always been interested in technology. 
      I took several coding courses in high school, worked as an audio/visual technician while at UT, 
      and have edited music videos for student projects at Orpheus. 
      My interest in tech led me to the Web Certification program at ACC, where I hope to gain the skills necessary 
      to pursue front end development as a career.</p>
      </div>
      </div>
      <hr id="ctline"></hr>

    {/*CONTACT*/}
    <div id="contact">
    <h1 class="conthead text-center text-light display-1">Contact</h1>
    <div class="container-fluid contact col-lg-6 p-4 rounded">
    <Form class="col-md-12" noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            name="name"
            type="text"
            placeholder="Name"
            onChange= {handleChange}
            className="input"
          />
          <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Email"
            onChange= {handleChange}
            className="input"
          />
          <Form.Control.Feedback type="invalid">Email is invalid or missing</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              required
              name="message"
              type="text"
              placeholder="Message"
              as="textarea" 
              rows={3} 
              onChange= {handleChange}
              className="input"
              />
             <Form.Control.Feedback type="invalid">Please enter a message</Form.Control.Feedback>
        </Form.Group>
       <Button type="submit" className="submit">Submit</Button>
    </Form>
    </div>
    </div>
    
     
    {/*FOOTER*/}
    
    <div class="footer container-fluid border-top border-5 border-dark mt-5 rounded-circle p-3">
      <div class="container d-flex justify-content-center p-3">
      <Anchor className="text-decoration-none text-dark" href='https://www.linkedin.com/in/michael-brady-91777a21a/'><FaLinkedin class="icon mx-4"/></Anchor>
      <Anchor className="text-decoration-none text-dark" href='mailto:michaelbrady712@gmail.com'><FaEnvelope class="icon mx-4"/></Anchor>
      <Anchor className="text-decoration-none text-dark" href='https://github.com/mbrady712'><FaGithub class="icon mx-4"/></Anchor>
      </div>
      <div class="container d-flex justify-content-center">
      <FaPhoneAlt/> 410-608-8071
      </div>
      <div class="container d-flex justify-content-center"> 
      &copy; Michael Brady 2022
      </div>
    </div>
    

      {/*ANIMATIONS*/}
      <div class="wrapper">
      <div class="orb"></div>
      <div class="orb2"></div>
      <div class="orb3"></div>
      <div class="orb4"></div>
      <div class="orb5"></div>
      <div class="orb6"></div>
      <div class="orb7"></div>
      <div class="orb8"></div>
      <div class="orb9"></div>
      <div class="orb10"></div>
      </div>  
    </>
  );
}

export default App;