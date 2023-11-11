import React, { useState } from "react";
import "./css/DoctorDashboard.css"; // Create a CSS file for styling

function DoctorDashboard() {
  // Example data structure
  const patientsData = [
    {
      id: 1,
      name: "John Doe",
      queries: [
        { id: 1, question: "How can I improve my health?" },
        { id: 2, question: "What should I do to reduce stress?" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      queries: [
        { id: 3, question: "Is my diet plan suitable for my condition?" },
        { id: 4, question: "What exercises can I do for back pain?" },
      ],
    },
    // Add more patient data as needed
  ];

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedQuery, setSelectedQuery] = useState(null);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setSelectedQuery(null); // Clear selected query when selecting a new patient
  };

  const handleQueryClick = (query) => {
    setSelectedQuery(query);
  };

  const handleAnswerSubmit = (answer) => {
    // Handle submitting the answer to the backend or update state as needed
    console.log("Submitted Answer:", answer);
  };

  // Decorator function to add query details to a patient
  const withQueryDetails = (patient) => {
    return {
      ...patient,
      getQueryDetails: function () {
        return this.queries.map((query) => query.question);
      },
    };
  };

  // Decorated patientsData with query details
  const patientsDataWithQueryDetails = patientsData.map((patient) =>
    withQueryDetails(patient)
  );

  // Usage
  const selectedPatient1 = patientsDataWithQueryDetails[0];
  console.log("Patient Name:", selectedPatient1.name);
  console.log("Patient Queries:", selectedPatient1.getQueryDetails());
  return (
    <div>
      <div>
        <h1>Doctor Dashboard</h1>
      </div>
      <div className="doctor-dashboard">
        {/* Available Patients List */}
        <div className="patients-list">
          <h2>Available Patients</h2>
          <ul>
            {patientsData.map((patient) => (
              <li key={patient.id} onClick={() => handlePatientClick(patient)}>
                {patient.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Selected Patient's Queries */}
        <div className="queries-list">
          <h2>Selected Patient's Queries</h2>
          {selectedPatient ? (
            <ul>
              {selectedPatient.queries.map((query) => (
                <li key={query.id} onClick={() => handleQueryClick(query)}>
                  {query.question}
                </li>
              ))}
            </ul>
          ) : (
            <p>Select a patient to view their queries.</p>
          )}
        </div>

        {/* Selected Query Details and Answer Form */}
        <div className="query-details">
          {selectedQuery ? (
            <>
              <h2>Query Details</h2>
              <p>{selectedQuery.question}</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const answer = e.target.elements.answer.value;
                  handleAnswerSubmit(answer);
                }}>
                <label htmlFor="answer">Your Answer:</label>
                <textarea id="answer" name="answer" rows="4" required />
                <button type="submit">Submit Answer</button>
              </form>
            </>
          ) : (
            <p>Select a query to view details and post an answer.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
