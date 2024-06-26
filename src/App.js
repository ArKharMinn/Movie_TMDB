import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Create from "./components/Create";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateList } from "./redux/action/lists";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitBtn = (currency, rate) => {
    if (currency !== "" && rate !== "") {
      dispatch(updateList(currency, parseFloat(rate)));
      navigate("/home");
    }
  };
  const loginBtn = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/home");
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Login loginBtn={loginBtn} />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/create"
          element={<Create submitBtn={submitBtn} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
