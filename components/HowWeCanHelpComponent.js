import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Aaa from "../public/images/aaa.png";
export default function HowWeCanHelpComponent(props) {
  return (
    <div className="how__we__can__help__container">
      <div className="page__wrapper">
        <Row className="about__us__row">
          <Col md={6} xs={12} className="column-1">
            <img src={Aaa} alt="image" />
          </Col>
          <Col md={6} xs={12} className="column-2">
            <div className="about__us">About us</div>
            <h1>how we can help you in your bussiness goals</h1>
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
            <h1 className="ceo">--ceo maria doe</h1>
            <div className=" make__website__cta">
              <Link href="/about/company">
                <div>
                  <i className="fa fa-chevron-right"></i>
                  <span>Learn more</span>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
