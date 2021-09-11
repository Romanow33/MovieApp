

import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Spiner } from '../components/spiner';
import { get } from '../funciones/httpClient'
import styles from './movieDetails.module.css'




export function MovieDetails(){ 
    const{ movieId } = useParams()   ;
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie ] = useState(null);
   

    useEffect(() =>{
        setIsLoading(true)
        get('/movie/' + movieId).then(data => {
            setMovie(data)
            setIsLoading(false)
        })

    }, [movieId])

    if(isLoading){
        return <Spiner/>
    }

    if(!movie){
        return null
    }


    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return(
        <div className={styles.detailsContainer}>
            <img 
            className={`${styles.col}  ${styles.movieImage}`}
            src={imgUrl} 
            alt={movie.title}/>
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title: </strong> {movie.title}
                </p>
                <p> 
                    <strong>Description: </strong> {movie.overview}
                </p>
                <p>
                <strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(", ")}
                </p> 
            </div>
        </div>
    )
}