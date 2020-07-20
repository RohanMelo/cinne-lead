import React from 'react'
import { View } from 'react-native'

import MovieListItem from './MovieListItem'


const MovieList = ({ movies }) => {

    return (
        <View>
            {movies && movies.map((movie) => {
                return (
                    <MovieListItem key={movie.id} title={movie.title} id={movie.id} overview={movie.overview} poster_path={movie.poster_path} />
                )
            })}
        </View>
    )
}

export default MovieList

