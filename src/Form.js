import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

const cors = require('cors');

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
    axios.post("http://localhost:8080/api/submit", JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json', // allows for JSON to be sent
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
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