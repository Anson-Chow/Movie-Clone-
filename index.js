const movieListEl = document.querySelector('.movies__list')


async function main() {
  const movies = await fetch("https://www.omdbapi.com/?&apikey=34a13588&s=avengers");
  const moviesData = await movies.json();
  console.log(moviesData);

  movieListEl.innerHTML = 
    moviesData.Search.map(
        (movie) => moviesHTML(movie))
      .slice(0,6)
      .join('')
  }

main();

function moviesHTML(movie) {
    return  `
    <div class="movie">
    <figure class="movie__img--wrapper">
      <img src=${movie.Poster} alt="" class="movie__img"/>
    </figure>
    <div class="movie__info">
    <p><b>${movie.Title}</b></p>
    <p><b>${movie.Year}</b></p>
  </div>
</div>`
  }



