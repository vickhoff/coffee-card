import './reset.css'
import './style.css'

const number = document.getElementById("number")
const button = document.getElementById("add-coffee")
//let totalCoffees = 0;
const savedCoffees = localStorage.getItem('coffees')
let totalCoffees = savedCoffees ? JSON.parse(savedCoffees) : 0;

number.textContent = totalCoffees;

localStorage.setItem('coffees', JSON.stringify(totalCoffees));

const addCoffee = () => {
  if (totalCoffees < 10) {
    totalCoffees += 1
    number.textContent = totalCoffees
    localStorage.setItem('coffees', JSON.stringify(totalCoffees))
    document.documentElement.style.cssText = "--animation: font-thickness ease-in-out 3s infinite alternate;"
    
    // Check if we just hit 10 (after incrementing)
    if (totalCoffees === 10) {
      button.textContent = "Buy new card"
      document.documentElement.style.cssText = "--animation: font-thickness-buy-new-card ease-in-out 0.5s infinite alternate;"
    } else {
      button.textContent = "Add coffee"
    }
    
  } else if (totalCoffees === 10) {
    // This runs when they click "Buy new card"
    totalCoffees = 0
    number.textContent = totalCoffees
    button.textContent = "Add coffee"
    localStorage.setItem('coffees', JSON.stringify(totalCoffees))
    document.documentElement.style.cssText = "--animation: font-thickness ease-in-out 3s infinite alternate;"
  }
  console.log(totalCoffees)
}

button.addEventListener("click", addCoffee)

