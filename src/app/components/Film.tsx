"use client";
import React, { useState, useEffect } from "react";

export const Film = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("/api/movies")
    .then((response) => response.json())
    .then((data) => setFilms(data))
    .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <ul className="list-none p-1 lg:grid grid-cols-3 lg:grid-cols-2 gap-6">
        {films.map((film) => (
          <div className="rounded bg-white bg-opacity-65 backdrop-blur-sm relative flex flex-col items-center mt-6 p-5 gap-1 text-center lg:flex-row lg:ml-2 lg:w-auto lg:pr-3 lg:h-full space-y-4">
            <img src={film.poster} alt="Movie Poster" className="w-48 mb-1" />
            <div className="lg:text-left lg:ml-2">
              <h5 className="uppercase font-bold text-2xl mb-1">{film.title}</h5>
              <div className="flex gap-3 text-xs flex-wrap justify-center mb-2 lg:text-left lg:justify-start">
                <p className="bg-yellow-300 p-1 rounded">{film.year}</p>
                <p className="bg-yellow-300 p-1 rounded">{film.rating}</p>
                <p className="bg-yellow-300 p-1 rounded">{film.genre}</p>
              </div>
              <div className="lg:flex flex-row">
                <p className="text-xs">Directed by:</p>
                <p className="font-bold text-xs mb-2 lg:ml-1">
                  {film.director}
                </p>
              </div>
            </div>
            <button className="rounded-full p-1 absolute -bottom-6 -right-6">
              <img
                src="VisibilityEye.png"
                alt="Bouton d'Accessibilité"
                className="w-16"
              />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};