const playerUI = {
  body: document.querySelector("body"),
  main: document.querySelector("main"),
  dashboard: document.querySelector('#dashboard'),
  doors: document.querySelector('#doors-container'),
}

const content = {
  gameover: {
    heading: "GAME OVER",
    paragraph: "The Grim Reaper doesn't disapper...he catches up!",
    reaperImage: "./images/reaper/gameover-reaper.gif"
  },
  winner: {
    heading: "YOU SAVED CASPER",
    paragraph: "I am not cute. I am the dreaded Grim Reaper. People fear me, you know. Theres a whole song about it.",
    reaperImage: "./images/reaper/tropical-reaper.gif"
  }
}

function displayResults(screen) {
  // Remove casper ghost background
  playerUI.body.style.background = 'black'
  // Dont display dashboard or doors <sections>
  playerUI.dashboard.style.display = 'none'
  playerUI.doors.style.display = 'none'

  playerUI.main.insertAdjacentHTML("afterbegin", `<section id="results-container" class="${screen}"> <div id="heading-box"> <h2 class="${screen}">${content[screen].heading}</h2> <p class="${screen}">${content[screen].paragraph}</p> </div> <div id="reaper-box" class="${screen}"> <img class="${screen}" src="${content[screen].reaperImage}" alt="Grim Reaper"> </div> </section>`)

}

export { displayResults }
