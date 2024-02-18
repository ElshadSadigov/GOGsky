let data = []


// Whatsapp
const whatsapp = () =>{
    let number = 506609694;
    let url = "https://wa.me/" + number;
    window.open(url, "_blank")
}
// Whatsapp



// Search location
let locationText = document.querySelector('#locationText')
let optionsLocation = document.querySelector('.optionsLocation')

optionsLocation.onclick = function(){
    locationText.innerHTML = this.textContent
    locationText.parentElement.parentElement.classList.toggle("activeDiv")
}
// Search location

// Serach destination
let destinationText = document.querySelector('#destinationText')
let optionsDestination = document.querySelectorAll('.optionsDestination')

for(optionDestination of optionsDestination){
    optionDestination.onclick = function(){
        destinationText.innerHTML = this.textContent
        destinationText.parentElement.parentElement.classList.toggle('activeDiv')
    }
}
// Search destination

// Search guest
let clickGuest = document.querySelector('.clickGuest')
let guestText = document.querySelector('#guestText')
let listGuest = document.querySelector('#listGuest')
let adultCount = document.querySelector('#adultCount')
let adultIncrease = document.querySelector('#adultIncrease')
let adultDecrease = document.querySelector('#adultDecrease') 
let childIncrease = document.querySelector('#childIncrease')
let childDecrease = document.querySelector('#childDecrease')
let childCount = document.querySelector('#childCount')
let activeClass = document.querySelector('.activeClass')

adultIncrease.onclick = function(){
    adultCount.innerHTML = Number(adultCount.innerHTML) + 1
}
adultDecrease.onclick = function(){
    if(adultCount.innerHTML>0){
        adultCount.innerHTML = Number(adultCount.innerHTML) - 1
    }
}
childIncrease.onclick = function(){
    childCount.innerHTML = Number(childCount.innerHTML) + 1
}
childDecrease.onclick = function(){
    if(childCount.innerHTML>0){
        childCount.innerHTML = Number(childCount.innerHTML) - 1
    }
}

clickGuest.onclick = function(){
    clickGuest.parentElement.classList.toggle('activeDiv')
    if(activeClass.classList.contains('activeDiv')){
        guestText.innerHTML = guestText.innerHTML
    }else if(adultCount.innerHTML > 0){
        guestText.innerHTML = `${adultCount.innerHTML} adult, ${childCount.innerHTML} child`
    }
}
// Search guest

// Home Ratings
let ratingsText = document.querySelector('#ratingsText')
let optionsRatings = document.querySelectorAll('.optionsRatings')

for (optionRating of optionsRatings) {
    optionRating.onclick = function () {
        ratingsText.innerHTML = this.textContent
        ratingsText.parentElement.parentElement.classList.toggle("activeDiv")
    }
}
// Home Ratings

// Home Nutrition
let nutritionText = document.querySelector('#nutritionText')
let optionsNutritions = document.querySelectorAll('.optionsNutritions')

for (optionNutrition of optionsNutritions) {
    optionNutrition.onclick = function () {
        nutritionText.innerHTML = this.textContent
        nutritionText.parentElement.parentElement.classList.toggle("activeDiv")
    }
}
// Home Nutrition

// Home Nights
let nightText = document.querySelector('#nightText')
let optionsNights = document.querySelectorAll('.optionsNights')

for (optionNight of optionsNights) {
    optionNight.onclick = function () {
        nightText.innerHTML = this.textContent
        nightText.parentElement.parentElement.classList.toggle('activeDiv')
    }
}
// Home Nights


const clickDiv = document.querySelectorAll(".clickDiv")
clickDiv.forEach(e => {
    e.addEventListener('click', ()=>{
        e.parentElement.classList.toggle("activeDiv")
        console.log(locationText.innerHTML)
    })
})


const dropdown = document.querySelector(".dropdown")
const navbar = document.querySelector(".navbar")
dropdown.addEventListener('click', ()=>{
    dropdown.parentElement.classList.toggle("activeDown")
    navbar.style.transition = "300ms"
})


