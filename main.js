// CONSTANTS
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorDiv= document.getElementById("modal")
const spans= document.querySelectorAll(".like-glyph")

errorDiv.classList.add("hidden")

spans.forEach (btn=> {
  btn.addEventListener("click", function(e){
    mimicServerCall()
      .then(resp=> {
        if (e.target.innerText==FULL_HEART){
          e.target.innerText=EMPTY_HEART
        }
        else {
        e.target.innerText=FULL_HEART
        }
        e.target.classList.toggle("activated-heart")
      })
      .catch(error => {error_handle(error)})
  })
})

// EVENT HANDLERS

function error_handle(error){
  errorDiv.classList.toggle("hidden")
  let p=document.createElement("p")
  p.innerText= error
  errorDiv.appendChild(p)
  setTimeout(function(){errorDiv.classList.toggle("hidden") }, 5000)
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