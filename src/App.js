import "./App.css";
import Home from "./componenets/Home/Home";
import Login from "./componenets/Login/login";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <div className="loader"></div>
      <Home />
    </div>
  );
}

export default App;
