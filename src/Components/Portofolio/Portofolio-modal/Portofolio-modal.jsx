import { Modal, Button, Carousel, Col } from "react-bootstrap";
import "./Portofolio-modal.scss";

const PortofolioModal = (props) => {
  const { carouselData, lang, portfolioModalNumber, onSetPortfolioModalNumber } = props;

  return (
    <>
      {/* Portfolio Modals */}

      {portfolioModalNumber >= 0 && (
        <Modal
          show={portfolioModalNumber >= 0}
          onHide={() => {
            onSetPortfolioModalNumber(-1);
          }}
          className='portfolio-modal'
        >
          <Modal.Header closeButton className='border-0'></Modal.Header>

          <Modal.Body className='row justify-content-center'>
            <Col lg={8}>
              {/* Project details */}
              <h2 className='mb-4'>{carouselData[portfolioModalNumber]["title"]}</h2>
              {/* Carousel Start */}
              <Carousel>
                {[...Array(carouselData[portfolioModalNumber]["photos"])].map((element, index) => (
                  <Carousel.Item key={carouselData[portfolioModalNumber]["name"] + index}>
                    <img
                      // loading='lazy'
                      src={"/img/portfolio/" + carouselData[portfolioModalNumber]["name"] + "/f" + (index + 1) + ".jpg"}
                      className='d-block w-100'
                      alt='...'
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              {/* Carousel End */}
              <p className='mt-3'>{carouselData[portfolioModalNumber]["description"][lang]}</p>

              <ul className='list-inline'>{carouselData[portfolioModalNumber]["list"][lang]}</ul>

              <Button
                className='btn-xl mt-2'
                onClick={() => {
                  onSetPortfolioModalNumber(-1);
                }}
              >
                <i className='fas fa-times me-1'></i>
                Close Project
              </Button>
            </Col>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default PortofolioModal;
