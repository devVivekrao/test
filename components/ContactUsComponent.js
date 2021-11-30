import { Row, Col } from "react-bootstrap";
import Contact from "../public/images/contact_us.png";
import { useEffect, useState } from "react";

export default function ContactUsComponent(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [SuccessMessage, setSuccessMessage] = useState("");

  const setFirstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const setLastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const setMobileNumberHandler = (e) => {
    setMobileNumber(e.target.value);
  };
  const setProjectTitleHandler = (e) => {
    setProjectTitle(e.target.value);
  };
  const setServiceHandler = (e) => {
    setService(e.target.value);
  };
  const setMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const getCurrentDate = (separator = "-") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date < 10 ? `0${date}` : `${date}`}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    // reset error and message
    setError("");
    setSuccessMessage("");

    // fields check
    if (
      !firstName ||
      !lastName ||
      !email ||
      !mobileNumber ||
      !projectTitle ||
      !service ||
      !message
    )
      return setError("All fields are required");

    let formData = {
      _firstName: firstName,
      _lastName: lastName,
      _email: email,
      _mobileNumber: mobileNumber,
      _projectTitle: projectTitle,
      _service: service,
      _message: message,
      _postedAt: getCurrentDate(),
    };

    // console.log(formData);

    // save the post
    let response = await fetch("/api/api", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
      //reset the feilds
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobileNumber("");
      setProjectTitle("");
      setService("");
      setMessage("");
      // set the message
      return setSuccessMessage(data.message);
    } else {
      // set the error
      return setError(data.message);
    }
  };

  return (
    <div className="how__we__can__help__container help__process contact__us__container">
      <div className="page__wrapper">
        <div
          className={
            SuccessMessage
              ? "flash__message__green show"
              : "flash__message__green hide"
          }
        >
          <span>{SuccessMessage}</span>
          <button onClick={() => setSuccessMessage("")}>
            <i className="fa fa-close"></i>
          </button>
        </div>
        <Row>
          <Col md={6} xs={12} className="column-2">
            <div className="about__us">Contact Us</div>
            <h1>We Love To Help Great Companies To Grow Their Bussiness.</h1>
            <form onSubmit={formSubmitHandler}>
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
                      name="firstName"
                      value={firstName}
                      required
                      className="form-control"
                      placeholder="First Name"
                      onChange={setFirstNameHandler}
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
                      name="lastName"
                      value={lastName}
                      className="form-control"
                      required=""
                      placeholder="Last Name"
                      onChange={setLastNameHandler}
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
                      name="email"
                      required=""
                      value={email}
                      className="form-control"
                      placeholder="Email Address"
                      onChange={setEmailHandler}
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
                      name="mobileNumber"
                      value={mobileNumber}
                      required=""
                      className="form-control"
                      placeholder="Moblie number"
                      onChange={setMobileNumberHandler}
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
                      name="projectTitle"
                      value={projectTitle}
                      className="form-control"
                      required=""
                      placeholder="Project Title"
                      onChange={setProjectTitleHandler}
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
                      name="service"
                      className="form-control"
                      required
                      value={service}
                      onChange={setServiceHandler}
                    >
                      <option value="no service">Choose Service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Web Design">Web Design</option>
                      <option value="App Development">App Development</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="SEO">SEO</option>
                      <option value="SMO">SMO</option>
                      <option value="MLM">MLM</option>
                      <option value="SMS">SMS</option>
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
                      name="message"
                      required=""
                      value={message}
                      onChange={setMessageHandler}
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
            </form>
          </Col>
          <Col md={6} xs={12} className="column-1">
            <img src={Contact} alt="image" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
