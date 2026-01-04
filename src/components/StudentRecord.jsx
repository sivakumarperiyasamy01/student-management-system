import { useState } from "react";
import ScoreCard from "./ScoreCard";
import { Link } from "react-router";

const API_URL = "http://localhost:8080/students";

const StudentRecord = () => {
  const [regNo, setRegNo] = useState("");
  const [student, setStudent] = useState(null);

  const fetchStudent = async () => {
    setStudent(null);

    try {
      const response = await fetch(`${API_URL}/${regNo}`);

      if (!response.ok) {
        throw new Error("Student not found");
      }
      const data = await response.json();
      setStudent(data);
      setRegNo("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="studentrecord">
      <h2 className="title">Student ScoreCard</h2>

      <input
        className="RegistrationNumber"
        placeholder="Enter Registration Number"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
      />

      <button className="btn" onClick={fetchStudent}>
        Get Details
      </button>
      {student && <ScoreCard student={student} />}
    </div>
  );
};

export default StudentRecord;
