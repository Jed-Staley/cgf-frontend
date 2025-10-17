  import { useState } from 'react'
  import './App.css'

  import Navbar from './Components/Navbar';
  import Header from './Components/Header';
  import Footer from './Components/Footer';

  function App() {
    return (
      <div className="app">
        <Header />
        <main className="content" />
        <Footer />
      </div>
    );
  }

  export default App
