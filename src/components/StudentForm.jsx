const API_URL = "http://localhost:8080/students";
import { useState } from "react";
import { useNavigate } from "react-router";

const StudentForm = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    registerNumber: "",
    studentName: "",
    dateOfBirth: "",
    yearOfPassing: "",
    schoolName: "",
    marks: {
      Tamil: "",
      English: "",
      Physics: "",
      Chemistry: "",
      "Computer Science": "",
      Mathematics: "",
    },
  });

  // handle student info change
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  // handle marks change
  const handleMarksChange = (e) => {
    setStudent({
      ...student,
      marks: {
        ...student.marks,
        [e.target.name]: e.target.value,
      },
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (!response.ok) {
        throw new Error("Failed to save student");
      }

      alert("Student details saved successfully!");
      navigate("/");
    } catch (error) {
      alert("Error saving student details");
      console.error(error);
    }
  };
  return (
    <div className="studentinfo">
      <h3>Student MarkSheet</h3>
      <form className="studentrecord" onSubmit={handleSubmit}>
        <label>Register Number: </label>
        <br></br>
        <input
          name="registerNumber"
          placeholder="Register Number"
          onChange={handleChange}
          required
        />
        <br></br>
        <br></br>
        <label>Full Name: </label>
        <br></br>
        <input
          name="studentName"
          placeholder="Student Name"
          onChange={handleChange}
          required
        />
        <br></br>
        <br></br>
        <label>date of Birth: </label>
        <br></br>
        <input
          type="date"
          name="dateOfBirth"
          onChange={handleChange}
          required
        />
        <br></br>
        <br></br>
        <label>Year of Passing: </label>
        <br></br>
        <input
          name="yearOfPassing"
          placeholder="Year of Passing"
          onChange={handleChange}
          required
        />
        <br></br>
        <br></br>
        <label>School Name: </label>
        <br></br>
        <input
          name="schoolName"
          placeholder="School Name"
          onChange={handleChange}
          required
        />
        <br></br>
        <br></br>
        <h3>Subject Marks</h3>
        <br></br>
        {Object.keys(student.marks).map((subject) => (
          <input
            className="marks"
            key={subject}
            name={subject}
            placeholder={subject}
            onChange={handleMarksChange}
            required
          />
        ))}
        <br />
        <br></br>
        <button className="submit" type="submit">
          Save Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
