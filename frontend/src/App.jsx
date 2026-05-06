import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComplaintController from "./controllers/ComplaintController";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComplaintController />} />
        <Route path="/complaints" element={<ComplaintController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;