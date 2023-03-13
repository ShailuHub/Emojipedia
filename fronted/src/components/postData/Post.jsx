import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { Input, Successfull } from "../index.js";

function Post() {
  const [emoji, setEmoji] = useState("");
  const [name, setName] = useState("");
  const [meaning, setMeaning] = useState("");
  const [onSucess, setOnSucess] = useState(false);

  const sendData = (data) => {
    const sendurl = "http://localhost:8000/api/details";
    axios.post(sendurl, data);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      emoji: event.target[0].value,
      name: event.target[1].value,
      meaning: event.target[2].value,
    };
    sendData(data);
    setEmoji("");
    setName("");
    setMeaning("");
    setOnSucess(true);
  }

  function handleClick() {
    setEmoji("");
    setName("");
    setMeaning("");
  }

  function goBack() {
    setOnSucess(false);
  }

  return (
    <div>
      <div className="form-container post-container">
        <form onSubmit={handleSubmit}>
          {onSucess ? (
            <div>
              <Successfull onClick={handleClick} para="Successfully! Posted" />
              <button className="submit" onClick={goBack}>
                Add new
              </button>
            </div>
          ) : (
            <div>
              <h1>
                <span>Post new emoji</span>
              </h1>
              <Input
                type="text"
                name="emoji-name"
                id="emoji-name"
                placeholder="emoji"
                value={emoji}
                onChange={(event) => {
                  setEmoji(event.target.value);
                }}
              />
              <Input
                type="text"
                name="post"
                id="post"
                placeholder="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <textarea
                name="meaning"
                id="meaning"
                cols="25"
                rows="10"
                className="input textarea"
                value={meaning}
                onChange={(event) => {
                  setMeaning(event.target.value);
                }}
                placeholder="description"
              ></textarea>
              <div className="controller">
                <button type="submit" id="post-btn" className="submit">
                  post
                </button>
                <button className="submit" id="reset-btn" onClick={handleClick}>
                  Reset
                </button>
              </div>
            </div>
          )}
        </form>
        {/* <Successfull
          onClick={handleClick}
          para="Successfully!! posted new emoji"
        /> */}
      </div>
    </div>
  );
}

export default Post;
