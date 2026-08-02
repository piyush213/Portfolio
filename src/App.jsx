import { Route, Routes } from "react-router-dom";
import Home from "./component/home";


function App() {
  return (
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
