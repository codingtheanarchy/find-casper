// TODO: When user opens door to scary ghost add 10 to progress bar
// TODO: Create a randomized array of 10 url strings containing "casper.jpeg", "scary-ghost-1.jpg",
//       and "scary-ghost-2.jpg", then map the indexes to the order the door elements display in html 
// TODO: Inject text content into h2 within the results container

const ghosts = ["bad-ghost1.jpg", "bad-ghost2.jpg", "bad-ghost1.jpg",
                "bad-ghost2.jpg", "bad-ghost1.jpg", "bad-ghost2.jpg", "bad-ghost1.jpg"]

function shuffleGhosts() {
  const friendlyGhostIndexes = [];
  for(let i = 1; i <= 3; i++) {
    // Generate random index for friendly ghost 
    let index = Math.floor(Math.random() * 9)
    // Verify and potentially reassign index with new number if it was previously generated
    while(friendlyGhostIndexes.includes(index)) {
      console.log(`Friendly ghost array already contains the number: ${index}`, friendlyGhostIndexes)
      // Regenerate new index due to duplication
      index = Math.floor(Math.random() * 9)
    } 
    friendlyGhostIndexes.push(index)
  }
  console.log(friendlyGhostIndexes)
}
