import React, { useContext, useState, useEffect } from 'react';
import { Container, Form, Row, Col, FormGroup } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import AboutImg from '../Image/AboutImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div>
      <section id="hero" className="jumbotron">


        <Container fluid="md">
          <Row>
            <Col>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <h1 className="hero-title">
                  Välkommen till {' '}
                  <span className="text-color-main">Ordning FTW</span>
                  <br />
                  Ett litet företag för ordning och reda
                </h1>
              </Fade>
            </Col>

            <Col>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="about-wrapper__image">
                  <AboutImg alt="profile picture" filename="header.jpg" />
                </div>
              </Fade>
            </Col>


          </Row>
          
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <Form><FormGroup></FormGroup></Form>
            <Row>
                  <Col sm={3}>
                    <p className="hero-cta">
                      <span className="cta-btn cta-btn--hero">
                        <Link to="about" smooth duration={1000}>
                          Om mig
                      </Link>
                      </span>
                    </p>
                  </Col>
                  <Col>
                    <p className="hero-cta">
                      <span className="cta-btn cta-btn--hero">
                        <Link to="projects" smooth duration={1000}>
                          Vi hjälper dig med
                      </Link>
                      </span>
                    </p>
                  </Col>
                  </Row>
            </Fade>
          
        </Container>


      </section>
    </div>
  );
};

export default Header;
