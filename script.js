const doorsContainer = document.querySelector("#doors-container")

doorsContainer.addEventListener("click", function(event){
  event.target.src = "./images/opened-door.png"
})
