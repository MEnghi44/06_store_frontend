import React from "react";
import { BrowserRouter as Router ,Routes,Route  } from "react-router-dom";
import Home from "./pages/Home"
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ErrorPage from "./pages/ErrorPage";
import Menu from "./components/Menu";



function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path = "/"  element={<Home/>}/>
        <Route path = "/add"  element={<AddProduct/>}/>
        <Route path = "/edit/:id"  element={<EditProduct/>}/>
        <Route path = "*"  element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
