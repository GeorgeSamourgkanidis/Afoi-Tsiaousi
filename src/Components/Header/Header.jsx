import "./Header.scss";
import { Container, Button } from "react-bootstrap";

const Header = (props) => {
  const { lang } = props;

  return (
    <header className='masthead'>
        <Container>
          <div className='masthead-subheading'>
            Αντικατάσταση Κουφωμάτων <br /> Άμεσα και Γρήγορα στον Χώρο σας!
          </div>
          <Button className='btn-xl' href='#contact'>
            ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
          </Button>
        </Container>
      </header>
  );
};

export default Header;
