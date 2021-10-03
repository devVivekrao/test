import Pic2 from "../public/images/pic2.webp";
import Pic3 from "../public/images/pic3.png";
import Pic4 from "../public/images/pic4.png";
import Pic5 from "../public/images/sitting_lady.png";
import Pic6 from "../public/images/bg_website.png";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

export default function HeadFeature(props) {
  return (
    <div className="head__section__container head__feature">
      <div className="pic2">
        <img src={Pic2} />
      </div>
      <div className="pic3">
        <img src={Pic3} />
      </div>
      <div className="pic4">
        <img src={Pic4} />
      </div>
      <div className="page__wrapper">
        <Row>
          <Col md={7} xs={12} className="column-1">
            <h1>
              {props.name} starts from <br />
              <span className="red">Rs {props.price} /-</span>
            </h1>
            <p className="slogan__1__p">
              {props.name} is one of the main services provided by our company
              as we are known for our excellent web designing services. If you
              want to design your website then we can provide you with the basic
              stuffs which would help you in designing the website.
            </p>
            <Link href="/get-quote">
              <div className="make__website__cta custom__class">
                <i className="fa fa-phone"></i>
                <span>Call Back Request</span>
              </div>
            </Link>
          </Col>
          <Col md={5} xs={12} className="column-2">
            <div className="pic6">
              <img src={Pic6} />
            </div>
            <div className="pic5">
              <img src={Pic5} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
