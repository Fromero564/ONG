
const inputQuantity = document.querySelector ('.input-quantity')
const btnIncrement = document.querySelector ('#increment')
const btnDecrement = document.querySelector ('#decrement')

let valueByDeFault = parseInt (inputQuantity.value)

btnIncrement.addEventListener('click', () =>{
valueByDeFault += 1
inputQuantity.value = valueByDeFault
})

btnDecrement.addEventListener('click', () =>{
valueByDeFault = 1
inputQuantity.value = valueByDeFault
})

const toggleDescription = document.querySelector('.title-description');
const toggleAdittionalInformation = document.querySelector('.title-information-additional');
const toggleReviews = document.querySelector('.title-reviews');

const contentDescription = document.querySelector('.text-description');
const contentAdittionalInformation = document.querySelector('.text-aditional-information');
const contentReviews = document.querySelector('.text-reviews');

toggleDescription.addEventListener('click',()=>{
  contentDescription.classList.toggle('hidden')

})

toggleAdittionalInformation.addEventListener('click',()=>{
  contentAdittionalInformation.classList.toggle('hidden')

})


toggleReviews.addEventListener('click',()=>{
  contentReviews.classList.toggle('hidden')

})

