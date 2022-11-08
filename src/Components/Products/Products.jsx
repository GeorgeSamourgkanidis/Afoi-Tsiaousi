import "./Products.scss";
import { Container, Row, Col } from "react-bootstrap";

const Products = (props) => {
  const { lang } = props;

  return (
    <>
      <Container>
        <div className='text-center'>
          <h2 className='section-heading'>Προϊοντα</h2>
        </div>
        <Row className='text-center'>
          <Col md={4} className='mb-4'>
            <span className='fa-stack fa-4x'>
              <div className='circlee'>
                <img loading='lazy' src={"/img/window1.png"} alt='...' />
              </div>
            </span>
            <h4 className='my-3'>Συστήματα Αλουμινίου</h4>
            <p className='text-muted'>
              <li>{lang === "gr" ? "Ανοιγόμενα κουφώματα" : "test"}</li>
              <li>Συρόμενα κουφώματα</li>
              <li>Ανασυρόμενα κουφώματα</li>
              <li>Πόρτες εισόδου ασφαλείας</li>
              <li>Φυσούνες</li>
            </p>
          </Col>
          <Col md={4} className='mb-4'>
            <span className='fa-stack fa-4x'>
              <div className='circlee'>
                <img loading='lazy' src={"/img/sketching.png"} alt='...' />
              </div>
            </span>
            <h4 className='my-3'>Ειδικές Κατασκευές</h4>
            <p className='text-muted'>
              <li>Πέργκολες</li>
              <li>Υαλοπετάσματα</li>
              <li>Περιφράξεις αλουμινίου</li>
              <li>Κιγκλιδώματα αλουμινίου</li>
              <li>Περσίδες</li>
              <li>Αίθρια</li>
            </p>
          </Col>
          <Col md={4} className='mb-4'>
            <span className='fa-stack fa-4x'>
              <div className='circlee'>
                <img loading='lazy' src={"/img/beam.png"} alt='...' />
              </div>
            </span>
            <h4 className='my-3'>Σιδηροκατασκευές</h4>
            <p className='text-muted'>
              <li>Στέγαστρα</li>
              <li>Κιγκλιδώματα</li>
              <li>Μεταλλικές σκάλες</li>
              <li>Περιφράξεις / Αυλόπορτες</li>
              <li>Λοιπές ευρεσιτεχνίες</li>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
