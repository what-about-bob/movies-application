

/**
 * require style imports
 */

import movies from  './api.js';
$(".loading").addClass('hidden');
const getMovies = () => {
  return fetch('/api/movies')
      .then(response => response.json());

};


function showMovies() {
  $(".loading").addClass('show').fadeOut(2000);
  $('#containerformovie').html('');
  movies.getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
      console.log(`id#${id} - ${title} - rating: ${rating}`);
      $("#containerformovie").append(`<div class="card" ><div><ul class="list-group list-group-flush"><li>Id:${id}
                                </li><li>title:${title}
                                </li><li>rating:${rating}
                                </li>
                                <li>
                                <button class="btn-warning delete"  value="${id}">DELETE</button></li>
                                </ul></div></div>`);


    });
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });
  // $(".loading").addClass('show');
}


  let title= " ";
  let rating=0;
  let idValue = 0


  $("#addBtn").click(function(e){
    $(".loading").addClass('show').fadeOut(2000);
    e.preventDefault();
    // $(".loading").toggleClass('show');
    title=$("#moviename").val();
    rating=$("#rating").val();
    // $(".loading").addClass('show');
    movies.addMovie(title,rating);


     showMovies();


  });
// $(".loading").addClass('hidden');
  $('#showBtn').click(function () {

showMovies()

  });


$("#deleteBtn").click(function(){

idValue = $("#deleteID").val();
  movies.deleteMovie(idValue);
  showMovies()

});
$('#containerformovie').on('click', '.delete', function (event){
  let deleteFilm = $(event.target).val();
  // console.log(deleteID);
  movies.deleteMovie(deleteFilm);
showMovies();
});




