import LoginPage from "./pages/LoginPage";

import TestFeature from "./pages/TestFeature";
import { Routes, Route } from "react-router-dom";
import FormControllerApi from "./components/formUseController/FormControllerApi";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/test" element={<TestFeature />}></Route>
      <Route path="/controller" element={<FormControllerApi />}></Route>
    </Routes>
  );
}

export default App;
