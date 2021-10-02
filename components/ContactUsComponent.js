import { Row, Col } from "react-bootstrap";
import Contact from "../public/images/contact_us.png";
export default function ContactUsComponent(props) {
  return (
    <div className="how__we__can__help__container help__process contact__us__container">
      <div className="page__wrapper">
        <Row>
          <Col md={6} xs={12} className="column-2">
            <div className="about__us">Contact Us</div>
            <h1>We Love To Help Great Companies To Grow Their Bussiness.</h1>
            <div className="row">
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="lni lni-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="dzName"
                    required=""
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="lni lni-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="dzOther[last_name]"
                    className="form-control"
                    required=""
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="lni lni-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="dzEmail"
                    required=""
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="lni lni-mobile"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="dzOther[phone]"
                    required=""
                    className="form-control"
                    placeholder="Moblie number"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="lni lni-empty-file"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="dzOther[project_title]"
                    className="form-control"
                    required=""
                    placeholder="Project Title"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="lni lni-list"></i>
                    </span>
                  </div>
                  <select
                    name="choose_service"
                    className="form-control"
                    required
                  >
                    <option selected>Choose Service</option>
                    <option value="1">Web Development</option>
                    <option value="2">Web Design</option>
                    <option value="3">App Development</option>
                    <option value="4">Digital Marketing</option>
                    <option value="5">SEO</option>
                    <option value="6">SMO</option>
                    <option value="7">MLM</option>
                    <option value="8">SMS</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="lni lni-notepad"></i>
                    </span>
                  </div>
                  <textarea
                    name="dzMessage"
                    required=""
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              <div className="col-sm-12">
                <button
                  name="submit"
                  type="submit"
                  value="Submit"
                  className="make__website__cta"
                >
                  <i className="fa fa-chevron-right"></i>
                  <span>Submit now</span>
                </button>
              </div>
            </div>
          </Col>
          <Col md={6} xs={12} className="column-1">
            <img src={Contact} alt="image" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
