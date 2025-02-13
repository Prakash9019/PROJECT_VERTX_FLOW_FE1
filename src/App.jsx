import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Run_Flow from "./screens/runflow/run_flow";
import Match_flow1 from "./screens/match flow/match_flow1";
import Match_flow2 from "./screens/matchflow2/match_flow2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/match-flow" element={<Match_flow1 />} />
        <Route path="/match-flow2" element={<Match_flow2 />} />
        <Route path="/run-flow" element={<Run_Flow />} />
      </Routes>
    </Router>
  );
}

export default App;
