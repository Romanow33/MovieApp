import { useEffect, useState } from 'react'
import { get } from '../funciones/httpClient';
import { useQuery } from '../hooks/query';
import { MovieCard } from './movieCard'
import styles from './moviesGrid.module.css'
import { Spiner } from './spiner';



export function MoviesGrid(){
    const [isLoding, setIsLoding] = useState(true);
    const [movies, setMovies] = useState([]);
    const query = useQuery()
    const search = query.get("search")
    

    useEffect(() => {
        setIsLoding(true)
        const searchUrl = search ? "/search/movie?query=" +  search : '/discover/movie';
        get(searchUrl).then(data => {
                setMovies(data.results)
                setIsLoding(false)           
        })
    }, [search])


    if (isLoding) {
        return <Spiner/>
    }

        return(
            <ul className={styles.moviesGrid}>
                {movies.map((movie) =>  (
                <MovieCard key={movie.id} movie={movie}/>
                ))}
            </ul> 
        )
}