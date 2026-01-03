import { useState } from 'react'
import './App.css'

import Header from './Components/Sections/Header';
import Footer from './Components/Sections/Footer';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App
