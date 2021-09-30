import { Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function MakeWebsite() {
  return (
    <div className="make__website__container">
      <div className="page__wrapper">
        <Row>
          <Col md={8} xs={12} className="side__text">
            <h1> want to make your website in top notch tecnology with us </h1>
          </Col>
          <Col md={4} xs={12}>
            <Link href="/get-quote">
              <div className=" make__website__cta">
                <i className="fa fa-chevron-right"></i>
                <span>Get a quote</span>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
