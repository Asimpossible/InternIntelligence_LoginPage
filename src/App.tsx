import { Profile, Auth } from "./components/index";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}
export default App;
