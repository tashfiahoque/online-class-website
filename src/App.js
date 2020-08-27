import React from 'react';
import './App.css';
import Course from './Components/Courses/Course';

function App() {
  return (
    <div className="App">
      <h2 className="text-center py-4 text-design">Welcome to My Online Courses</h2>
      <Course></Course>
    </div>
  );
}

export default App;
