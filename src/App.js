import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import ButtonSection from './Components/ButtonSection/ButtonSection';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <div>
        <Sidebar />
      </div>
      <div>
        <ButtonSection />
      </div>
    </div>
  );
}

export default App;
