import "./Footer.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className='footer-container py-4'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={4} className='text-lg-start'>
            <span>{"Copyright © " + new Date().getFullYear() + " AFOI TSIAOUSI & SIA O.E."}</span>
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
            <span>Designed by Tsiaousis & Samourgkanidis</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
