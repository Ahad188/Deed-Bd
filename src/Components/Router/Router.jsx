import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { Home } from "../Page/Home/Home";
import ServiceDetails from "../Page/ServiceDetails/ServiceDetails";
import Contact from "../Page/Contact/Contact";
import About from "../Page/About/About";

const router = createBrowserRouter([
     {
       path: "/",
       element:<App></App>,
       children:[
          {
               path:'/',
               element:<Home></Home>
          },
          {
               path:'/service',
               element:<ServiceDetails></ServiceDetails>
          },
          {
               path:'/contact',
               element:<Contact></Contact>
          },
          {
               path:'/about',
               element:<About></About>
          }
       ]
     },
   ]);

export default router;