import "./Header.scss";
import { Container, Button } from "react-bootstrap";

const Header = (props) => {
  const { lang } = props;

  return (
    <header className='masthead'>
      <Container>
        <div className='masthead-subheading'>
          {lang === "gr" ? "Αντικατάσταση Κουφωμάτων " : "Replacement of Systems"}
          <br />
          {lang === "gr" ? "Άμεσα και Γρήγορα στον Χώρο σας!" : "Directly and quickly in your place"}
        </div>
        <Button className='btn-xl' href='#contact'>
          {lang === "gr" ? "ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ" : "GET A QUOTE"}
        </Button>
      </Container>
    </header>
  );
};

export default Header;
