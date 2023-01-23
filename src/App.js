import { RouterProvider } from "react-router-dom";
 import {router} from './Routes/Routes'
import "./App.css";
// import Context from "./Components/Context/Context";
// import { AuthProvider } from "./Components/Context/Context";
// import { ProductContext } from "./Components/Context/Context";

function App() {
  return (
    <div>
   
  
 <RouterProvider
      router={router}></RouterProvider>
 
    </div>
  );
}

export default App;
