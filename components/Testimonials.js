import { Row, Col } from "react-bootstrap";
import Test from "../public/images/test.jpg";
import Slider from "react-slick";

export default function Testimonials() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className="make__website__container testimonials__container">
      <div className="page__wrapper">
        <Row>
          <Col md={9} xs={12} className="side__text">
            <Slider {...settings}>
              <div className="testimonial__div">
                <div className="testimonial-text">
                  <p>
                    “Aenean massa diam, sollicitudin non dui ut, facilisis
                    viverra libero. Nulla facilisi. Nunc sed purus erat.
                    Praesent placerat dictum libero, eu varius nulla vulputate
                    non”
                  </p>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-pic">
                    <img src={Test} alt="" />
                  </div>
                  <div className="clearfix">
                    <strong className="testimonial-name">Lora Price</strong>
                    <br />
                    <span className="testimonial-position">
                      CEO &amp; Founder{" "}
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial__div">
                <div className="testimonial-text">
                  <p>
                    “Aenean massa diam, sollicitudin non dui ut, facilisis
                    viverra libero. Nulla facilisi. Nunc sed purus erat.
                    Praesent placerat dictum libero, eu varius nulla vulputate
                    non”
                  </p>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-pic">
                    <img src={Test} alt="" />
                  </div>
                  <div className="clearfix">
                    <strong className="testimonial-name">Lora Price</strong>
                    <br />
                    <span className="testimonial-position">
                      CEO &amp; Founder{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial__div">
                <div className="testimonial-text">
                  <p>
                    “Aenean massa diam, sollicitudin non dui ut, facilisis
                    viverra libero. Nulla facilisi. Nunc sed purus erat.
                    Praesent placerat dictum libero, eu varius nulla vulputate
                    non”
                  </p>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-pic">
                    <img src={Test} alt="" />
                  </div>
                  <div className="clearfix">
                    <strong className="testimonial-name">Lora Price</strong>
                    <br />
                    <span className="testimonial-position">
                      CEO &amp; Founder{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial__div">
                <div className="testimonial-text">
                  <p>
                    “Aenean massa diam, sollicitudin non dui ut, facilisis
                    viverra libero. Nulla facilisi. Nunc sed purus erat.
                    Praesent placerat dictum libero, eu varius nulla vulputate
                    non”
                  </p>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-pic">
                    <img src={Test} alt="" />
                  </div>
                  <div className="clearfix">
                    <strong className="testimonial-name">Lora Price</strong>
                    <br />
                    <span className="testimonial-position">
                      CEO &amp; Founder{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial__div">
                <div className="testimonial-text">
                  <p>
                    “Aenean massa diam, sollicitudin non dui ut, facilisis
                    viverra libero. Nulla facilisi. Nunc sed purus erat.
                    Praesent placerat dictum libero, eu varius nulla vulputate
                    non”
                  </p>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-pic">
                    <img src={Test} alt="" />
                  </div>
                  <div className="clearfix">
                    <strong className="testimonial-name">Lora Price</strong>
                    <br />
                    <span className="testimonial-position">
                      CEO &amp; Founder{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial__div">
                <div className="testimonial-text">
                  <p>
                    “Aenean massa diam, sollicitudin non dui ut, facilisis
                    viverra libero. Nulla facilisi. Nunc sed purus erat.
                    Praesent placerat dictum libero, eu varius nulla vulputate
                    non”
                  </p>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-pic">
                    <img src={Test} alt="" />
                  </div>
                  <div className="clearfix">
                    <strong className="testimonial-name">Lora Price</strong>
                    <br />
                    <span className="testimonial-position">
                      CEO &amp; Founder{" "}
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </Col>
          <Col md={3} xs={12}>
            <div className="testimonials">Testimonials</div>
            <h1>See What They Say About Us </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus illum aspernatur deserunt atque sunt, enim quaerat
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
