import Forgotpassword from "./componenets/ForgetPassWord/forgotpassword";
import Home from "./componenets/Home/Home";
import Login from "./componenets/Login/login";
import "./App.css";
import Advertise from "./componenets/Advertise/Advertise";
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
      {
        path: "/advertise",
        element: <Advertise />,
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
