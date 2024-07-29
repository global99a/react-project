import React from "react";
import { Link } from "react-router-dom";
import PatientHeader from "./PatientHeader";
import { Line } from "react-chartjs-2";

const Patients = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Blood Pressure",
        data: [120, 110, 130, 125, 135, 128, 132],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const appointments = [
    { date: "2022-03-01", time: "09:00 AM", provider: "Dr. Smith" },
    { date: "2022-03-10", time: "10:30 AM", provider: "Dr. Johnson" },
  ];

  return (
    <>
      <PatientHeader />
      <div className="container">
        <h2>Patient Dashboard</h2>
        <div className="card">
          <Link to="/symptom-checker">Symptom Checker</Link>
        </div>
        <div className="card">
          <Link to="/reminder">Medication Reminder</Link>
        </div>
        <div className="card">
          <Link to="/phr">Personal Health Records</Link>
        </div>
        <div className="card">
          <Link to="/appointment-Management">Appointment Management</Link>
        </div>
        <div className="card">
          <Link to="/prescription-Management">Prescription Management</Link>
        </div>
        <div className="card">
          <Link to="/community-interaction">Community Interaction</Link>
        </div>
        <div className="flex-container">
          <div className=" item">
            <div className="contact-form">
              <h3>Monthly Blood Pressure</h3>
              <Line data={data} />
            </div>
          </div>
        
        <div className="contact-form item">
          <h3>Recent Appointments</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Provider</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.provider}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </>
  );
};

export default Patients;
