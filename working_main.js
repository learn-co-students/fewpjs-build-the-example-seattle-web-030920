// Defining text characters for the empty and full hearts for you to use later.

// constants
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorDiv = document.getElementById("modal")
errorDiv.classList.add("hidden")

const heartBtns = document.querySelectorAll(".like-glyph") // this will return object const heartBtns require for in to iterate = document.getElementsByClassName("like-glyph")
// document.getElementsByClassName

likeHandler()
// invoke mimicServerCall
const pError = document.createElement("p")
errorDiv.appendChild(pError)
// Your JavaScript code goes here!

function likeHandler() {
  heartBtns.forEach(btn => {
    btn.addEventListener("click", function(e){
      
      mimicServerCall()
      .then(resp => {
        if (e.target.innerText= FULL_HEART){
          e.target.innerText= EMPTY_HEART
        } else {
          e.target.innerText= FULL_HEART
        }
        e.target.classList.toggle("activated-heart")

      })
      .catch(resp => errorHandler(resp))
    })
  })
}

// handlers 


function errorHandler(resp) {

  pError.innerText = resp 

  setTimeout(function() {errorDiv.classList.toggle("hidden")}, 5000)
  errorDiv.classList.toggle("hidden")
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

