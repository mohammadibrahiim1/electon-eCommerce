import { RouterProvider } from "react-router-dom";
 import {router} from './Routes/Routes'
import "./App.css";
import { AuthProvider } from "./Components/Context/Context";
// import { ProductContext } from "./Components/Context/Context";

function App() {
  return (
    <div>
   
   {/* <AuthProvider> */}
   <RouterProvider
      router={router}></RouterProvider>
   {/* </AuthProvider> */}
    </div>
  );
}

export default App;
