import "./App.css";
import axios from 'axios';
import Form from "./pages/Form";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Report from "./pages/Report";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />
    },
    {
      path: "/report",
      element: <Report /> 
    }
  ])


  return (
    <>
    <RouterProvider router={router} /> 
    
    </>
  );
}

export default App;
