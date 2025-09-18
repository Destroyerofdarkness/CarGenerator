



let user = {
    name: "Nielle",
    title: document.getElementById("title"),
    logIn(){
    this.title.innerHTML = `
    Good Morning ${this.name}
    `
    }
}

user.logIn()