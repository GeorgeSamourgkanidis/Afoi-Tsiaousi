import "./Customers.scss";
import { Container, Row, Col } from "react-bootstrap";
import customersData from "../../Data/customersData";

const Customers = () => {
  return (
    <div className='customers-container py-5'>
      <Container>
        <Row className='align-items-center'>
          {customersData.map((customer, index) => {
            return (
              <Col key={"customer" + index} md={3} sm={6} className='my-3'>
                <a href={customer.ref}>
                  <img
                    loading='lazy'
                    className='img-fluid img-brand d-block mx-auto'
                    src={`/img/customers/${customer.image}.png`}
                    alt='...'
                  />
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Customers;
