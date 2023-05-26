import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

const Form = () => {
  const [board, setBoard] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("board", board);

    // fetch("http://localhost:3001", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    axios.post("/api/submit", formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleChange = (event) => {
    setBoard(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Board:
        <input
          type="text"
          className="textInput"
          placeholder="your board here..."
          value={board}
          onChange={handleChange}
        />
      </label>
      <input type="submit" className="submitInput" value="Submit"/>
    </form>
  );
};

export default Form;