import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Review from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Blog from "./components/Blog/Blog";
import Navbar from "./components/NavBar/Navbar";
import NotFound from "./components/Not Found/Not Found";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="Review" element={<Review></Review>}></Route>
        <Route path="Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="Blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
