// iNPUT
const numberInp = document.getElementById('card_number');
const nameInp = document.getElementById('card_name');
const monthInp = document.getElementById('card_MM');
const yearInp = document.getElementById('card_YY');
const cvcInp = document.getElementById('card_cvv');


// DISPLAY
const cardNumber = document.getElementById('number');
const cardName = document.getElementById('name');
const cardMonth = document.getElementById('month');
const cardYear = document.getElementById('year');
const cardCvc = document.getElementById('cvc');

// BUTTONS
const submitBtn = document.getElementById('submit_btn');
const thankBtn = document.getElementById('thank-btn');

// SUCCESS PAGE
const completed = document.querySelector('.thank');

// FORM
const form = document.querySelector('form');

// CHANGES CARD VALUE AND VALIDATES
function setCardNumber(e){
    cardNumber.innerText = format(e.target.value);
}
function setCardName(e){
    cardName.innerText = e.target.value;
}
function setCardMonth(e){
    cardMonth.innerText = e.target.value;
    if(monthInp.value == "") {
        cardMonth.innerText = "00";

    }if(monthInp.value > 12 || monthInp.value < 0) {
        monthInp.classList.add("invalid");
        monthInp.parentElement.classList.add("invalid_message");
        return;
    }
    if(monthInp.value < 12 || monthInp.value == 12 || monthInp.value > 0) {
        monthInp.classList.remove("invalid");
        monthInp.parentElement.classList.remove("invalid_message");
        return;
    }
    else{
        console.log(err);
    }
}
function setCardYear(e){
    cardYear.innerText = e.target.value;
    if(yearInp.value == "") {
        cardYear.innerText = "00";
    }else{
        console.log(err);
    }

}
function setCardCvc(e){
    cardCvc.innerText = e.target.value;
}

// PARTITIONS CARD NUMBER INTO GROUPS OF 4
function format(s){
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

// DISPLAYS ERRORS
function handleSubmit(e){
    e.preventDefault();
    if(!nameInp.value){
        nameInp.classList.add("error");
        nameInp.parentElement.classList.add("error_message");
    }
    else{
        nameInp.classList.remove("error");
        nameInp.parentElement.classList.remove("error_message");
    }
    if(!numberInp.value){
        numberInp.classList.add("error");
        numberInp.parentElement.classList.add("error_message");
    }
    else{
        numberInp.classList.remove("error");
        numberInp.parentElement.classList.remove("error_message");
    }
    if(!monthInp.value){
        monthInp.classList.add("error");
        monthInp.parentElement.classList.add("error_message");
    }
    else{
        monthInp.classList.remove("error");
        monthInp.parentElement.classList.remove("error_message");
    }
    if(!yearInp.value){
        yearInp.classList.add("error");
        yearInp.parentElement.classList.add("error_message");
    }
    else{
        yearInp.classList.remove("error");
        yearInp.parentElement.classList.remove("error_message");
    }
    if(!cvcInp.value){
        cvcInp.classList.add("error");
        cvcInp.parentElement.classList.add("error_message");
    }
    else{
        cvcInp.classList.remove("error");
        cvcInp.parentElement.classList.remove("error_message");
    }
    if(nameInp.value && numberInp.value && monthInp.value && yearInp.value && cvcInp.value) {
        completed.classList.remove('hidden');
        form.classList.add('hidden');
    }
}

// REDIRECTS BACK TO FORM
function handleReturn(e){
        completed.classList.add('hidden');
        form.classList.remove('hidden');
        numberInp.value = "";
        nameInp.value = "";
        monthInp.value = "";
        yearInp.value = "";
        cvcInp.value = "";
        cardNumber.innerText = "0000 0000 0000 0000";
        cardName.innerText = "Jane Appleseed";
        cardMonth.innerText = "00";
        cardYear.innerText = "00";
}

// EVENT LISTENERS
numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
thankBtn.addEventListener("click", handleReturn);
