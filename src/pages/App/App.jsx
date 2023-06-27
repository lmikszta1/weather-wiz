import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import AllCitiesPage from "../AllCitiesPage/AllCitiesPage";
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage'; 
import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App m-h-screen">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path="/cities"
              element={<AllCitiesPage user={user}/>}
            />
            <Route 
              path='/'
              element={<LandingPage />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}