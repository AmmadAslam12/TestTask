import React from "react";

export default function InputField(props) {
  const { title, openModal, movieData } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Country</th>
          <th>Director</th>
          <th>Genre</th>
          <th>Details</th>
        </tr>
      </thead>
      {title == "" ? (
        <tr>
          <td colSpan={5}>
            <p>No data avaliable</p>
          </td>
        </tr>
      ) : (
        <tbody>
          <tr>
            <td>{movieData && movieData.Title}</td>
            <td>{movieData && movieData.Country}</td>
            <td>{movieData && movieData.Director}</td>
            <td>{movieData && movieData.Genre}</td>
            <th>
              <button id="myBtn" onClick={openModal}>
                Details
              </button>
            </th>
          </tr>
        </tbody>
      )}
    </table>
  );
}
