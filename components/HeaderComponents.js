export default function Header(props) {
  return (
    <div className="header__container">
      <div className="page__wrapper">
        <div className="z__index__top">
          <h1 className="h1">{props.name}</h1>
          <div className="breadcrums">
            <span>Home</span>
            <span>
              <i className="fa fa-chevron-right"></i>
              <i className="fa fa-chevron-right"></i>
            </span>
            <span>{props.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
