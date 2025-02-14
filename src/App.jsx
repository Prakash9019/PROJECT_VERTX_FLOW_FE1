import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Match_flow1 from "./screens/match flow/match_flow1";
import Dashboard from "./screens/Dashboard/dashboard";
import Events from "./screens/Events/Events";
import Pipeline from "./screens/Pipeline/Pipeline";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/match-flow" element={<Match_flow1 />} />
        <Route path="/dashboard" element={<Dashboard /> } />
        <Route path="/events" element={<Events /> }/>
        <Route path="/pipeline" element={<Pipeline /> } />
      </Routes>
    </Router>
  );
}

export default App;
