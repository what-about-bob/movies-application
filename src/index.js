

/**
 * require style imports
 */

import movies from  './api.js';

function showMovies() {
  movies.getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      $("#containerformovie").append(`<div><div><ul><li>Id:${id}
                                </li><li>title:${title}
                                </li><li>rating:${rating}
                                </li>
                                <li><button type="submit" class="btn btn-primary" id="deleteBtn">delete</button></li>
                                </ul></div></div>`);
    });
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
  });

}

  let title=" ";
  let rating=0;


  $("#addBtn").click(function(e){
    e.preventDefault();
    title=$("#moviename").val();
    rating=$("#rating").val();

    movies.addMovie(title,rating);
     showMovies();
  });

  $('#showBtn').click(function () {
showMovies()
  });





