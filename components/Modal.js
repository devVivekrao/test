import ContactUsComponent from "../components/ContactUsComponent";

export default function Modal(props) {
  const setShowModalHandler = () => {
    props.setShowModal(!props.showModal);
  };

  return (
    <div
      className={props.showModal ? "modal__dialog show" : "modal__dialog hide"}
    >
      <div className="page__wrapper">
        <button className="close__btn" onClick={setShowModalHandler}>
          <i className="fa fa-close"></i>
        </button>
      </div>

      <ContactUsComponent />
    </div>
  );
}
