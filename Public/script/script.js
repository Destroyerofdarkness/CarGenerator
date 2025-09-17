const carsActive = [
  KIA ={
  name: "KIA",
  seats:5,
  image: "./img/KIA.avif"
}, 
Toyota = {
  name: "Toyota",
  seats: 5,
  image: "./img/toyota.png"
},
Lamborgini ={
  name: "Lamborghini",
  seats: 2,
  image: "./img/lambo.png"
}];

const carImgs = [["./img/KIA.avif"], ["./img/toyota.png"], ["./img/lambo.png"]];
const models = [["Kia 3","Kia2"],["Toyota 2, Toyota 2"],["Lambo 1"]]

function Mycar(cars) {
  let infoDiv = document.getElementById("carDiv");
  
  infoDiv.innerHTML += `<h6 id="carTitle">Your cars:</h6>`
  for (let i = 0; i < cars; i++) {
    const licensePlate = "DB" + Math.floor(Math.random() * (1000 - 9999) + 9999);
    const Randomcar = Math.floor(Math.random() * carsActive.length); 
    const seats = carsActive[Randomcar].seats;
    let car = carsActive[Randomcar].name;
    carImg = carsActive[Randomcar].image;
    const driven = Math.floor(Math.random() * (10000 - 100000) + 100000);
    let details = "Description";
    localStorage.setItem(`${i + 1}`, details);
    localStorage.setItem(`${i + 1} Car`, car);
    localStorage.setItem(`${i + 1} License plate`, licensePlate);
    localStorage.setItem(`${i + 1} Seats`, seats);
    localStorage.setItem(`${i + 1} KM driven:`, driven);
    infoDiv.innerHTML += `<ul>
    <h1>My car details are:</h1>
    <li>You got ${car}</li>
    <img src="${carImg}" alt="Car">
    <li>License plate:${licensePlate}</li>
    <li>Seats: ${seats}</li>
    <li>KM driven: ${driven}km</li></ul>
    `;
  }
  document.querySelectorAll(".ranCars").forEach((div) => {
    div.style.display = "none";
  });
}

localStorage.clear();
