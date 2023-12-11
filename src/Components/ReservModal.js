import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Logo from "../Assets/images/Logo.svg";
export default function ReservModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-testid="reservation-modal"
      id="reservation-modal"
    >
      <Modal.Header closeButton className="bg-yellow c-main">
        <Modal.Title id="contained-modal-title-vcenter">
          Your Reservation is Confirmed!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={Logo}
          alt="Little Lemon Logo"
          className="mb-3 w-50 d-block m-auto"
        />
        <div class="success-checkmark ">
          <div class="check-icon">
            <span class="icon-line line-tip"></span>
            <span class="icon-line line-long"></span>
            <div class="icon-circle"></div>
            <div class="icon-fix"></div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="bg-yellow text-black border-0 px-5 py-2 fs-5 m-auto"
          onClick={props.onHide}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
