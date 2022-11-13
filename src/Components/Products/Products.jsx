import "./Products.scss";
import { Container, Row, Col } from "react-bootstrap";

const Products = (props) => {
  const { lang } = props;

  return (
    <Container>
      <div className='text-center'>
        <h2 className='section-heading'>{lang === "gr" ? "Προϊοντα" : "Products"}</h2>
      </div>
      <Row className='text-center'>
        <Col md={4} className='mb-4'>
          <span className='fa-stack fa-4x'>
            <div className='circlee'>
              <img loading='lazy' src={"/img/window1.png"} alt='...' />
            </div>
          </span>
          <h4 className='my-3'>{lang === "gr" ? "Συστήματα Αλουμινίου" : "Aluminium Systems"}</h4>
          <p className='text-muted'>
            <li>{lang === "gr" ? "Ανοιγόμενα" : "Hinged"}</li>
            <li>{lang === "gr" ? "Συρόμενα" : "Sliding"}</li>
            <li>{lang === "gr" ? "Πτυσόμενα" : "Folding"}</li>
            <li>{lang === "gr" ? "Ανασηκώμενα" : "Lift & Slide"}</li>
            <li>{lang === "gr" ? "Πόρτες Εισόδου Ασφαλείας" : "Security Entrance Doors"}</li>
          </p>
        </Col>
        <Col md={4} className='mb-4'>
          <span className='fa-stack fa-4x'>
            <div className='circlee'>
              <img loading='lazy' src={"/img/sketching.png"} alt='...' />
            </div>
          </span>
          <h4 className='my-3'>{lang === "gr" ? "Ειδικές Κατασκευές" : "Special Structures"}</h4>
          <p className='text-muted'>
            <li>{lang === "gr" ? "Πέργκολες" : "Pergolas"}</li>
            <li>{lang === "gr" ? "Υαλοπετάσματα" : "Curtain Walls"}</li>
            <li>{lang === "gr" ? "Περιφράξεις Αλουμινίου" : "Aluminium Fences"}</li>
            <li>{lang === "gr" ? "Κιγκλιδώματα Αλουμινίου" : "Aluminium Railings"}</li>
            <li>{lang === "gr" ? "Περσίδες Αλουμινίου" : "Aluminium Louvers"}</li>
            <li>{lang === "gr" ? "Αίθρια" : "Atriums"}</li>
          </p>
        </Col>
        <Col md={4} className='mb-4'>
          <span className='fa-stack fa-4x'>
            <div className='circlee'>
              <img loading='lazy' src={"/img/beam.png"} alt='...' />
            </div>
          </span>
          <h4 className='my-3'>{lang === "gr" ? "Σιδηροκατασκευές" : "Iron Constructions"}</h4>
          <p className='text-muted'>
            <li>{lang === "gr" ? "Στέγαστρα" : "Canopy"}</li>
            <li>{lang === "gr" ? "Κιγκλιδώματα" : "Iron Railings"}</li>
            <li>{lang === "gr" ? "Μεταλλικές Σκάλες" : "Metal Stairs"}</li>
            <li>{lang === "gr" ? "Περιφράξεις / Αυλόπορτες" : "Fences / Gates"}</li>
            <li>{lang === "gr" ? "Λοιπές Ευρεσιτεχνίες" : "Other Patents"}</li>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
