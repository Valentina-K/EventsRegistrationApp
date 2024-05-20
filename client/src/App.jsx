import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ParticipantsPage } from "./pages/EventParticipantsPage";
import { BoardPage } from "./pages/EventsBoardPage";
import { RegistrationPage } from "./pages/EventRegistrationPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="/participants/:eventId" element={<ParticipantsPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
