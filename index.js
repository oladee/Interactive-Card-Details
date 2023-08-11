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
let btn = document.getElementById('btn')
const nameValidation = () => {
    let Names = names.value
    let validName = Names.match(/[0-9]/g)
    let error = ''
    if(validName){
        error = "Please Enter A Valid Name"
    }else{
        error = null
    }
    console.log(error)
    if(error){
        btn.setAttribute('disabled','disabled')
    }else{
        btn.removeAttribute('disabled')
    }
    if(names.value.length < 1){
        cardName.innerText = 'Jane Appleseed'
    }
    else{
        cardName.innerText = names.value
    }
}
names.addEventListener('input', nameValidation)
year.addEventListener('input', () => {
    let yearArr = year.value.split('')
    for(var i = 0; yearArr.length < 2; i++){
            yearArr.push('0')
    }
    let validatedNumber = yearArr.join('')
    let valid = validatedNumber.match(/[a-z]/ig)
})
month.addEventListener('input', () => {
    let monthArr = month.value.split('')
    for(var i = 0; monthArr.length < 2; i++){
            monthArr.push('0')
    }
    cardMonth.innerText = monthArr.join('')
})
number.addEventListener('input', () => {
    let numArr = number.value.split('')
    for(var i = 0; numArr.length < 16; i++){
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