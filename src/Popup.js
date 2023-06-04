import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Popup.css';
import darkModeIcon from './dark-mode.svg';
import closeIcon from './bot-left-arrow.svg';

function Popup({ wordList = [] }) {

  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
  };

  const handleClose = () => {
    // window.location.href = '/';
    navigate("/");
  };

  const renderPopup = () => {
    if (wordList.length > 0) {
      return (
        <div className={`popup ${darkMode ? 'dark-mode' : ''}`}>
          <div className="popup-inner">
            {/* <dialog open> */}
              <div className="popup-content">
                <h3 className="popup-header">Here are the words that can be made!</h3>
                <ul className="word-list">
                  {wordList.map((word, index) => (
                    <li key={index}>{word}</li>
                  ))}
                </ul>
                <div className="popup-controls">
                  <button className="dark-mode" onClick={handleToggleMode}>
                    <img className="dark-mode-icon" src={darkModeIcon}></img>
                  </button>
                  <button className="close-button" onClick={() => navigate(-1)}>
                    <img className="close-icon" src={closeIcon}></img>
                  </button>
                </div>
              </div>
            {/* </dialog> */}
          </div>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div>
      {renderPopup()}
    </div>
  );
}

export default Popup;