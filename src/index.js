

/**
 * require style imports
 */

import movies from  './api.js';
$(".loading").addClass('hidden');
const getMovies = () => {
  return fetch('/api/movies')
      .then(response => response.json());

};
$(".loading").addClass('hidden');

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
                                <li>
                                <button class="btn-warning editMovie mt-2 mb-2" value="${id}">EDIT</button></li>
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

    $(".loading").fadeIn().fadeOut(2000);
    e.preventDefault();

    title=$("#moviename").val();
    rating=$("#rating").val();

    movies.addMovie(title,rating);


     showMovies();


  });


  $('#showBtn').click(function () {
    $(".loading").fadeIn().fadeOut(2000);
showMovies()

  });


$("#deleteBtn").click(function(){
  $(".loading").fadeIn().fadeOut(2000);

idValue = $("#deleteID").val();
  movies.deleteMovie(idValue);
  showMovies()

});


$('#containerformovie').on('click', '.delete', function (event){
  $(".loading").fadeIn().fadeOut(2000);
  let deleteFilm = $(event.target).val();
  // console.log(deleteID);
  movies.deleteMovie(deleteFilm);
showMovies();
});


$(document).on('click', 'button.editMovie', (e) => {
  e.preventDefault();
  $('.edit').toggleClass('hiding');
});



