import React from "react";
import profileImage from "../assets/Visual.png";
import { FaUserDoctor } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { RiDownloadLine } from "react-icons/ri";

const BookingCard = ({ booking }) => {
  return (
    <div className="booking-card">
      <div className="booking-header">
        <p>
          Appointment: {booking.date}, {booking.time}
        </p>
        <p className="status">{booking.status}</p>
      </div>
      <div className="booking-content">
        <div className="top">
          <div>
            <img src={profileImage} alt="profileImage" />
          </div>
          <div className="content">
            <h4>{booking.doctorName}</h4>
            <p>
              <FaUserDoctor /> {booking.experience}
            </p>
            <p>
              <SlCalender /> Booking on: {booking.bookingOn}
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="child1 flex justify-between">
            <div>
              <p>Paid Amount:</p> <p className="amount">₹{booking.amount}</p>
            </div>
            <div>
              <p>Consultation Type:</p>{" "}
              <p className="type">{booking.consultationType}</p>
            </div>
          </div>
          <div className="child2">
            <p>Disease</p>
            <div>
              <button>Worms</button>
              <button>Ear infection</button>
            </div>
          </div>
          <div className="child3">
            <p>Additional Note:</p>
            <p className="note">{booking.additionalNote}</p>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <button className="prescription">
          <RiDownloadLine /> Prescription
        </button>
        <button className="book">Book Again</button>
      </div>
    </div>
  );
};

export default BookingCard;
