import { Container, Col, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design",
            imgUrl: projImg1,
        },

        {
            title: "Business Startup",
            description: "Design",
            imgUrl: projImg2,
        },

        {
            title: "Business Startup",
            description: "Design",
            imgUrl: projImg3,
        },

        {
            title: "Business Startup",
            description: "Design",
            imgUrl: projImg1,
        },

        {
            title: "Business Startup",
            description: "Design",
            imgUrl: projImg2,
        },

        {
            title: "Business Startup",
            description: "Design",
            imgUrl: projImg3,
        },

    ];


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
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
                                <Tab.Pane eventKey="second">Loren Loren Loren Loren Loren Loren Loren Loren </Tab.Pane>
                                <Tab.Pane eventKey="third">Loren Loren Loren Loren Loren Loren Loren Loren </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section >

    )
}