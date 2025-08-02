let movieList = [];

while (true) {
  let movieName = prompt("Enter a movie name: ");
  let rating = prompt("Enter the movie rating (from IMDB): ");

  if (movieName == null && rating == null) {
    break;
  } else {
    movieList.push({
      movie: movieName,
      rating: Number(rating),
    });
  }
}

console.log("All movies: ");
for (movie of movieList) {
  console.log(`${movie.movie} (${movie.rating})`);
}

console.log("Movies with a rating of less than 7: ");
for (movie of movieList) {
  if (movie.rating < 7) {
    console.log(`${movie.movie} (${movie.rating})`);
  }
}

console.log("Movies with a rating of 7 and more than 7: ");
for (movie of movieList) {
  if (movie.rating >= 7) {
    console.log(`${movie.movie} (${movie.rating})`);
  }
}
