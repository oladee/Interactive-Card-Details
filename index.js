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
window.addEventListener('load',()=>{
    btn.setAttribute('disabled','disabled')
})
const nameValidation = () => {
    let Names = names.value
    let validName = Names.match(/[0-9]/g)
    let error = ''
    if(validName || names.value.length < 1){
        error = "Wrong Format Please Enter A Valid Name"
    }else{
        cardName.innerText = names.value
        error = null
    }
    if(error){
        btn.setAttribute('disabled','disabled')
    }else{
        btn.removeAttribute('disabled')
    }
}
names.addEventListener('focusout', nameValidation)
year.addEventListener('input', () => {
    let yearArr = year.value.split('')
    for(var i = 0; yearArr.length < 2; i++){
            yearArr.push('0')
    }
    let validatedNumber = yearArr.join('')
    let valid = validatedNumber.match(/[a-z]/ig)
    if(valid){
        let error = 'Wrong Format'
    }else{
        error = 'null'
    }
    // if(year.value)
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