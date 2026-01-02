  import { useState } from 'react'
  import './App.css'

  import Header from './Components/Sections/Header';
  import Footer from './Components/Sections/Footer';

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
