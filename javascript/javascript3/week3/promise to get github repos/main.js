const body = document.querySelector("body");
const getGitRepos = async function (x) {
  try {
    const responseRepos = await fetch(
      "https://api.github.com/search/repositories?q=user:" + x
    );
    if (responseRepos.ok) {
      const usersData = await responseRepos.json();
      return usersData;
    }
  } catch (error) {
    console.log(error);
  }
};
getGitRepos("vitalreddym");

(async function () {
  try {
    const values = await Promise.all([
      getGitRepos("vitalreddym"),
      getGitRepos("alina-kho"),
      getGitRepos("hassou2n"),
    ]);
    console.log(values);
    for (let i = 0; i < values.length; i++) {
      const username = document.createElement("ul");
      username.textContent = values[i].items[0].owner.login + " " + "Repos";
      for (let j = 0; j < 2; j++) {
        const repo = document.createElement("li");
        repo.textContent =
          values[i].items[j].name + " " + values[i].items[j].git_url;
        username.appendChild(repo);
      }
      body.appendChild(username);
    }
  } catch (error) {
    error;
  }
})();

//I tried to do it using just promises without async functions, but I get errors

// const getGithubRepos = function (x) {
//   return new Promise((resolve) => {
//     resolve(fetch("https://api.github.com/search/repositories?q=user:" + x));
//   });
// };

// getGithubRepos("benna100")
//   .then((output) => {
//     return output.json();
//   })
//   .catch(console.log.bind(console));

// function get3FriendsGithubRepo() {
//   const values = Promise.all([
//     getGithubRepos("benna100"),
//     getGithubRepos("benna100"),
//     getGithubRepos("benna100"),
//   ]).then(() => console.log(values));
// }

// get3FriendsGithubRepo();
