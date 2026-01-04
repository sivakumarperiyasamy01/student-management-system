import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentRecord from "./components/StudentRecord";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import ScoreCard from "./components/ScoreCard";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/addRecord",
      element: <StudentForm />,
    },
    {
      path: "/scorecard",
      element: <ScoreCard />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
