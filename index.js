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
        names.style.borderColor = 'hsl(0, 100%, 66%)'
        error = "*Wrong Format Please Enter A Valid Name"
        btn.setAttribute('disabled')
        if(names.value.length < 1){
            cardName.innerText = 'Jane Appleseed'
        }
    }else{
        btn.removeAttribute('disabled')
        names.style.borderColor = 'hsl(278, 94%, 30%)'
        cardName.innerText = names.value
        error = null
    }
}
// End of name validation function

// Year Validation function
const yearValidation =  () => {
    let yearArr = year.value.split('')
    let error = ''
    for(var i = 0; yearArr.length < 2; i++){
            yearArr.push('0')
    }
    let validatedNumber = yearArr.join('')
    let valid = validatedNumber.match(/[a-z]/ig)
    if(valid || year.value.length < 2){
        btn.setAttribute('disabled','disabled')
        year.style.borderColor = 'red'
        error = 'Wrong Format'
    }else{
        btn.removeAttribute('disabled')
        year.style.borderColor = 'hsl(278, 94%, 30%)'
        error = 'null'
    }
    cardYear.innerText = validatedNumber
}
// End of Year Validation function

// Month validation begins
const monthValidation = () => {
    let monthArr = month.value.split('')
    for(var i = 0; monthArr.length < 2; i++){
            monthArr.push('0')
    }
    let validMonth = monthArr.join('')
    let valid = validMonth.match(/[a-z]/ig)
    console.log(valid)
    if(valid || month.value.length < 2)
    {
        btn.setAttribute('disabled', 'disabled')
        month.style.borderColor = 'red';
        let error = '*Wrong Format!';
        console.log(error)
    }
    else{
        btn.removeAttribute('disabled')
        month.style.borderColor = "hsl(278, 94%, 30%)"
        error = null
    }
    cardMonth.innerText = validMonth
}
// Month Validation ends

// CVV validation begins

const numberValidation = () => {
    let numArr = number.value.split('')
    for(var i = 0; numArr.length < 19; i++){
            numArr.push('0')
    }
    numArr[4] = ' ';
    numArr[9] = ' ';
    numArr[14] = ' ';
    let validNumber = numArr.join('')
    let valid = validNumber.match(/[a-z]/ig)
    if(valid || number.value.length < 19){
        btn.setAttribute('disabled','disabled')
        let error = '*Wrong Format!'
        number.style.borderColor = 'red'
        
    }else{
        btn.removeAttribute('disabled')
        error = null;
        number.style.borderColor = "hsl(278, 94%, 30%)"
    }
    cardNumber.innerText = validNumber
}

// CVV validation ends

// Window EVent listener acts as parent
window.addEventListener('load',()=>{
    btn.setAttribute('disabled','disabled')
    names.addEventListener('input', nameValidation)
    year.addEventListener('input', yearValidation)
    month.addEventListener('input', monthValidation)
    number.addEventListener('input', numberValidation)
})
// End of windows event listener function
cvv.addEventListener('input', () => {
    let cvvArr = cvv.value.split('')
    for(var i = 0; cvvArr.length < 3; i++){
            cvvArr.push(`0`)
    }
    cardCvv.innerText = cvvArr.join('')
})