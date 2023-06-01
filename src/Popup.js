import React from 'react';

function Popup({ wordList = [] }) {
  const renderPopup = () => {
    if (wordList.length > 0) {
      return (
        <div className="popup">
          <div className="popup-inner">
            <dialog open>
              <div className="popup-content">
                <h4>Here are the words that can be made!</h4>
                <ul>
                  {wordList.map((word, index) => (
                    <li key={index}>{word}</li>
                  ))}
                </ul>
              </div>
            </dialog>
          </div>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div>
      <h1>Word List</h1>
      {renderPopup()}
    </div>
  );
}

export default Popup;