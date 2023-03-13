import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { Navbar, Invalid, Post, Input } from "../index";

function Admin() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUSerPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const sendData = async (credentials) => {
    const sendurl = "http://localhost:8000/api/details/credential";
    await axios.post(sendurl, credentials).then((response) => {
      if (response.status === 200) {
        setRedirect(true);
      } else if (response.status === 201) {
        setRedirect(false);
        setInvalid(true);
      }
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    const credentials = {
      user: event.target[0].value,
      password: event.target[1].value,
    };
    sendData(credentials);
  }

  function handleClick() {
    setUserName("");
    setUSerPassword("");
    setInvalid(false);
  }

  return (
    <div>
      {redirect ? (
        <div>
          <Navbar text="Log Out" path="/" />
          <Post />
        </div>
      ) : (
        <div>
          <Navbar text="Home" path="/" />
          <div className="form-container">
            {invalid ? (
              <Invalid
                onClick={handleClick}
                para="Oops!... invalid user or password"
              />
            ) : null}
            <form onSubmit={handleSubmit}>
              <h1>
                <span>emojipedia</span>
              </h1>
              <Input
                type="text"
                name="user"
                id="user"
                placeholder="admin"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="**********"
                value={userPassword}
                onChange={(event) => {
                  setUSerPassword(event.target.value);
                }}
              />
              <button type="submit" id="submit" className="submit">
                Log in
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
