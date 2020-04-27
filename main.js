// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let heart = document.querySelectorAll("span.like-glyph")
heart.forEach(element => element.innerHTML = '♡')

for (let glyphicon of heart){
  glyphicon.addEventListener('click', function(e){
  mimicServerCall()
  .then(json => {
    if (glyphicon.textContent == '♡'){
    glyphicon.innerHTML = '♥'
    glyphicon.classList.toggle("activated-heart")
  }
  else{
    glyphicon.innerHTML = '♡'
    glyphicon.classList.toggle("activated-heart")
  }
})
.catch(error=> {
    document.body.querySelector("div > h2").innerText = error.message
    setTimeout(() => {
      document.getElementById('modal').classList.toggle("hidden")}, 5000)
    document.getElementById('modal').classList.toggle("hidden")
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
