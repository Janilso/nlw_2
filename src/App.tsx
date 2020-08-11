import React from "react";
import "./assets/styles/global.scss";
import Routes from "./pages/routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  toast.configure({
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
