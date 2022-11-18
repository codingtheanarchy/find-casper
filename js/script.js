import { gameResults } from "./results.js" 

let playerChances = 3
let playerStrikes = 0
let scaryGhostCounter = 0
let friendlyGhostCounter = 0

// Keeps track of how many doors the players has opened
let doorsClicked = 0
const ghosts = [
  'scary-ghost-1',
  'scary-ghost-1',
  'scary-ghost-1',
  'scary-ghost-2',
  'scary-ghost-2',
  'scary-ghost-2',
  'casper',
  'casper',
  'casper',
  'casper',
]

const doorsContainer = document.querySelector('#doors-container')
const scaryScore = document.querySelector('#scary-score')
const friendlyScore = document.querySelector('#friendly-score')

doorsContainer.addEventListener('click', function (event) {
  let randomNumber = Math.floor(Math.random() * 10)
  // Opens the door
  event.target.src = './images/opened-door.png'

  // Injects the ghost
  event.target.insertAdjacentHTML(
    'afterend',
    `<img src="images/${ghosts[randomNumber]}.png" class="ghost" alt="bad ghost">`
  )

  // Determine if a random ghost is scary, then increment the strike counter
  if (
    ghosts[randomNumber] === 'scary-ghost-1' ||
    ghosts[randomNumber] === 'scary-ghost-2'
  ) {
    // Increase the player strikes
    playerStrikes++
    // if the strike counter equals 2, then reset the strike counter
    if (playerStrikes === 2) {
      // Reset Chances
      playerChances--
      // Reset player strikes
      playerStrikes = 0
    }
      // Update scary score
      scaryGhostCounter++
      // Update UI
      scaryScore.textContent = scaryGhostCounter
      // TODO: Check if chances equal zero, then run imported module function 
  } else {
      // Update friendly score
      friendlyGhostCounter++
      // Update UI
      friendlyScore.textContent = friendlyGhostCounter
  }
})
