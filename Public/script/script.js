const carsActive = [
  (KIA = {
    name: "KIA",
    seats: 5,
    image: "./img/KIA.avif",
  }),
  (Toyota = {
    name: "Toyota",
    seats: 5,
    image: "./img/toyota.png",
  }),
  (Lamborgini = {
    name: "Lamborghini",
    seats: 2,
    image: "./img/lambo.png",
  }),
];
function rm(list) {
  list.parentElement.remove();
}
let infoDiv = document.getElementById("carDiv");
function Mycar(cars) {
  
  //infoDiv.innerHTML += `<h6 id="carTitle">Your cars:</h6>`;

  for (let i = 0; i < cars; i++) {
    const licensePlate =
      "DB" + Math.floor(Math.random() * (1000 - 9999) + 9999);
    const Randomcar = Math.floor(Math.random() * carsActive.length);
    const seats = carsActive[Randomcar].seats;
    let car = carsActive[Randomcar].name;
    carImg = carsActive[Randomcar].image;
    const driven = Math.floor(Math.random() * (10000 - 100000) + 100000);
    let details = "Description";
    infoDiv.innerHTML += `<ul>
    <h1>My car details are:</h1>
    <li>You got ${car}</li>
    <img src="${carImg}" alt="Car">
    <button onclick="rm(this)">Remove</button>
    <li>License plate:${licensePlate}</li>
    <li>Seats: ${seats}</li>
    <li>KM driven: ${driven}km</li></ul>
    `;
  }
}




localStorage.clear();
