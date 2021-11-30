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
              We are a passionate, results-oriented digital marketing team. We
              deliver end-to-end website design, development & digital marketing
              solutions that are focused on client goals and objectives.
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
                <Link href="/about/our-case-study">our case study</Link>
              </li>
              <li>
                <Link href="/marketing/brand-promotion">brand promotion</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="column" xs={12}>
            <h2 className="column__title">our services</h2>
            <ul>
              <li>
                <Link href="/services/web-development">web development</Link>
              </li>
              <li>
                <Link href="/services/web-designing">web designing</Link>
              </li>
              <li>
                <Link href="/services/app-development">app development</Link>
              </li>
              <li>
                <Link href="/services/degital-marketing">
                  degital marketing
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design">Ui/Ux design </Link>
              </li>
              <li>
                <Link href="/services/bulk-sms">bulk sms </Link>
              </li>
              <li>
                <Link href="/services/search-engine-optimization">
                  Search engine optimization
                </Link>
              </li>
              <li>
                <Link href="/services/web-development">
                  Social media optimization
                </Link>
              </li>
              <li>
                <Link href="/services/web-development">youtube promotion </Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="column" xs={12}>
            <h2 className="column__title">other links</h2>
            <ul>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/portfolio">portfolio</Link>
              </li>
              <li>
                <Link href="/privacy-policy">privacy policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions">terms & conditions</Link>
              </li>
              <li>
                <Link href="/about/company">support</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}
