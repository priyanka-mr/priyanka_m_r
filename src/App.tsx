import React from 'react';
import './App.css';
import myPhoto from './assets/my_photo.jpeg';

function App() {
  return (
    <div className="App">
      <p>Priyanka's Website</p>
      <img src={myPhoto} alt={'priyanka'} height={400} />
    </div>
  );
}

export default App;
