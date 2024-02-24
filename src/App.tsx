import React from 'react';
import './App.css';
import myPhoto from './assets/my_photo.jpg';

function App() {
  return (
    <div className="App">
      <p>Priyanka's Website</p>
      <img src={myPhoto} alt={'priyanka'} />
    </div>
  );
}

export default App;
