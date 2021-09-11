import { useEffect, useState } from 'react'
import { get } from '../funciones/httpClient';
import { MovieCard } from './movieCard'
import styles from './moviesGrid.module.css'

export function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        get('/discover/movie').then(data => {
                setMovies(data.results)
                
        })
    }, [])

        return(
            <ul className={styles.moviesGrid}>
                {movies.map((movie) =>  (
                <MovieCard key={movie.id} movie={movie}/>
                ))}
            </ul> 
        )
}