import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Exercises from "./views/Exercises.jsx";
import Home from "./views/Home.jsx";
import Login from "./views/UserAcc/Login.jsx";
import User from "./views/UserAcc/User.jsx";
import ExerciseDetails from "./components/ForExercises/ExerciseDetails.jsx";
import Register from "./views/UserAcc/Register.jsx";
import Footer from "./views/Footer.jsx";
import { useMemo } from "react";
const App = () => {
  const userDetails = localStorage.getItem("userDetails");
  const seeUser = useMemo(() => {
    return userDetails
      ? `/user/${JSON.parse(userDetails)[0].firstName}${JSON.parse(userDetails)[0].lastName}`
      : "/user/BeastGuest";
  }, [userDetails]);

  return (
    <>
      <Router>
        <nav className="flex justify-between items-center px-8 py-4">
          <div className="text-lg">
            <NavLink to="/" className="mr-6 px-4 py-1">
              HOME
            </NavLink>
            <NavLink to="/exercises/allexercises" className="px-4 py-1">
              EXERCISES
            </NavLink>
          </div>
          <div className="text-lg">
            <NavLink to={seeUser} className="px-4 py-1">
              USER
            </NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises/:contentUrl" element={<Exercises />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/exercises/:bodyPart/:id"
            element={<ExerciseDetails />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
