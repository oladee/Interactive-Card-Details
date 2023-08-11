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

// Name Validation function
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
// End of name validation function

// Window EVent listener acts as parent
window.addEventListener('load',()=>{
    btn.setAttribute('disabled','disabled')
    names.addEventListener('input', nameValidation)
})
// End of windows event listener function

year.addEventListener('input', () => {
    let yearArr = year.value.split('')
    let error = ''
    for(var i = 0; yearArr.length < 2; i++){
            yearArr.push('0')
    }
    let validatedNumber = yearArr.join('')
    let valid = validatedNumber.match(/[a-z]/ig)
    if(valid || year.value.length < 2){
        year.style.borderColor = 'red'
        error = 'Wrong Format'
    }else{
        year.style.borderColor = 'red'
        cardYear.innerText = validatedNumber
        error = 'null'
    }
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