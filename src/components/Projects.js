import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg3.jpeg";
import projImg3 from "../assets/img/projImg3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Chat Application",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://chatapp-frontend-muvl.vercel.app/"
    },
    {
      title: "Video Chat Application",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://github.com/geetika1312/VC"
    },
    {
      title: "IPL Winning Prediction",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://github.com/geetika1312/IPL-Winning-Prediction"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>Discover My Portfolio: Dive into My Creative Ventures, Embark on a Journey Through My Digital Canvas, A Collection of Innovative Projects Showcasing Creativity and Technical Expertise.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>"Welcome to My Digital Playground: Where Ideas Take Flight and Innovations Come Alive. Explore a Symphony of Projects, Each an Expression of Creativity and Vision. Immerse Yourself in a World of Unique Endeavors, Crafted with Precision and Purpose. Let's Journey Together Through a Tapestry of Ingenuity and Inspiration."</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>"Welcome to My Digital Playground: Where Ideas Take Flight and Innovations Come Alive. Explore a Symphony of Projects, Each an Expression of Creativity and Vision. Immerse Yourself in a World of Unique Endeavors, Crafted with Precision and Purpose. Let's Journey Together Through a Tapestry of Ingenuity and Inspiration."</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
