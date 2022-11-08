import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container, Modal, Button, Carousel, Row, Col } from "react-bootstrap";
import "./App.scss";
import { useState } from "react";

import carouselData from "./Data/carouselData";
import customersData from "./Data/customersData";

import Header from "./Components/Header/Header";
import NavbarMenu from "./Components/NavbarMenu/NavbarMenu";
import Products from "./Components/Products/Products";
import Portofolio from "./Components/Portofolio/Portofolio";
import Company from "./Components/Company/Company";

const App = () => {
  const [lang, setLang] = useState("gr");
  const [portfolioModalNumber, setPortfolioModalNumber] = useState(-1);

  const changeLanguage = (value) => {
    setLang(value);
  };

  return (
    <div id='page-top'>
      <NavbarMenu lang={lang} onChangeLanguage={changeLanguage} />

      {/* Title */}
      <Header lang={lang} />

      {/* Products */}
      <div className='page-section' id='services'>
        <Products lang={lang} />
      </div>

      {/* ΕΡΓΑ */}
      <div className='page-section bg-light' id='portfolio'>
        <Portofolio carouselData={carouselData} lang={lang} onSetPortfolioModalNumber={setPortfolioModalNumber} />
      </div>

      {/* Company */}
      <div className='page-section' id='about'>
        <Company lang={lang} />
      </div>

      {/* Customers */}
      <div className='customers-div py-5'>
        <Container>
          <Row className='align-items-center'>
            {customersData.map((customer, index) => {
              return (
                <Col key={"customer" + index} md={3} sm={6} className='my-3'>
                  <a href={customer.ref}>
                    <img
                      loading='lazy'
                      className='img-fluid img-brand d-block mx-auto'
                      src={`/img/logos/${customer.image}.png`}
                      alt='...'
                    />
                  </a>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      {/* Contact */}
      <section className='page-section' id='contact'>
        <Container>
          <div className='text-center'>
            <h2 className='section-heading mb-24'>Στοιχεία Επικοινωνίας</h2>
          </div>

          <Row className='align-items-stretch mb-5'>
            <Col md={6}>
              <div className='form-group text-white'>
                <p>
                  <i className='fa-solid fa-location-dot'></i> Νέα Περιφερειακή Οδός Σερρών - Λευκώνα, 62100, Σέρρες
                </p>
                <p>
                  <i className='fa-solid fa-phone'></i> 2321046056
                </p>
                <p>
                  <i className='fa-solid fa-envelope'></i> afoitsiaousi@gmail.com
                </p>
                <p>
                  <i className='fa-solid fa-circle-dot'></i> Δευτέρα - Παρασκευή 8:00-14:30 & 17:30-20:00
                </p>
                <p>
                  <i className='fa-solid fa-circle-dot'></i> Σάββατο 8:00-14:30
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className='form-group form-group-textarea mb-md-0'>
                <iframe
                  title='frame'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17260.65947391873!2d23.51033791277311!3d41.07911762877249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a973371f248bf1%3A0xefb5aff04a8bdf77!2zzpHOps6fzpkgzqTOo86ZzpHOn86lzqPOlw!5e0!3m2!1sel!2sgr!4v1645107897695!5m2!1sel!2sgr'
                  width='340'
                  height='260'
                  className='border-0'
                  allowFullScreen=''
                  loading='lazy'
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className='footer py-4'>
        <Container>
          <Row className='align-items-center'>
            <Col lg={4} className='text-lg-start'>
              <span>{"Copyright © " + new Date().getFullYear() + " ΑΦΟΙ ΤΣΙΑΟΥΣΗ"}</span>
            </Col>
            <Col lg={4} className='my-3 my-lg-0'>
              <a
                className='btn btn-dark btn-social mx-2'
                href='https://www.facebook.com/%CE%91%CF%86%CE%BF%CE%AF-%CE%A4%CF%83%CE%B9%CE%B1%CE%BF%CF%8D%CF%83%CE%B7-%CE%9A%CE%BF%CF%85%CF%86%CF%8E%CE%BC%CE%B1%CF%84%CE%B1-%CE%91%CE%BB%CE%BF%CF%85%CE%BC%CE%B9%CE%BD%CE%AF%CE%BF%CF%85-%CE%A3%CE%B9%CE%B4%CE%B7%CF%81%CE%BF%CE%BA%CE%B1%CF%84%CE%B1%CF%83%CE%BA%CE%B5%CF%85%CE%AD%CF%82-338699226638330/'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
            </Col>
            <Col lg={4} className='text-lg-end'>
              <span>Designed by 2core</span>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Portfolio Modals */}
      {portfolioModalNumber >= 0 && (
        <Modal
          show={portfolioModalNumber >= 0}
          onHide={() => {
            setPortfolioModalNumber(-1);
          }}
          className='portfolio-modal'
        >
          <Modal.Header closeButton className='border-0'></Modal.Header>

          <Modal.Body className='row justify-content-center'>
            <Col lg={8}>
              {/* Project details */}
              <h2 className="mb-4">{carouselData[portfolioModalNumber]["title"]}</h2>
              {/* Carousel Start */}
              <Carousel>
                {[...Array(carouselData[portfolioModalNumber]["photos"])].map((element, index) => (
                  <Carousel.Item key={carouselData[portfolioModalNumber]["name"] + index}>
                    <img
                      // loading='lazy'
                      src={
                        "/img/portfolio/" + carouselData[portfolioModalNumber]["name"] + "/f" + (index + 1) + ".jpg"
                      }
                      className='d-block w-100'
                      alt='...'
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              {/* Carousel End */}
              <p>{carouselData[portfolioModalNumber]["description"][lang]}</p>

              <ul className='list-inline'>{carouselData[portfolioModalNumber]["list"][lang]}</ul>

              <Button
                className='btn-xl'
                onClick={() => {
                  setPortfolioModalNumber(-1);
                }}
              >
                <i className='fas fa-times me-1'></i>
                Close Project
              </Button>
            </Col>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default App;
