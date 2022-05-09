// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let serverError = document.querySelector("#modal-message");
let heartGlyph = document.querySelectorAll(".like-glyph");

let hidden = document.querySelector("#modal");
hidden.classList.add("hidden");

heartGlyph.forEach((e) => {
  e.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (e.textContent !== '♥') {
          e.classList.add("activated-heart");
          e.textContent = '♥';
        }
        else if (e.textContent === '♥') {
          e.textContent = EMPTY_HEART;
          e.classList.remove('♡')
        }
      })
      .catch((error) => {
        hidden.classList.remove("hidden");
        serverError.textContent = error;
        setTimeout(hide, 3000);
      })
  })
})

function hide() {
  return hidden.classList.add("hidden");
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
