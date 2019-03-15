

/**
 * require style imports
 */

import movies from  './api.js';

function showMovies() {
  $('#containerformovie').html('');
  movies.getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      $("#containerformovie").append(`<div><div><ul><li>Id:${id}
                                </li><li>title:${title}
                                </li><li>rating:${rating}
                                </li>
                                </ul></div></div>`);
    });
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });

}

  let title= " ";
  let rating=0;
  let idValue = 0


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


$("#deleteBtn").click(function(){

idValue = $("#deleteID").val();
  movies.deleteMovie(idValue);
  showMovies()

});