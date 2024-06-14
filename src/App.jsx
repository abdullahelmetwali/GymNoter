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
const App = () => {
  return (
    <>
      <Router>
        <nav className="flex justify-between items-center px-8 py-4">
          <div className="text-lg">
            <NavLink to="/" className="mr-6 px-4 py-1">
              HOME
            </NavLink>
            <NavLink to="/exercises/allExercises" className="px-4 py-1">
              EXERCISES
            </NavLink>
          </div>
          <div className="text-lg">
            <NavLink to="/user/BeastGuest" className="px-4 py-1">
              USER
            </NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises/:category" element={<Exercises />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:username" element={<User />} />
          <Route
            path="/exercises/:category/:name"
            element={<ExerciseDetails />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
