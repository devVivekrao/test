import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavComponent(props) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // props.setColor;
  return (
    <div className={scrollY > 100 ? "bg__white" : "bg__transparent"}>
      <div className="page__wrapper">
        <nav className="nav">
          <div className="logo">
            <Link href="/">Technoindiaz</Link>
          </div>
          <ul className="nav__menu">
            <li className="nav__item">
              <Link href="/">Home</Link>
            </li>

            <li className="nav__item has__sub__menu">
              <a href="#">
                <span>about</span>
                <i className="fa fa-chevron-down"></i>
              </a>
              <ul className="sub__menu">
                <li className="sub__menu__item">
                  <Link href="/about/company">company</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/about/career">career </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/about/our-case-study">our case study</Link>
                </li>
              </ul>
            </li>
            <li className="nav__item has__sub__menu">
              <a href="#">
                <span>services</span>
                <i className="fa fa-chevron-down"></i>
              </a>
              <ul className="sub__menu">
                <li className="sub__menu__item">
                  <Link href="/services/web-development">web development</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/services/web-designing">web designing</Link>
                </li>

                <li className="sub__menu__item">
                  <Link href="/services/app-development">app development</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/services/crm-erp-portal-development">
                    crm & erp portal development
                  </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/services/degital-marketing">
                    Digital Marketing
                  </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/services/ui-ux-design">UI/UX Design</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/services/mlm-software-development">
                    MLM Software Development
                  </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/services/healthcare-portal-development">
                    Halthcare Portal Development
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav__item has__sub__menu">
              <a href="#">
                <span>marketing</span>
                <i className="fa fa-chevron-down"></i>
              </a>
              <ul className="sub__menu">
                <li className="sub__menu__item">
                  <Link href="/marketing/brand-promotion">brand promotion</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/marketing/lead-generation">lead generation</Link>
                </li>

                <li className="sub__menu__item">
                  <Link href="/marketing/social-media">social media </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/marketing/bulk-sms">bulk sms</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/marketing/voice-sms">voice sms</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/marketing/search-engine-optimization">
                    SEO on page/off page
                  </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/marketing/social-media-optimization">
                    social media optimization
                  </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/marketing/pay-per-click">pay per click</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/marketing/youtube-promotion">
                    youtube promotion
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav__item has__sub__menu">
              <a href="#">
                <span>products</span>
                <i className="fa fa-chevron-down"></i>
              </a>
              <ul className="sub__menu">
                <li className="sub__menu__item">
                  <Link href="/products/e-commerce-app">Ecommerce App </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/products/pharmacy-app">Pharmacy App</Link>
                </li>

                <li className="sub__menu__item">
                  <Link href="/products/grocery-delivery-app">
                    Grocery Delivery App
                  </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/products/food-delivery-app">
                    Food Delivery App
                  </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/products/b2b-b2c-portal">B2B & b2C Portal</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/products/online-education-app">
                    Online Education App
                  </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/products/loan-managment-system">
                    Loan Management System
                  </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/products/video-streaming-app">
                    Video streaming app
                  </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/products/realstate-app">Realestate Portal</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/products/cab-booking">Cab booking App</Link>
                </li>
              </ul>
            </li>
            <li className="nav__item has__sub__menu">
              <a href="#">
                <span>industry</span>
                <i className="fa fa-chevron-down"></i>
              </a>
              <ul className="sub__menu">
                <li className="sub__menu__item">
                  <Link href="/industry/healthcare">Healthcare</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/industry/travel">Travel</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/industry/education">Education</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/industry/retail">Retail</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/industry/media">Media </Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/industry/banking">Banking</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/industry/goverment">Goverment</Link>
                </li>
                <li className="sub__menu__item">
                  <Link href="/industry/insurence">Insurance</Link>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <Link href="/portfolio">portfolio</Link>
            </li>
            <li className="nav__item nav__cta">
              <Link href="/get-quote">
                <div>
                  <i className="fa fa-chevron-right"></i>
                  <span>Get a quote</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
