const form = document.querySelector('#newsletter-form');
const card_1 = document.querySelector('.card');
const card_2 = document.querySelector('.card_2');
const submittedEmail = document.querySelector('#submitted-email');
const dismiss = document.querySelector('#dismiss');

function updateSuccessMessage(email){
    //update the strong tag with email
    submittedEmail.textContent = email;
}
function isValidEntry(str){
// validate email
const reg = (/^[A-Za-z0-9_][a-zA-Z]+[A-Za-z0-9_\-\.]*@?[a-zA-Z]{2,10}\.[a-z]{2,10}$/);
return reg.test(str);
}
function displayError(){
const errorMss = document.querySelector("#error-message");
const input = document.querySelector("#email");
errorMss.classList.remove("hide");
input.classList.add("error");
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('#email')
    const valid = isValidEntry(email.value);
    if (!valid){
        displayError();
    }
    if (valid){ 
        updateSuccessMessage(email.value);
    card_1.classList.add('hide')
    card_2.classList.remove('hide')
    }

});
dismiss.addEventListener("click", () => {
    card_1.classList.remove('hide')
    card_2.classList.add('hide')
    updateSuccessMessage("");
});