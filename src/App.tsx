import React from 'react';
import './App.css';
import AppRouter from "./router/AppRouter";
import NavbarLayout from "./layouts/common/NavbarLayout";

function App() {
  return (
    <div>
      <NavbarLayout/>
      <AppRouter/>
    </div>
  );
}

export default App;
