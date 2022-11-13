import "./Company.scss";
import { Container } from "react-bootstrap";
import companyData from "../../Data/companyData";

const Company = (props) => {
  const { lang } = props;

  return (
    <Container>
      <div className='text-center'>
        <h2 className='section-heading text-uppercase'>{lang === "gr" ? "ΕΤΑΙΡΕΙΑ" : "Company"}</h2>
      </div>
      <ul className='timeline'>
        {companyData.map((timeline, index) => {
          return (
            <li className={index % 2 === 1 ? "timeline-inverted" : ""} key={"timeline" + index}>
              <div className='timeline-image'>
                <img
                  loading='lazy'
                  className='rounded-circle img-fluid'
                  src={`/img/about/${timeline.image}.jpg`}
                  alt='...'
                />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>{timeline.date[lang]}</h4>
                  <h4 className='subheading'>{timeline.title[lang]}</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>{timeline.description[lang]}</p>
                </div>
              </div>
            </li>
          );
        })}

        <li className='timeline-inverted'>
          <div className='timeline-image'>
            <h4>. . .</h4>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default Company;
