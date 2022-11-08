import "./Portofolio.scss";
import { Container, Row, Col } from "react-bootstrap";

const Portofolio = (props) => {
  const { carouselData, lang, onSetPortfolioModalNumber } = props;

  return (
    <>
      <Container>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>ΕΡΓΑ</h2>
        </div>
        <Row>
          {carouselData.map((portofolio, index) => {
            return (
              <Col key={"portofolio" + index} lg={4} sm={6} className='mb-4'>
                {/* Portfolio item */}
                <div className='portfolio-item'>
                  <a
                    className='portfolio-link'
                    href={"#portfolioModal" + (index + 1)}
                    onClick={() => {
                        onSetPortfolioModalNumber(index);
                    }}
                  >
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <i className='fas fa-plus fa-3x'></i>
                      </div>
                    </div>
                    <img
                      loading='lazy'
                      className='img-fluid'
                      src={`/img/portfolio/${portofolio.name}/${portofolio.defaultPhoto}.jpg`}
                      alt='...'
                    />
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>{portofolio.title}</div>
                    <div className='portfolio-caption-subheading text-muted'>{portofolio.year}</div>
                  </div>
                </div>
              </Col>
            );
          })}

          {/* REMOVE LATER  */}
          <Col lg={4} sm={6}>
            {/* Coming Soon */}
            <div className='portfolio-item'>
              <div className='portfolio-link'>
                <img loading='lazy' className='img-fluid' src={"/img/coming.jpg"} alt='...' />
              </div>
              <div className='portfolio-caption'>
                <div className='portfolio-caption-heading'>Coming Soon</div>
                <div className='portfolio-caption-subheading text-muted'>---</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portofolio;
