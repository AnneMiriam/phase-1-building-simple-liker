// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//! Your JavaScript code goes here!
//  Global Variables //
const likeIcons = document.querySelectorAll('.like-glyph');
const modal = document.getElementById('modal');

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }

//? Add event listener to the click on .like-glyph
likeIcons.forEach(span => span.addEventListener('click', handleHeartClick))

function handleHeartClick(e){
  mimicServerCall()
  .then(() => handleSuccess(e.target))
  .catch(handleError)
}

function handleSuccess(heartSpan) {
  if (heartSpan.textContent === EMPTY_HEART){
    heartSpan.textContent = FULL_HEART;
    heartSpan.classList.add('activated-heart')
  } else {
    heartSpan.textContent = EMPTY_HEART;
    heartSpan.classList.remove('activated-heart')
 }
}

function handleError(message){
  modal.classList.remove('hidden');
  modal.textContent = message;
  setTimeout(() => modal.classList.add('hidden'), 3000)
    // modal.className = "";
    // modal.innerText = message;
    // setTimeout(() => modal.className = "hidden", 3000);
}


// for (let i = 0; i < likeIcons.length; i++){
//   likeIcons[i].addEventListener('click', () => {
//     mimicServerCall()
//     .then(() => {
//       likeIcons.forEach(heart => {
//         if (heart.textContent === FULL_HEART){
//           heart.textContent = EMPTY_HEART;
//           heart.classList.remove('activated-heart')
//         } else {
//         heart.textContent = FULL_HEART
//         heart.classList.add('activated-heart');
//       }
//       });
      
//     })
//     .catch(error => {
//       modal.className = "";
//       modal.innerText = error;
//       setTimeout(() => modal.className = "hidden", 3000);
//     })
//   })
// }



//  Submit to a mocked up server; Call mimicServerCall() for the mock server
//  A hidden modal (line11 of index.html) pops up an error message, turn on/off hidden



// Update the DOM based on mock server's response (empty heart turns to full red heart)
//  There is a .activated-heart in CSS, turn on/off with clicks



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
};
