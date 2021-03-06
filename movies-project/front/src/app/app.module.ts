import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';

import { MoviesService } from './movies/movies.service' 


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
