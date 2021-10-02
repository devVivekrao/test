import Pic3 from "../public/images/pic3.png";
import Pic4 from "../public/images/pic4.png";

import { Row, Col } from "react-bootstrap";
export default function AwesomeServiceComponent(props) {
  return (
    <div className="head__section__container how__we__can__help__container awesome__service__container">
      <div className="pic3">
        <img src={Pic3} />
      </div>
      <div className="pic4">
        <img src={Pic4} />
      </div>
      <div className="page__wrapper">
        <div className="section-head style-1 text-center">
          <h6 className="sub-title bgl-primary m-b20 text-primary service__name">
            Services
          </h6>
          <h1 className="title">Provide Awesome Service To You</h1>
        </div>
        <Row className="cards">
          <Col md={4} xs={12} className="on__sm__mb__20 fade__up__on__hover">
            <div className="icon-bx-wraper style-4 text-center">
              <div className="icon-bx-sm radius bg-green shadow-green m-b20 big__box">
                <a href="" className="icon-cell">
                  <i className="flaticon-office big__icon"></i>
                </a>
              </div>
              <div className="icon-content">
                <h2 className="counter m-b0 text-primary">
                  <span className="service__title">Web Development</span>
                </h2>
                <span className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum fugit veritatis saepe rerum tempora magni soluta
                  itaque nisi commodi recusandae, explicabo ipsa!
                </span>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12} className="on__sm__mb__20 fade__up__on__hover">
            <div className="icon-bx-wraper style-4 text-center">
              <div className="icon-bx-sm radius bg-blue shadow-green m-b20 big__box">
                <a href="" className="icon-cell">
                  <i className="flaticon-website big__icon"></i>
                </a>
              </div>
              <div className="icon-content">
                <h2 className="counter m-b0 text-primary">
                  <span className="service__title">Web Designing</span>
                </h2>
                <span className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum fugit veritatis saepe rerum tempora magni soluta
                  itaque nisi commodi recusandae, explicabo ipsa!
                </span>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12} className="on__sm__mb__20 fade__up__on__hover">
            <div className="icon-bx-wraper style-4 text-center">
              <div className="icon-bx-sm radius bg-orange shadow-green m-b20 big__box">
                <a href="" className="icon-cell">
                  <i className="flaticon-pie-charts big__icon"></i>
                </a>
              </div>
              <div className="icon-content">
                <h2 className="counter m-b0 text-primary">
                  <span className="service__title">Degital Marketing</span>
                </h2>
                <span className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum fugit veritatis saepe rerum tempora magni soluta
                  itaque nisi commodi recusandae, explicabo ipsa!
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
