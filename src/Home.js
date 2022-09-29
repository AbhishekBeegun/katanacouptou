import React from 'react';
import { Link } from 'react-scroll';
import './App.css';

import Top from './pages/Top';
import Middle from './pages/Middle';
import MiddleSection from './pages/MiddleSection';
import Center from './pages/Center';
import End from './pages/End';
import './pages/pages.css'

function App() {
  return (
    <div className="App">
      <Top />
      <Middle/>
      <MiddleSection/>
      <Center />
      <End/>
    </div>
  );
}

export default App;
