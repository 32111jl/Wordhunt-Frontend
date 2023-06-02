import React from 'react';
import './Popup.css';

function Popup({ wordList = [] }) {
  const renderPopup = () => {
    if (wordList.length > 0) {
      return (
        <div className="popup">
          <div className="popup-inner">
            {/* <dialog open> */}
              <div className="popup-content">
                <h4>Here are the words that can be made!</h4>
                <ul className="word-list">
                  {wordList.map((word, index) => (
                    <li key={index}>{word}</li>
                  ))}
                </ul>
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