// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// add hidden to error
document.getElementById('modal').classList.add("hidden")
let posts = document.getElementsByClassName("like")
for(let post of posts) {
  post.addEventListener('click', function(){
    // mimic server call
    mimicServerCall()
    .then(function(){
      let glyph = post.getElementsByClassName('like-glyph')[0]
      if (glyph.innerText == EMPTY_HEART) {
        glyph.innerText = FULL_HEART
        glyph.classList.add('activated-heart')
      } else if (glyph.innerText == FULL_HEART) {
        glyph.innerText = EMPTY_HEART
        glyph.classList.remove('activated-heart')
      }
    })
    .catch(error => {
      setTimeout(function(){
        document.getElementById('modal').classList.toggle("hidden")
      }, 5000)
      document.getElementById('modal').classList.toggle("hidden")
    })
    // when call fails, catch and remove hidden class from modal
  
    // setTimeout to 5 sec, then hide error
  
    // on success, toggle heart by adding/removing .activated-heart class
  
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
