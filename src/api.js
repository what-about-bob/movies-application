
const getMovies = () => {
    return fetch('/api/movies')
      .then(response => response.json());
  };


const addMovie = (title, rating, id) => {

  const newMovie = {title: title, rating: rating, id: id};
  const url = '/api/movies';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  };
  fetch(url, options)
      .then(() => console.log('Movie was added'))
      .catch(() => console.log('error'));
};

const deleteMovie = (id) => {


  const url = '/api/movies';
  const options = {
    method: 'DELETE',

  };
  fetch(url+"/"+id, options)
      .then(() => console.log('Movie was deleted'))
      .catch(() => console.log('error'));
};


const editMovie = (id) => {


  const url = '/api/movies';
  const options = {
    method: 'PATCH',

  };
  fetch(url+"/"+id, options)
      .then(() => console.log('Movie was EDITED'))
      .catch(() => console.log('error'));
};



export default {getMovies,addMovie,deleteMovie,editMovie}