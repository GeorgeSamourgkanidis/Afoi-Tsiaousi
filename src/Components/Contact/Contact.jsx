import "./Contact.scss";
import { Container, Row, Col } from "react-bootstrap";

const Contact = (props) => {
  const { lang } = props;

  return (
    <Container>
      <div className='text-center'>
        <h2 className='section-heading'> {lang === "gr" ? "Στοιχεία Επικοινωνίας" : "Contact info"}</h2>
      </div>

      <Row className='align-items-stretch mb-5'>
        <Col md={6}>
          <div className='form-group text-white'>
            <p>
              <i className='fa-solid fa-location-dot'></i>{" "}
              {lang === "gr"
                ? "Νέα Περιφερειακή Οδός Σερρών - Λευκώνα, 62100, Σέρρες"
                : "Nea Periferiaki Odos Serron - Lefkona, 62100, Serres"}
            </p>
            <p>
              <i className='fa-solid fa-phone'></i> +302321046056
            </p>
            <p>
              <i className='fa-solid fa-envelope'></i> afoitsiaousi@gmail.com
            </p>
            <p>
              <i className='fa-solid fa-circle-dot'></i> {lang === "gr" ? "Δευτέρα - Παρασκευή" : "Monday - Friday"}
              <span className='ms-2'> 8:00-14:30 & 17:30-20:00</span>
            </p>
            <p>
              <i className='fa-solid fa-circle-dot'></i> {lang === "gr" ? "Σάββατο" : "Saturday"}{" "}
              <span className='ms-2'>8:00-14:30</span>
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
  );
};

export default Contact;
