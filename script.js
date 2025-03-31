const api = "https://api.chucknorris.io/jokes/random";
const megaJoke = document.getElementById("megaJoke");
const fetchBtn = document.getElementById("fetchButton");
const thumbUpBtn = document.getElementById("thumbsUpButton");
const thumbsDownBtn = document.getElementById("thumbsDownButton");
const likes = document.getElementById("count");

let likesCounter = 0;
let dislikesCounter = 0;

fetchBtn.addEventListener("click", function () {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      megaJoke.textContent = data.value;
    });
});

thumbUpBtn.addEventListener("click", function () {
  likesCounter++;
  updateLikesDisplay();
});

thumbsDownBtn.addEventListener("click", function () {
  dislikesCounter++;
  updateLikesDisplay();
});

function updateLikesDisplay() {
  let totalLikes = likesCounter - dislikesCounter;
  likes.textContent = `Total Likes/Dislikes: ${totalLikes}`;
}
