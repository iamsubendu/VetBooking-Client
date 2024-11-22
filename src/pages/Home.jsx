import React, { useState } from "react";
import FilterSection from "../components/FilterSection";
import BookingCard from "../components/BookingCard";
import { FaArrowLeftLong } from "react-icons/fa6";

const Home = () => {
  const [filter, setFilter] = useState("all");
  const bookings = [
    {
      id: 1,
      doctorName: "Dr. Amit",
      experience: "6 Years Experience",
      bookingOn: "08/10/2010",
      date: "10/10/2024",
      time: "6:00 PM",
      amount: 399,
      consultationType: "Home",
      additionalNote:
        "My Dog is neither drinking nor eating anything, has swelling",
      status: "Complete",
    },
    {
      id: 2,
      doctorName: "Dr. Amit",
      experience: "6 Years Experience",
      bookingOn: "08/10/2010",
      date: "10/10/2024",
      time: "6:00 PM",
      amount: 399,
      consultationType: "Home",
      additionalNote:
        "My Dog is neither drinking nor eating anything, has swelling",
      status: "Complete",
    },
    {
      id: 3,
      doctorName: "Dr. Amit",
      experience: "6 Years Experience",
      bookingOn: "08/10/2010",
      date: "10/10/2024",
      time: "6:00 PM",
      amount: 399,
      consultationType: "Clinic",
      additionalNote:
        "My Dog is neither drinking nor eating anything, has swelling",
      status: "Complete",
    },
    {
      id: 4,
      doctorName: "Dr. Amit",
      experience: "6 Years Experience",
      bookingOn: "08/10/2010",
      date: "10/10/2024",
      time: "6:00 PM",
      amount: 399,
      consultationType: "Home",
      additionalNote:
        "My Dog is neither drinking nor eating anything, has swelling",
      status: "Complete",
    },
  ];
  const filteredBookings = bookings.filter((booking) => {
    if (filter === "all") return true;
    return booking.consultationType.toLowerCase() === filter;
  });
  return (
    <div className="home">
      <div className="myBookings">
        <h3>
          <FaArrowLeftLong />
          My Bookings
        </h3>
        <div>
          <button className="upcoming">Upcoming</button>
          <button className="history">History</button>
        </div>
      </div>
      <FilterSection activeFilter={filter} setFilter={setFilter} />
      <div className="bookings">
        {filteredBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default Home;
