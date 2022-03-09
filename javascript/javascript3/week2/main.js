//Movies exercise
async function movies() {
  const moviesResponse = await fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  );
  if (moviesResponse.ok) {
    const moviesList = await moviesResponse.json();

    const badMovies = moviesList.filter((movie) => {
      return movie.rating < 4;
    });

    const newBadMovies = badMovies.filter((movie) => {
      return movie.year >= 2000;
    });
    console.log(moviesList);
    console.log(badMovies);
    console.log(newBadMovies);
  }
}
movies();

//Promise that resolves after set time

const runningAfterFewSeconds = function (resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(` ${resolveAfter} seconds passed`);
    }, resolveAfter * 1000);
  });
};
runningAfterFewSeconds(4)
  .then((output) => {
    console.log(output);
  })
  .catch(console.log.bind(console));

//Rewrite Time

const setTimeoutPromise = function (resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(` ${resolveAfter} seconds passed`);
    }, resolveAfter * 1000);
  });
};
setTimeoutPromise(2)
  .then((output) => {
    console.log(output);
  })
  .catch(console.log.bind(console));

//location Promise
function getCurrentLocation() {
  return new Promise((resolve) => {
    function success(pos) {
      var crd = pos.coords;
      resolve(
        `The position coordinations are Latitude : ${crd.latitude} and Longitude: ${crd.longitude}`
      );
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error);
  });
}

getCurrentLocation()
  .then((position) => {
    console.log(position);
  })
  .catch((error) => {
    console.log(error);
  });

//Fetching and waiting
const fetchingAPIPromise = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        fetch(
          "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
        )
      );
    }, 3000);
  });
};
fetchingAPIPromise()
  .then((output) => {
    console.log(output);
    return output.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(console.log.bind(console));

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function fetchingAfter3Seconds() {
  await wait(5000);
  const respo = await fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  );
  if (respo.ok) {
    const data = await respo.json();
    console.log(data);
  }
}
fetchingAfter3Seconds();
