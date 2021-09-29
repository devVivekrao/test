import Link from "next/link";
import { Row, Col } from "react-bootstrap";

export default function FooterComponent() {
  return (
    <div className="footer__container">
      <div className="page__wrapper">
        <Row>
          <Col md={6} xs={12} className="logo__footer">
            <Link href="/">technoindiaz </Link>
          </Col>
          <Col md={3} xs={12} className="d__flex">
            <i className="flaticon-email"> </i>
            <span>
              +91 7898687686 <br /> amit@email.com
            </span>
          </Col>
          <Col md={3} xs={12} className="d__flex">
            <i className="flaticon-location"> </i>
            <span>
              Lorem ipsum dolor sit amet. <br /> Minh City, Vietnam
            </span>
          </Col>
        </Row>
        <div className="bar"> </div>
        <Row>
          <Col md={3} className="column" xs={12}>
            <h2 className="column__title">About us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus laborum qui voluptates labore quasi voluptatem ducimus
              quisquam aut expedita autem in perspiciatis omnis porro doloribus
              velit, dicta eaque aspernatur recusandae numquam blanditiis, vitae
              al.
            </p>
            <Row className="social__icons">
              <a
                className="fa fa-facebook"
                href="https://en-gb.facebook.com/"
              ></a>

              <a
                className="fa fa-instagram"
                href="https://en-gb.facebook.com/"
              ></a>

              <a
                className="fa fa-twitter"
                href="https://en-gb.facebook.com/"
              ></a>

              <a
                className="fa fa-youtube"
                href="https://en-gb.facebook.com/"
              ></a>
            </Row>
          </Col>
          <Col md={3} className="column" xs={12}>
            <h2 className="column__title">Quick links</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about/company">company</Link>
              </li>
              <li>
                <Link href="/portofolio">portofolio</Link>
              </li>
              <li>
                <Link href="/about/career">career</Link>
              </li>
              <li>
                <Link href="/about/career">our case study</Link>
              </li>
              <li>
                <Link href="/marketing/social-media">brand promotion</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="column" xs={12}>
            <h2 className="column__title">our services</h2>
            <ul>
              <li>
                <Link href="/home">web deveopment</Link>
              </li>
              <li>
                <Link href="/about/company">web designing</Link>
              </li>
              <li>
                <Link href="/about/career">app development</Link>
              </li>
              <li>
                <Link href="/portofolio">degital marketing</Link>
              </li>
              <li>
                <Link href="/marketing/social-media">Ui/Ux design </Link>
              </li>
              <li>
                <Link href="/marketing/social-media">bulk sms </Link>
              </li>
              <li>
                <Link href="/marketing/social-media">
                  Search engine optimization
                </Link>
              </li>
              <li>
                <Link href="/marketing/social-media">
                  Social media optimization
                </Link>
              </li>
              <li>
                <Link href="/marketing/social-media">youtube promotion </Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="column" xs={12}>
            <h2 className="column__title">other links</h2>
            <ul>
              <li>
                <Link href="/home">FAQ</Link>
              </li>
              <li>
                <Link href="/about/company">portofolio</Link>
              </li>
              <li>
                <Link href="/portofolio">privacy policy</Link>
              </li>
              <li>
                <Link href="/about/career">terms & conditions</Link>
              </li>
              <li>
                <Link href="/marketing/social-media">support</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}
