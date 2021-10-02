import WebDev1 from "../public/images/web_dev_1.png";
import WebDev1Full from "../public/images/web_dev_1_full.png";
import WebDev2Full from "../public/images/web_dev_2_full.png";
import WebDev3Full from "../public/images/web_dev_3_full.png";

import WebDev2 from "../public/images/web_dev_2.png";
import WebDev3 from "../public/images/web_dev_3.png";

import Pic3 from "../public/images/pic3.png";
import Pic4 from "../public/images/pic4.png";
import { SRLWrapper } from "simple-react-lightbox";

import { Row, Col } from "react-bootstrap";

export default function OurLatestProject(props) {
  const filterSelection = (tag) => {
    console.log(tag);
    // element = document.getElementsByClassName(tag);
    // for (var i = 0; i < element.length; i++) {
    //   element[i].classList.add("show");
    // var arr1 = x[i].className.split(" ");
    // for (j = 0; j < arr1.length; j++) {
    //   if (arr1[i] == tag) {
    //     // arr1.classList.add("show");
    //     console.log(arr1);
    //   }
    // }
    // }
  };

  return (
    <div className="head__section__container how__we__can__help__container awesome__service__container our__latest__project">
      <div className="pic3">
        <img src={Pic3} />
      </div>
      <div className="pic4">
        <img src={Pic4} />
      </div>
      <div className="page__wrapper">
        <div class="section-head style-1 text-center">
          <h6 class="sub-title bgl-primary m-b20 text-primary service__name">
            Our Project
          </h6>
          <h1 class="title">Take A Look At Our Latest Portfolio</h1>
        </div>
        <div class="site-filters style-1 clearfix center m-b40">
          <ul class="filters">
            <li
              class="btn active"
              onClick={() => {
                filterSelection("all");
              }}
            >
              <a>All</a>
            </li>
            <li
              class="btn"
              onClick={() => {
                filterSelection("web__design");
              }}
            >
              <a>Web Design</a>
            </li>
            <li
              class="btn "
              onClick={() => {
                filterSelection("web__development");
              }}
            >
              <a>Web Development</a>
            </li>
            <li
              class="btn "
              onClick={() => {
                filterSelection("digital__marketing");
              }}
            >
              <a>digital marketing</a>
            </li>
            <li
              class="btn "
              onClick={() => {
                filterSelection("mobile__app");
              }}
            >
              <a>Mobile App</a>
            </li>
            <li
              class="btn "
              onClick={() => {
                filterSelection("seo");
              }}
            >
              <a>SEO</a>
            </li>
          </ul>
        </div>
        <SRLWrapper>
          <Row className="cards">
            <Col md={4} xs={12} className="on__sm__mb__20 all web__development">
              <a href={WebDev1Full}>
                <img src={WebDev1} alt="thumbnail" />
              </a>
            </Col>
            <Col md={4} xs={12} className="on__sm__mb__20 all web__development">
              <a href={WebDev2Full}>
                <img src={WebDev2} alt="thumbnail" />
              </a>
            </Col>
            <Col md={4} xs={12} className="on__sm__mb__20 all seo">
              <a href={WebDev3Full}>
                <img src={WebDev3} alt="thumbnail" />
              </a>
            </Col>
            <Col md={4} xs={12} className="on__sm__mb__20 all seo">
              <a href={WebDev1Full}>
                <img src={WebDev1} alt="thumbnail" />
              </a>
            </Col>
            <Col
              md={4}
              xs={12}
              className="on__sm__mb__20 all digital__marketing"
            >
              <a href={WebDev2Full}>
                <img src={WebDev2} alt="thumbnail" />
              </a>
            </Col>
            <Col md={4} xs={12} className="on__sm__mb__20 all mobile__app">
              <a href={WebDev3Full}>
                <img src={WebDev3} alt="thumbnail" />
              </a>
            </Col>
          </Row>
        </SRLWrapper>
      </div>
    </div>
  );
}
