import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import "./App.css";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Student from "./Components/Student/Student";
import AddStudent from "./Components/Student/AddStudent";
import { EditStudent } from "./Components/Student/EditStudent";
import Mentor from "./Components/Mentor/Mentor";
import AddMentor from "./Components/Mentor/AddMentor";
import { EditMentor } from "./Components/Mentor/EditMentor";

// Student API --> https://645cfad8e01ac610589920af.mockapi.io/student
// Mentor API --> https://645cfad8e01ac610589920af.mockapi.io/mentor

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="student/editstudent/:id" element={<EditStudent />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/addmentor" element={<AddMentor />} />
        <Route path="mentor/editmentor/:id" element={<EditMentor/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
