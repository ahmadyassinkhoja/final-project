import { Injectable } from '@angular/core'

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class MoviesService {

  constructor(private http: HttpClient){

  }
  // server movies url
  moviesurl = 'http://localhost:3000/movies'

  // getting data from server
  movies = this.http.get(this.moviesurl)

  addMovie(title,genre,length,photo){
    let newMovie = {
        name: title.value,
        genre: genre.value,
        length: length.value,
        image: '../../assets/images/' + photo.files[0].name
      }

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };

      // server movies add url
      const addmoviesurl = 'http://localhost:3000/addMovie'

      this.http.post(addmoviesurl,newMovie, httpOptions) .subscribe(data => {
        console.log(data);
      });

      title.value = ''
      genre.value = ''
      length.value = ''
      photo.value = ''
  }

  deleteMovie(movie){
    // let index = this.movies.indexOf(movie)
    // if(index < -1){
    //   return 
    // }

    // this.movies.splice(index, 1)
  }
}