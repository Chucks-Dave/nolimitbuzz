import { Routes, Route } from "react-router-dom";

// import Home from "./component/Home";

import Home from "./component/Home";
import UserDetails from "./component/userDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
