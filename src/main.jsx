import  ReactDOM  from "react-dom/client";
import "./index.css"
import Body from "./components/Body/Body";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import FindCourse from "./components/FindCourse/FindCourse";

const Applayout =()=>{
  return(
    <>
    <Body></Body>

    </>
  )
}
const approuter = createBrowserRouter([
  {
    path:"/coursedetails",
    element:<Applayout></Applayout>
  },
  {
    path:"/",
    element:<FindCourse></FindCourse>
  }
])

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}></RouterProvider>)