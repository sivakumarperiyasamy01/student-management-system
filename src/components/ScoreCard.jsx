const ScoreCard = ({ student }) => {
  return (
    <div className="scorecard">
      <h4>Student Info</h4>

      <table border="1" cellPadding="8" cellSpacing="8" className="cardinfo">
        <tbody>
          <tr>
            <td>
              <b>RegisterNumber:</b>
            </td>
            <td>{student.registerNumber}</td>
          </tr>
          <tr>
            <td>
              <b>Name</b>
            </td>
            <td>{student.studentName}</td>
          </tr>
          <tr>
            <td>
              <b>DOB</b>
            </td>
            <td>{student.dateOfBirth}</td>
          </tr>
          <tr>
            <td>
              <b>School</b>
            </td>
            <td>{student.schoolName}</td>
          </tr>
          <tr>
            <td>
              <b>Year</b>
            </td>
            <td>{student.yearOfPassing}</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h4>Marks</h4>

      <table className="marks-table" border="1" cellPadding="8" cellSpacing="8">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {student?.marks &&
            Object.entries(student.marks).map(([subject, marks]) => (
              <tr key={subject}>
                <td>{subject}</td>
                <td>{marks}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button className="download">Download</button>
    </div>
  );
};

export default ScoreCard;
