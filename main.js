// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById("modal")
let likesList = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function(){
      // check status of heart and switch to opposite style
      ((heart.innerText == EMPTY_HEART) ? (heart.innerText = FULL_HEART) : (heart.innerText = EMPTY_HEART))
      heart.classList.toggle("activated-heart")
    })
    .catch(function(error) {
      toggleError();
      setTimeout(toggleError, 5000)

    });
}


function toggleError(){
  modal.classList.toggle("hidden");
}

for (let heart of likesList) {
  heart.addEventListener("click", likeCallback);
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
