import { Row, Col } from "react-bootstrap";

export default function CardComponent(props) {
  return (
    <div className="card__container">
      <div className="bg__cover"></div>
      <div className="page__wrapper">
        <Row className="cards">
          <Col md={3} xs={12} className="on__sm__mb__20 fade__up__on__hover">
            <div className="icon-bx-wraper style-4 text-center">
              <div className="icon-bx-sm radius bg-green shadow-green m-b20">
                <a href="javascript:void(0);" className="icon-cell">
                  <i className="flaticon-smile"></i>
                </a>
              </div>
              <div className="icon-content">
                <span className="title">Satisfied Clients</span>
                <h2 className="counter m-b0 text-primary">
                  <span>9875</span>
                </h2>
              </div>
            </div>
          </Col>
          <Col md={3} xs={12} className="on__sm__mb__20 fade__up__on__hover">
            <div className="icon-bx-wraper style-4 text-center">
              <div className="icon-bx-sm radius bg-blue shadow-green m-b20">
                <a href="javascript:void(0);" className="icon-cell">
                  <i className="flaticon-startup"></i>
                </a>
              </div>
              <div className="icon-content">
                <span className="title">Project Launched</span>
                <h2 className="counter m-b0 text-primary">
                  <span>9875</span>
                </h2>
              </div>
            </div>
          </Col>
          <Col md={3} xs={12} className="on__sm__mb__20 fade__up__on__hover">
            <div className="icon-bx-wraper style-4 text-center">
              <div className="icon-bx-sm radius bg-orange shadow-green m-b20">
                <a href="javascript:void(0);" className="icon-cell">
                  <i className="flaticon-line-graph"></i>
                </a>
              </div>
              <div className="icon-content">
                <span className="title">Project Completed</span>
                <h2 className="counter m-b0 text-primary">
                  <span>9875</span>
                </h2>
              </div>
            </div>
          </Col>
          <Col md={3} xs={12} className="on__sm__mb__20 fade__up__on__hover">
            <div className="icon-bx-wraper style-4 text-center">
              <div className="icon-bx-sm radius bg-red shadow-green m-b20">
                <a href="javascript:void(0);" className="icon-cell">
                  <i className="flaticon-confetti"></i>
                </a>
              </div>
              <div className="icon-content">
                <span className="title">Years Completed</span>
                <h2 className="counter m-b0 text-primary">
                  <span>9875</span>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
