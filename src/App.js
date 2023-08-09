import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Main />
      <div className='foot'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
