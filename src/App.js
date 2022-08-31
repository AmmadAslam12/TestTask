import React, { useEffect, useState, useRef } from "react";
import InputField from "./component/InputField/InputField";
import DetailTable from "./component/DetailTable/DetailTable";
import ListingTable from "./component/ListingTable/ListingTable";
import "./App.css";

function App() {
  const [timevar, setTimevar] = useState(
    parseInt(localStorage.getItem("time")) ? parseInt(localStorage.getItem("time")) : 0
  );
  const [title, setTitle] = useState("");
  const [movieData, setMovieData] = useState();
  console.log("title", title);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=37d1ff5f`)
      .then((response) => response.json())
      .then(
        (json) => {
          setMovieData(json);
        },
        (error) => {
          console.log("error", error);
        }
      );
  }, [title]);

  useEffect(() => {
    localStorage.setItem("time", timevar);
    console.log("setTimevar useEffect", timevar);
    setTimeout(function () {
      setTimevar(timevar + 1);
    }, 1000 * 60);
  }, [timevar]);

  const modalElement = useRef();
  const openModal = () => {
    modalElement.current.style.display = "block";
  };
  const closeModal = () => {
    modalElement.current.style.display = "none";
  };
  console.log("localStorage.getItem", localStorage.getItem("time"));

  return (
    <div className="App">
      <div className="App-header">
        <span>{timevar} minute</span>
        <InputField
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ListingTable
          title={title}
          openModal={openModal}
          movieData={movieData}
        />
      </div>
      <div id="myModal" className="modal" ref={modalElement}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h1>Details</h1>
          <DetailTable movieData={movieData} />
        </div>
      </div>
    </div>
  );
}

export default App;
