import LoginPage from "./pages/LoginPage";

import TestFeature from "./pages/TestFeature";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/test" element={<TestFeature />}></Route>
    </Routes>
  );
}

export default App;
