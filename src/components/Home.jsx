import { Link } from "react-router";
import StudentRecord from "./StudentRecord";

const Home = () => {
  return (
    <div>
      <h1>Student Records</h1>
      <h4>
        <Link className="cardLink" to={"/addrecord"}>
          Add record
        </Link>
      </h4>

      <StudentRecord />
    </div>
  );
};

export default Home;
