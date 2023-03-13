import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Card, Navbar, Admin, Post } from "./components/index.js";

function App() {
  const [allData, setAlldata] = useState([]);
  const url = "http://localhost:8000/api/details";
  const fetchData = async () => {
    axios
      .get(url)
      .then((response) => {
        setAlldata([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, [0]);

  function createEntry(items) {
    return (
      <Card
        key={items.id}
        emoji={items.emoji}
        name={items.name}
        meaning={items.meaning}
      />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar text="Admin Login" path="/admin" />
              <p className="total-count">{`Total count: ${allData.length}`}</p>
              <dl className="dictionary">{allData.map(createEntry)}</dl>
            </div>
          }
        ></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/post" element={<Post />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
