import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ReservContextProvider } from "./Service/ReservContext";
import Reservations from "./Pages/Reservations";

describe("Reservations component", () => {
  test("renders form elements properly", () => {
    render(
      <ReservContextProvider>
        <Reservations />
      </ReservContextProvider>
    );

    const headingElement = screen.getByRole("heading", {
      name: /Reserv A Table/i,
    });
    expect(headingElement).toBeTruthy();
  });

  test("fills out all input fields in the form", () => {
    render(
      <ReservContextProvider>
        <Reservations />
      </ReservContextProvider>
    );

    const firstNameInput = screen.getByLabelText(/First Name/i);
    expect(firstNameInput).toBeTruthy();
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    expect(firstNameInput.value).toBe("John");

    const lastNameInput = screen.getByLabelText(/Last Name/i);
    expect(lastNameInput).toBeTruthy();
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    expect(lastNameInput.value).toBe("Doe");

    const emailInput = screen.getByLabelText(/Email Address/i);
    expect(emailInput).toBeTruthy();
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    expect(emailInput.value).toBe("john@example.com");

    const phoneInput = screen.getByLabelText(/Phone Number/i);
    expect(phoneInput).toBeTruthy();
    fireEvent.change(phoneInput, { target: { value: "123-456-7890" } });
    expect(phoneInput.value).toBe("123-456-7890");

    const dateSelect = screen.getByLabelText(/Date/i);
    expect(dateSelect).toBeTruthy();
    fireEvent.change(dateSelect, { target: { value: "12/12/2023" } });
    expect(dateSelect.value).toBe("12/12/2023");

    const noteTextArea = screen.getByLabelText(/Special Order/i);
    expect(noteTextArea).toBeTruthy();
    fireEvent.change(noteTextArea, {
      target: { value: "Some special requests" },
    });
    expect(noteTextArea.value).toBe("Some special requests");
  });

  test("submits the form with correct data", () => {
    render(
      <ReservContextProvider>
        <Reservations />
      </ReservContextProvider>
    );

    const firstNameInput = screen.getByLabelText(/First Name/i);
    fireEvent.change(firstNameInput, { target: { value: "John" } });

    const lastNameInput = screen.getByLabelText(/Last Name/i);
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });

    const emailInput = screen.getByLabelText(/Email Address/i);
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    const phoneInput = screen.getByLabelText(/Phone Number/i);
    fireEvent.change(phoneInput, { target: { value: "123-456-7890" } });

    const dateSelect = screen.getByLabelText(/Date/i);
    fireEvent.change(dateSelect, { target: { value: "12/17/2023" } });

    const timeSelect = screen.getByLabelText(/Time/i);
    fireEvent.change(timeSelect, { target: { value: "18:00 - Available" } });

    const guestsSelect = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guestsSelect, { target: { value: "4" } });

    const occasionSelect = screen.getByLabelText(/Occasion/i);
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    const noteInput = screen.getByLabelText(/Special Order/i);
    fireEvent.change(noteInput, { target: { value: "Extra decorations" } });

    const form = screen.getByTestId("reservation-form");
    fireEvent.submit(form);
  });
});
//
//
// Unit test for the generateDates function
const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);
    dates.push({
      date: currentDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      times: [
        { time: "16:00", available: true },
        { time: "17:00", available: true },
        { time: "18:00", available: true },
        { time: "19:00", available: true },
        { time: "20:00", available: true },
        { time: "21:00", available: true },
        { time: "22:00", available: true },
      ],
    });
  }
  return dates;
};

describe("generateDates function", () => {
  test("should generate dates for the next 7 days", () => {
    // Call the generateDates function to get the dates
    const dates = generateDates();

    // Check if the dates array is not empty and has a length of 7
    expect(dates).toBeTruthy();
    expect(dates.length).toBe(7);

    // Check the structure of each date object
    dates.forEach((date) => {
      expect(date).toHaveProperty("date");
      expect(date).toHaveProperty("times");
      expect(date.times).toHaveLength(7);
    });

    const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    dates.forEach((date) => {
      expect(date.date).toMatch(dateFormatRegex);
    });
  });
});
