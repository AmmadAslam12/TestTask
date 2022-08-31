import React from "react";

export default function InputField(props) {
  const { movieData } = props;
  return (
    <table>
      <tbody>
        <tr>
          <td>Actors</td>
          <td>{movieData && movieData.Actors}</td>
        </tr>
        <tr>
          <td>Awards</td>
          <td>{movieData && movieData.Awards}</td>
        </tr>
        <tr>
          <td>BoxOffice</td>
          <td>{movieData && movieData.BoxOffice}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{movieData && movieData.Country}</td>
        </tr>
        <tr>
          <td>DVD</td>
          <td>{movieData && movieData.DVD}</td>
        </tr>
        <tr>
          <td>Director</td>
          <td>{movieData && movieData.Director}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>{movieData && movieData.Genre}</td>
        </tr>
        <tr>
          <td>Language</td>
          <td>{movieData && movieData.Language}</td>
        </tr>
        <tr>
          <td>Metascore</td>
          <td>{movieData && movieData.Metascore}</td>
        </tr>
        <tr>
          <td>Plot</td>
          <td>{movieData && movieData.Plot}</td>
        </tr>
        <tr>
          <td>Poster</td>
          <td>{movieData && movieData.Poster}</td>
        </tr>
        <tr>
          <td>Production</td>
          <td>{movieData && movieData.Production}</td>
        </tr>
        <tr>
          <td>Rated</td>
          <td>{movieData && movieData.Rated}</td>
        </tr>
        <tr>
          <td>Released</td>
          <td>{movieData && movieData.Released}</td>
        </tr>
        <tr>
          <td>Response</td>
          <td>{movieData && movieData.Response}</td>
        </tr>
        <tr>
          <td>Runtime</td>
          <td>{movieData && movieData.Runtime}</td>
        </tr>
        <tr>
          <td>Title</td>
          <td>{movieData && movieData.Title}</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>{movieData && movieData.Type}</td>
        </tr>
        <tr>
          <td>Website</td>
          <td>{movieData && movieData.Website}</td>
        </tr>
        <tr>
          <td>Writer</td>
          <td>{movieData && movieData.Writer}</td>
        </tr>
        <tr>
          <td>Year</td>
          <td>{movieData && movieData.Year}</td>
        </tr>
        <tr>
          <td>imdbID</td>
          <td>{movieData && movieData.imdbID}</td>
        </tr>
        <tr>
          <td>imdbRating</td>
          <td>{movieData && movieData.imdbRating}</td>
        </tr>
        <tr>
          <td>imdbVotes</td>
          <td>{movieData && movieData.imdbVotes}</td>
        </tr>
      </tbody>
    </table>
  );
}
