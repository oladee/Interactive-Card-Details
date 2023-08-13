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
let btn = document.getElementById('btn');
let errormsg1 = document.getElementById('errormsg1')
let errormsg2 = document.getElementById('errormsg2')
let errormsg3 = document.getElementById('errormsg3')
let errormsg4 = document.getElementById('errormsg4')
let errormsg5 = document.getElementById('errormsg5')
let thankYou = document.getElementById('thankYou')

// Name Validation function
const nameValidation = () => {
    let Names = names.value
    let validName = Names.match(/[0-9]/g)
    let error = ''
    if(validName || names.value.length < 1){
        names.style.borderColor = 'hsl(0, 100%, 66%)'
        error = "*Wrong Format Please Enter A Valid Name"
        btn.setAttribute('disabled','disabled')
        if(names.value.length < 1){
            cardName.innerText = 'Jane Appleseed'
        }
    }else{
        btn.removeAttribute('disabled')
        names.style.borderColor = 'hsl(278, 94%, 30%)'
        cardName.innerText = names.value
        error = null
    }
    console.log(error)
    errormsg1.innerText = error
}
// End of name validation function

// CardNumber validation begins

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
    let error = ''
    if(valid || number.value.length < 19){
        btn.setAttribute('disabled','disabled')
         error = '*Wrong Format Please enter in correct format space inclusive!'
        number.style.borderColor = 'red'
        if(number.value.length < 1){
            error = "*Empty Field"
        }
        
    }else{
        btn.removeAttribute('disabled')
        error = null;
        number.style.borderColor = "hsl(278, 94%, 30%)"
    }
    cardNumber.innerText = validNumber
    errormsg2.innerText = error
}

// CardNumber validation ends



// Month validation begins
const monthValidation = () => {
    let monthArr = month.value.split('')
    for(var i = 0; monthArr.length < 2; i++){
            monthArr.push('0')
    }
    let validMonth = monthArr.join('')
    let valid = validMonth.match(/[a-z]/ig)
    let error = ''
    if(valid || month.value.length < 2)
    {
        btn.setAttribute('disabled', 'disabled')
        month.style.borderColor = 'red';
        error = '*Wrong Format!';
        console.log(error)
        if(month.value.length < 1){
            error = "*Empty Field"
        }
    }
    else{
        btn.removeAttribute('disabled')
        month.style.borderColor = "hsl(278, 94%, 30%)"
        error = null
    }
    cardMonth.innerText = validMonth
    errormsg3.innerText = error
}
// Month Validation ends

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
        error = '*Wrong Format!'
        if(year.value.length < 1){
            error = "*Empty Field"
        }
    }else{
        btn.removeAttribute('disabled')
        year.style.borderColor = 'hsl(278, 94%, 30%)'
        error = null
    }
    cardYear.innerText = validatedNumber
    errormsg4.innerText = error
}
// End of Year Validation function



// Cvv Validation Begins

const cvvValiadtion = () => {
    let cvvArr = cvv.value.split('')
    for(var i = 0; cvvArr.length < 3; i++){
            cvvArr.push(`0`)
    }
    let validCvv = cvvArr.join('')
    let valid = validCvv.match(/[a-z]/ig)
    let error = ''
    if(valid || cvv.value.length < 3){
        cvv.style.borderColor = 'red'
        error = '*Wrong Format!'
        btn.setAttribute('disabled','disabled')
        if(cvv.value.length < 1){
            error = "*Empty Field"
        }
    }else{
        cvv.style.borderColor = 'hsl(278, 94%, 30%)'
        error = null
        btn.removeAttribute('disabled')
    }
    cardCvv.innerText = validCvv
    errormsg5.innerText = error
}

// Cvv Validation ends

// Window EVent listener acts as parent
window.addEventListener('load',()=>{
    btn.setAttribute('disabled','disabled')
    names.addEventListener('input', nameValidation)
    names.addEventListener('focusout', nameValidation)
    year.addEventListener('input', yearValidation)
    year.addEventListener('focusout', yearValidation)
    month.addEventListener('input', monthValidation)
    month.addEventListener('focusout', monthValidation)
    number.addEventListener('input', numberValidation)
    number.addEventListener('focusout', numberValidation)
    cvv.addEventListener('input',cvvValiadtion)
    cvv.addEventListener('focusout',cvvValiadtion)
})

// End of windows event listener function
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    form.style.display = 'none'
    thankYou.style.display = 'flex'
})
