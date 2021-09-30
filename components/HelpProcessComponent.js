import { Row, Col } from "react-bootstrap";
import Html from "../public/images/html.png";
export default function HelpProcessComponent(props) {
  return (
    <div className="how__we__can__help__container help__process">
      <div className="page__wrapper">
        <Row>
          <Col md={6} xs={12} className="column-2">
            <div className="about__us">Our Process</div>
            <h1>our working process to help you boost your bussiness</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus illum aspernatur deserunt atque sunt, enim quaerat
              veritatis ut ad non harum qui officiis eaque aliquam! Architecto
              explicabo laudantium adipisci sed porro amet voluptatum
              voluptatibus. Alias id vitae eum neque consequuntur facilis amet
              voluptatem, molestiae exercitationem, recusandae dignissimos in
              est quaerat!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
              consequuntur eos itaque ea qui natus laborum alias quia, voluptate
              similique, beatae dolor velit neque nisi! Incidunt facere dolore
              commodi nesciunt.
            </p>
          </Col>
          <Col md={6} xs={12} className="column-1 help__process__image">
            <img src={Html} alt="image" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
