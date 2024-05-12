import "./App.css";
import Forgotpassword from "./componenets/ForgetPassWord/forgotpassword";
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
  {
    path: "/forgotpassword",
    element: <Forgotpassword />,
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
