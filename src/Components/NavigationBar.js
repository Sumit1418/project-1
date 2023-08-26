import React from 'react';

function NavigationBar({ activeItem, onItemClick }) {
  return (
    <div className="left-navigation">
        <div className="logo-container">
          <img src="/Allimages/Vector.png" alt="Logo" className="logo-image" />
          <p className="logo-text">NFTify</p>
        </div>
        <ul className="navigation-list">
        <li className={`navigation-item ${activeItem === 0 ? 'active' : ''}`} onClick={() => onItemClick(0)}>
            <img src="/Allimages/Vector (1).png" alt="Logo" className="nav-item-logo"/>
            <p className="nav-item-text">Token Address</p>
          </li>
        <li className={`navigation-item ${activeItem === 1 ? 'active' : ''}`} onClick={() => onItemClick(1)}>
            <img src="/Allimages/Vector (2).png" alt="Logo" className="nav-item-logo"/>
            <p className="nav-item-text">Pair Address</p>
          </li>
        </ul>
      </div>
  );
}

export default NavigationBar;