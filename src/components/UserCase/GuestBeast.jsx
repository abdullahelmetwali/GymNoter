import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import CaseBody from "./CaseBody.jsx";

const GuestBeast = () => {
  const [Exercises, setExercises] = useState([]);

  useEffect(() => {
    const guestExercises = sessionStorage.getItem("guestExercises");
    if (guestExercises) {
      setExercises(JSON.parse(guestExercises))
    } else {
      setExercises([]);
    }
  }, []);

  const deleteExercise = (index) => {
    const updatedExercises = [...Exercises];
    updatedExercises.splice(index, 1);
    sessionStorage.setItem('guestExercises', JSON.stringify(updatedExercises));
    setExercises(updatedExercises);
  };

const saveNote = (exercises, index, noteContent) => {
  // see exercise index , ( true or false) 
    const existingProductIndex = Exercises.findIndex(pro => pro.id === exercises[index].id);
    // IF (!== -1) => true , add note to exercise then push it to Exercises at its index
    if (existingProductIndex !== -1) {
        Exercises[existingProductIndex] = {
            ...Exercises[existingProductIndex],
            note: noteContent.trim()
        };
    } else { // IF false , push the exercise to Exercises with added note 
        Exercises.push({
            ...exercises[index],
            note: noteContent.trim()
        });
    }
    sessionStorage.setItem('guestExercises', JSON.stringify(Exercises));
};

  return (
    <section className="px-10 py-6 mob:px-6">
      <div className="flex justify-between items-center">
        <h1>
          If you want to <strong>SAVE EXERCISES</strong>
        </h1>
        <NavLink to={`/login`} className="px-7 py-1 bg-blue-800 rounded-3xl">
            Login
          </NavLink>
      </div>
      <main>
        <CaseBody Exercises={Exercises} deleteExercise={deleteExercise} saveNote={saveNote}/>
      </main>
    </section>
  );
};

export default GuestBeast;
