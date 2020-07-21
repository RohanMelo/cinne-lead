import React from "react";
import { View } from "react-native";

import MovieListItem from "./MovieListItem";

const MovieList = ({ movies }) => {
  return (
    <View>
      {movies &&
        movies.map(movie => {
          return (
            <MovieListItem
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              backdrop_path={movie.backdrop_path}
              importantForAccessibility={true}
            />
          );
        })}
    </View>
  );
};

export default MovieList;
