const API = 'https://api.themoviedb.org/3/';
export function get(path){
    return fetch(API + path, {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmNiZWVjNjAyNDlkZjE0NjNjNWE1NDc5Y2RlMDk2ZSIsInN1YiI6IjYxMzdhMjMyOTM2OWEyMDA5MjhiNGUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BglmVSCGoNcMirwtrq0J5TyW7eYeBlgEgKAw3vOyDBs",
                "Content-Type": "application/json;charset=utf-8",
            },
            }).then(result => result.json())
}