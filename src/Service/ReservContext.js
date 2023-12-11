import React, { createContext, useContext, useReducer, useState } from "react";

// Create a context to hold the state and dispatch functions
const ReservContext = createContext();

// Reducer function to update the state based on the action
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_AVAILABILITY":
      return state.map((item) => {
        if (item.date === action.payload.date) {
          const updatedTimes = item.times.map((time) => {
            if (time.time === action.payload.time) {
              return { ...time, available: false };
            }
            return time;
          });
          return { ...item, times: updatedTimes };
        }
        return item;
      });
    default:
      return state;
  }
};

// Component to provide the context and manage state
const ReservContextProvider = ({ children }) => {
  // Function to generate dates for the next 7 days
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

  // Sample initial state with dates and times for the next 7 days
  const initialState = generateDates();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Function to handle updating availability
  const handleUpdateAvailability = (date, time) => {
    dispatch({
      type: "UPDATE_AVAILABILITY",
      payload: { date, time },
    });
  };

  return (
    <ReservContext.Provider
      value={{
        state,
        selectedDate,
        selectedTime,
        setSelectedDate,
        setSelectedTime,
        handleUpdateAvailability,
        generateDates,
      }}
    >
      {children}
    </ReservContext.Provider>
  );
};

// Custom hook to consume the context
const useReservContext = () => {
  const context = useContext(ReservContext);
  if (!context) {
    throw new Error(
      "useReservContext must be used within a ReservContextProvider"
    );
  }
  return context;
};

// Your Component that uses the context
export { ReservContextProvider, useReservContext };
