const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-popular-movies-by-genre',
    params: {genre: 'horror', limit: '10'},
    headers: {
      'X-RapidAPI-Key': '12451fb6b0msh00650b3cf3048a8p104daajsn34f5f488e3f4',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    const dropdown = document.getElementById('movie-dropdown');
    const movies = response.data.titles;
    
    // Itera sobre cada filme e cria uma opção no dropdown
    movies.forEach(movie => {
      const option = document.createElement('option');
      option.text = movie.title;
      dropdown.add(option);
    });
  }).catch(function (error) {
    console.error(error);
  });
  