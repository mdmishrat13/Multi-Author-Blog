import React from 'react';
import { RouterProvider } from "react-router-dom";
import "./App.css";
import ReactDOM from "react-dom/client";
import router from "./Routes/Routes";
import './assets/styles/styles.css'

function App() {
  
  return (
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    )
  );
}

export default App;
