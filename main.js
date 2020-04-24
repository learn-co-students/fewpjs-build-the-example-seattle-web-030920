// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartElements = document.querySelectorAll(".like-glyph")
const errorModal = document.getElementById("modal") 
// placeholder variables for current element 
let clickedHeart 
// Your JavaScript code goes here!
// add hidden class to modal
function errorTheModal() {
  const errorMsg = document.createElement("p")
  errorModal.classList.add("hidden")
  errorMsg.innerText = "Random server error. Try again."
  errorModal.appendChild(errorMsg)
}


// event Listeners 

function clickHeart(){

  heartElements.forEach(heart => {
    heart.onclick = function() {
      clickedHeart = heart
      serverHandler()
    }
  })
}



// event Handlers 

function serverHandler(){
  mimicServerCall()
  .then(heartHandler)
  .catch(errorHandler)
}
function heartHandler() {
  if (!(clickedHeart.innerText == FULL_HEART)) {
    clickedHeart.classList.add("activated-heart")
    clickedHeart.innerText = FULL_HEART
  } else {
    clickedHeart.innerText = EMPTY_HEART
    clickedHeart.classList.toggle("activated-heart")
  }
}

function errorHandler(resp){
  
  if (resp == "Random server error. Try again.") {
    toggleError()
    setTimeout(function(){toggleError()}, 5000)
  } 
}

// callbacks for Handlers

function toggleError(){
  errorModal.classList.toggle("hidden")
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


// call functions 
errorTheModal()
clickHeart()