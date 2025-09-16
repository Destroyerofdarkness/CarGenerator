const carsActive = ["KIA", "Toyota", "Lamborgini"];

 function Mycar(cars){
    for(let i = 0;i<cars; i++){
    const licensePlate = "DB" + Math.floor(Math.random()* (1000 - 9999) + 9999);
    const Randomcar = Math.floor(Math.random()* carsActive.length);
    const seats = Math.floor(Math.random()* (4- 6) + 6)
    let car = carsActive[Randomcar];
    const driven = Math.floor(Math.random() *(10000-100000) + 100000)
    let details = "Description"
    localStorage.setItem(`${i+1}`, details)
    localStorage.setItem(`${i+1} Car`, car)
    localStorage.setItem(`${i+1} License plate`, licensePlate)
    localStorage.setItem(`${i+1} Seats`, seats)
    localStorage.setItem(`${i+1} KM driven:`, driven)
    let infoDiv = document.getElementById("div")
    
    infoDiv.innerHTML += `<ul>My car details are:
    <li>License plate:${licensePlate}</li>
    <li>Car: ${car}</li>
    <li>Seats: ${seats}</li>
    <li>KM driven: ${driven}km</li></ul>
    `;
    }
    document.querySelectorAll(".ranCars").forEach(div=>
    {
        div.style.display = "none"
    })
    }

localStorage.clear()
