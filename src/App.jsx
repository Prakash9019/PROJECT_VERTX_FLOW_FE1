import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Run_Flow from "./screens/match flow/runflow/run_flow";
import Match_flow1 from "./screens/match flow/match_flow1";
import Match_flow2 from "./screens/match flow/matchflow2/match_flow2";
import Dashboard from "./screens/Dashboard/dashboard";
import Events from "./screens/Events/Events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/match-flow" element={<Match_flow1 />} />
        <Route path="/match-flow2" element={<Match_flow2 />} />
        <Route path="/run-flow" element={<Run_Flow />} />
        <Route path="/dashboard" element={<Dashboard /> } />
        <Route path="/events" element={<Events /> }/>
      </Routes>
    </Router>
  );
}

export default App;
