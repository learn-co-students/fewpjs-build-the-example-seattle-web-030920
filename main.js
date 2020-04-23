// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDiv = document.getElementById("modal")
hideError()

function hideError() {
  errorDiv.className = "hidden"
}

const articleHearts = document.querySelectorAll(".like-glyph")

for (let heart of articleHearts) {
  heart.addEventListener("click", function(e) {
    mimicServerCall("some.URL")
      .then( function(response) {
        if (heart.textContent == EMPTY_HEART) {
          heart.textContent = FULL_HEART
        } else {
          heart.textContent = EMPTY_HEART
        }
        heart.classList.toggle("activated-heart")
      })
      .catch( error => {
        errorDiv.className = ""
        setTimeout( hideError, 5000 )
      })
  })
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
