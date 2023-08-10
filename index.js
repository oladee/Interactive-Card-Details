let names = document.getElementById('names');
let month = document.getElementById('month');
let year = document.getElementById('year');
let number = document.getElementById('number');
let cvv = document.getElementById('cvv');
let cardNumber = document.getElementById('cardNumber');
let cardName = document.getElementById('cardName');
let cardMonth = document.getElementById('cardMonth');
let cardYear = document.getElementById('cardYear');
let cardCvv = document.getElementById('cardCvv');
let form = document.getElementById('form');
names.addEventListener('input', () => {
    cardName.innerText = names.value
})
year.addEventListener('input', () => {
    cardYear.innerText = year.value
})
month.addEventListener('input', () => {
    cardMonth.innerText = month.value
})
number.addEventListener('input', () => {
    let numArr = number.value.split('')
    for(var i = 0; numArr.length < 14; i++){
            numArr.push('0')
    }
    cardNumber.innerText = numArr.join('')
})
cvv.addEventListener('input', () => {
    let cvvArr = cvv.value.split('')
    for(var i = 0; cvvArr.length < 3; i++){
            cvvArr.push(`0`)
    }
    cardCvv.innerText = cvvArr.join('')
    
})