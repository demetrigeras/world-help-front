import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import { React, useState, useEffect} from "react";
import { verifyUser } from "./services/user.js";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import Charity from "./screens/Charity.jsx";
import SignUp from "./screens/SignUp.jsx";
import SignIn from "./screens/SignIn.jsx";
import SignOut from "./screens/SignOut.jsx";
import AddCharity from './screens/addCharity';



function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <Nav user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charity/addchar" element={<AddCharity />}/>
        <Route path="/charity/:id" element={<Charity user={user} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
