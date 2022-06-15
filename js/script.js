//== Create Global Variables

const overview = document.querySelector(".overview");
const username = "1Henri";
const unorderedRepoList = document.querySelector(".repo-list");

//== Fetch API JSON Data

const githubMyInfo = async function () {
  const userInfo = await fetch(`https://api.github.com/users/${username}`);
  const data = await userInfo.json();
  displayMyInfo(data);
};

githubMyInfo();

//== Fetch & Display User Information

const displayMyInfo = function (data) {
  const div = document.createElement("div");
  div.classList.add("user-info");
  div.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
  `;
  //== Call the Display Function & View Your Project

  overview.append(div);
};

//== Fetch Your Repos

const myRepos = async function () {
    const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const myRepoData = await fetchRepos.json();
    displayRepos(myRepoData);
  };

  
 //== Display Info About Your Repos

 const repoInfo = function (repos) {
    for (const repo of repos) {
        const repoItem = document.createElement("li");
        repoItem.classList.add("repo");
        repoItem.innerHTML = `<h3>${repo.name}</h3>`;
        repoList.append(repoItem);
      }   
 };