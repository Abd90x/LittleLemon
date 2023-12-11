import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useReservContext } from "../Service/ReservContext";
import * as Yup from "yup";
import { MdErrorOutline } from "react-icons/md";
import ReservModal from "../Components/ReservModal";

export default function Reservations() {
  const [modalShow, setModalShow] = useState(false);

  // Function to generate dates for the next 7 days
  const {
    state,
    selectedDate,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
    handleUpdateAvailability,
  } = useReservContext();

  const isTimeAvailable = (date, time) => {
    const selectedDay = state.find((item) => item.date === date);
    if (selectedDay) {
      const selectedTimeSlot = selectedDay.times.find(
        (slot) => slot.time === time
      );
      return selectedTimeSlot ? selectedTimeSlot.available : false;
    }
    return false;
  };
  const phoneNumberRules = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      note: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First Name is Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last Name is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      phone: Yup.string()
        .matches(phoneNumberRules, {
          message: "Phone Number Must Be Like: 123-456-7890 | 1234567890 ",
        })
        .required("Phone Number is Required"),
      date: Yup.string().required("Please Select a Date"),
      time: Yup.string().required("Please Select a Available Time"),
      guests: Yup.string().required("Please Select Number of Guests"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      handleUpdateAvailability(selectedDate, selectedTime);
      setModalShow(true);
      formik.resetForm();
    },
  });

  const handleDate = (e) => {
    formik.handleChange(e);
    setSelectedDate(e.target.value);
  };
  const handelTime = (e) => {
    formik.handleChange(e);
    setSelectedTime(e.target.value);
  };

  return (
    <Container>
      <h1>Reserv A Table</h1>
      <Form
        onSubmit={formik.handleSubmit}
        id="reservation-form"
        data-testid="reservation-form"
      >
        <Row>
          <Col xs={6}>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Fitst Name"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="floatingInputCustom">First Name</label>

              {formik.touched.firstName && formik.errors.firstName ? (
                <div>
                  <MdErrorOutline />
                  {formik.errors.firstName}
                </div>
              ) : null}
            </Form.Floating>
          </Col>
          <Col xs={6}>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="floatingInputCustom">Last Name</label>
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>
                  <MdErrorOutline />
                  {formik.errors.lastName}
                </div>
              ) : null}
            </Form.Floating>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="floatingInputCustom">Email Address</label>
              {formik.touched.email && formik.errors.email ? (
                <div>
                  <MdErrorOutline />
                  {formik.errors.email}
                </div>
              ) : null}
            </Form.Floating>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="floatingInputCustom">Phone Number</label>
              {formik.touched.phone && formik.errors.phone ? (
                <div>
                  <MdErrorOutline />
                  {formik.errors.phone}
                </div>
              ) : null}
            </Form.Floating>
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="mb-3">
            <FloatingLabel controlId="floatingSelect" label="Date">
              <Form.Select
                aria-label="Floating label select example"
                name="date"
                value={formik.values.date}
                onChange={(e) => handleDate(e)}
                onBlur={formik.handleBlur}
              >
                <option>Select Date</option>
                {state.map((item, index) => (
                  <option key={index} value={item.date}>
                    {item.date}
                  </option>
                ))}
              </Form.Select>
              {formik.touched.date && formik.errors.date ? (
                <div>
                  <MdErrorOutline />
                  {formik.errors.date}
                </div>
              ) : null}
            </FloatingLabel>
          </Col>
          <Col xs={6}>
            <FloatingLabel controlId="floatingSelect" label="Time">
              <Form.Select
                aria-label="Floating label select example"
                name="time"
                value={formik.values.time}
                onChange={(e) => handelTime(e)}
                onBlur={formik.handleBlur}
              >
                <option>Select Time</option>
                {state
                  .find((item) => item.date === selectedDate)
                  ?.times.map((timeSlot, index) => (
                    <option
                      key={index}
                      value={timeSlot.time}
                      disabled={!timeSlot.available}
                      style={{ color: !timeSlot.available ? "gray" : "black" }}
                    >
                      {timeSlot.time} -{" "}
                      {timeSlot.available ? "Available" : "Not Available"}
                    </option>
                  ))}
              </Form.Select>
              {formik.touched.time && formik.errors.time ? (
                <div>
                  <MdErrorOutline /> {formik.errors.time}
                </div>
              ) : null}
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={6}>
            <FloatingLabel controlId="floatingSelect" label="Number of guests">
              <Form.Select
                aria-label="Floating label select example"
                name="guests"
                value={formik.values.guests}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option>Select Number of guests</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Form.Select>
              {formik.touched.guests && formik.errors.guests ? (
                <div>
                  <MdErrorOutline /> {formik.errors.guests}
                </div>
              ) : null}
            </FloatingLabel>
          </Col>
          <Col xs={6}>
            <FloatingLabel controlId="floatingSelect" label="Occasion">
              <Form.Select
                aria-label="Floating label select example"
                name="occasion"
                onChange={formik.handleChange}
                value={formik.values.occasion}
              >
                <option>Select Occasion </option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Special Order"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a note here"
                name="note"
                value={formik.values.note}
                onChange={formik.handleChange}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <Button
              className=" d-block m-auto text-uppercase bg-yellow border-0 text-black"
              type="submit"
              data-testid="book-now-button"
            >
              Book Now
            </Button>
          </Col>
        </Row>
      </Form>
      <ReservModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={formik.values}
        id="reservation-modal"
        data-testid="reservation-modal"
      />
    </Container>
  );
}
