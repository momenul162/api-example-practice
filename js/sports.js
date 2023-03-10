const loadSports = () => {
  const url = `https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=Arsenal_vs_Chelsea`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySports(data.event));
};

const displaySports = (events) => {
  const sportsContainer = document.getElementById("sports-container");
  events.forEach((event) => {
    console.log(event);
    const sportsDiv = document.createElement("div");
    sportsDiv.classList.add("events");
    sportsDiv.setAttribute("onclick", `loadDelete(${event.idEvent})`);
    sportsDiv.innerHTML = `
    <h3>Event: ${event.strEvent}</h3>
    <p>${event.strLeague}</p>
    <p>${event.strFilename}</p>
    `;
    sportsContainer.appendChild(sportsDiv);
  });
};
const loadDelete = (idEvent) => {};

loadSports();
