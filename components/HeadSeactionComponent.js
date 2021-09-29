import Pic2 from "../public/images/pic2.webp";
import Pic3 from "../public/images/pic3.png";
import Pic4 from "../public/images/pic4.png";
import Pic5 from "../public/images/sitting_lady.png";
import Pic6 from "../public/images/bg_website.png";

import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
export default function HeadSeactionComponent(props) {
  return (
    <div className="head__section__container">
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
            <span className="slogan__1">
              we make your imaginaton come to life
            </span>
            <h1>
              we are experts in <br />
              <span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("web development")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("web designing")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("degital marketing")
                      .pauseFor(2500)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </h1>
            <p className="slogan__1__p">
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus.
              Pellentesque vitae ante at elit fringilla ac at purus.
              Pellentesque vitae ante at elit fringilla ac at purus.
            </p>
            <Link href="/get-quote">
              <div className="nav__cta custom__class">
                <i className="fa fa-chevron-right"></i>
                <span>Learn more</span>
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
