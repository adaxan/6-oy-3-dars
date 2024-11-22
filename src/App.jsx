import React, { useState } from "react";
import data from "./assets/data.json";

function App() {
  const [likes, setLikes] = useState(0); 

  const handleLike = () => {
    setLikes(likes + 1); 
  };

  return (
    <div>
      <div className="container header__container">
        <h1 className="header-logo">Kino Ro'yxati</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">Bosh sahifa</a>
            </li>
            <li className="nav-item">
              <a href="#">Kinolar</a>
            </li>
            <li className="nav-item">
              <a href="#">Yangiliklar</a>
            </li>
          </ul>
        </nav>
        <div className="likes">
          <img
            src="https://cdn-icons-png.flaticon.com/256/1077/1077035.png"
            alt="Like tugmasi"  
          />
          <h3>{likes} likes</h3>
        </div>
      </div>
      <div className="film-container">
        {data.length > 0 &&
          data.map((film, index) => (
            <div className="films" key={index}>
              <img className="film-img" src={film.Poster} alt={film.Title} />
              <h2 className="film-title">{film.Title}</h2>
              <p className="film-desc">{film.Plot}</p>
              <div className="list">
                <h3>
                  Yil: <br /> <span>{film.Year}</span>
                </h3>
                <h3>
                  Reyting: <br /> <span>{film.Rated}</span>
                </h3>
              </div>
              <div className="list">
                <h3>
                  Chiqarilgan sana: <br /> <span>{film.Released}</span>
                </h3>
                <h3>
                  Davomiyligi: <br /> <span>{film.Runtime}</span>
                </h3>
              </div>
              <div className="list">
                <h3>
                  Janr: <br /> <span>{film.Genre}</span>
                </h3>
                <h3>
                  Rejissyor: <br /> <span>{film.Director}</span>
                </h3>
              </div>
              <div className="list">
                <h3>
                  Yozuvchi: <br /> <span>{film.Writer}</span>
                </h3>
                <h3>
                  Aktyorlar: <br /> <span>{film.Actors}</span>
                </h3>
              </div>
              <div className="list">
                <h3>
                  Til: <br /> <span>{film.Language}</span>
                </h3>
                <h3>
                  Mamlakat: <br /> <span>{film.Country}</span>
                </h3>
              </div>
              <div className="list">
                <h3>
                  Mukofotlar: <br /> <span>{film.Awards}</span>
                </h3>
                <h3>
                  IMDb reytingi: <br /> <span>{film.imdbRating}</span>
                </h3>
              </div>
              <button className="like-button" onClick={handleLike}>
              ❤️ Like
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
