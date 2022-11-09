// Objective: User has 3 chances, each chance consists of 2 clicks. If the 
// user finds a good ghost, then the click counter is NOT increased, but if the user finds
// a bad ghost, then the click counter is increased


const playerChances = 3;
const playerClicks = 0;
const doorsClicked = 0;
const ghosts = ["scary-ghost-1", "scary-ghost-1", "scary-ghost-1",
                "scary-ghost-2", "scary-ghost-2", "scary-ghost-2", 
                "casper", "casper", "casper", "casper"]


const doorsContainer = document.querySelector("#doors-container")
const firstName = "Roger"

doorsContainer.addEventListener("click", function(event){
  // Opens the door
  event.target.src = "./images/opened-door.png"
  // Injects the ghost
  event.target.insertAdjacentHTML("afterend", `<img src="images/${ghosts[doorsClicked].png}" class="ghost" alt="bad ghost">`)
  // Determine if the user found a friendly ghost or a scary ghost

})


