import React from "react";
import Dashboard from "./components/Dashboard";


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/Home";

const App = function(){
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;
