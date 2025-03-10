import React from 'react';
import './App.css';
import Registrationform from './Components/Registrationform';
import LoginForm from './Components/LoginForm';
import AddFlightForm from './Components/AddFlightForm';
import FlightsList from './Components/FlightsList';

function App() {
  return (
    <div className="App">
      <h1>Travel Agency Management</h1>
      <Registrationform />
      <LoginForm />
      <FlightsList />
      <AddFlightForm />
    </div>
  );
}

export default App;
