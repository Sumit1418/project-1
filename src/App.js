import React, { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import SearchBar from './Components/SearchBar';
import ConnectButton from './Components/ConnectButton';
import SocialLinks from './Components/SocialLinks';
import Footer from './Components/Footer';
import ResultBox from './Components/ResultBox';

function App() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="app-container">
      <NavigationBar activeItem={activeItem} onItemClick={setActiveItem} />
      <SearchBar />
      <div className="search-result">
        <p className="search-result-message">Token Search Results</p>
      </div>
      <ResultBox />
      <ConnectButton />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
