/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/

var movies = [{
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];



let content = document.querySelector("#all-movies");
let movieList = document.createElement("div");
content.appendChild(movieList);

// create showMovies function
function showMovies() {
  setTimeout(() => {
    movieList.innerHTML = movies.map(movie => `
      <p>${movie.title} - ${movie.director}</p>
      `).join("")

    document.querySelector("#movies-number").innerText = movies.length;
  }, 1000)

}

// create a new movie object for your favorite movie
// let myMovie = {
//    title: "Titanic",
//    director: "James Cameron",
//    type: "romantic",
//    haveWatched: true,
// }

// Task 2- create addMovies function
function addMovies(myMovie) {
  setTimeout(() => {
    movies.push(myMovie);
    showMovies();
  }, 2000)

}

showMovies();

//form 
let form = document.querySelector("#movies-form");
form.innerHTML = `
<form>
  <input type="text" id="title" name="fname" placeholder="title"><br>
  <input type="text" id="director" name="lname" placeholder="director"><br>
  <input type="text" id="type" name="fname" placeholder="type"><br>
  <input type="text" id="haveWatched" name="lname" placeholder="haveWatched">
  <input  class="button" type="button" value="Save">
</form> `

let titleProperty = document.querySelector("#title");
let directorProperty = document.querySelector("#director");
let typeProperty = document.querySelector("#type");
let watchedProperty = document.querySelector("#haveWatched");


document.querySelector(".button").addEventListener("click", () => {

  let myMovie = {
    title: titleProperty.value,
    director: directorProperty.value,
    type: typeProperty.value,
    haveWatched: watchedProperty.value,
  }

  addMovies(myMovie);

  titleProperty.value = ''
  directorProperty.value = ''
  typeProperty.value = ''
  watchedProperty.value = ''
})
