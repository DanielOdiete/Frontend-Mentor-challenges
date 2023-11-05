// output element
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");

// submit button
const submit_btn = document.querySelector(".submit-btn");

// input element
let isValid = false;
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

// error element
const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");
const span_error1 = document.querySelector("#span-id1");
const span_error2 = document.querySelector("#span-id2");
const span_error3 = document.querySelector("#span-id3");
const input_error1 = document.querySelector("#input-id1");
const input_error2 = document.querySelector("#input-id2");
const input_error3 = document.querySelector("#input-id3");
// submit button 
submit_btn.addEventListener("click", calculateDate);

// input validation
input_day.addEventListener("input", (e)=>{
    if(+input_day.value > 31){
        error_day.textContent = "Must be a valid date";
        span_error1.classList.add('span-error');
        input_day.classList.add('input-error');
        isValid = false;
        return;
    }
    else{
        isValid = true;
        span_error1.classList.remove('span-error');
        input_day.classList.remove('input-error');
        error_day.textContent = "";
    }
    if(+input_day.value === 0){
        error_day.textContent = "This field is required";
        span_error1.classList.add('span-error');
        input_day.classList.add('input-error');
        isValid = false;
        return;
    }
    else{
        error_day.textContent = "";
        span_error1.classList.remove('span-error');
        input_day.classList.remove('input-error');
    }
});
input_month.addEventListener("input", (e)=>{
    if(+input_month.value > 12){
       error_month.textContent = "Must be a valid date";
       span_error2.classList.add('span-error');
       input_month.classList.add('input-error');
        isValid = false;
        return;
    }
    else{
        isValid = true;
       error_month.textContent = "";
       span_error2.classList.remove('span-error');
       input_month.classList.remove('input-error');
       
    }
    if(+input_month.value === 0){
       error_month.textContent = "This field is required";
       span_error2.classList.add('span-error');
       input_month.classList.add('input-error');
        isValid = false;
        return;
    }
    else{
        error_day.textContent = "";
        span_error2.classList.remove('span-error')
        input_month.classList.remove('input-error');;
    }
});
input_year.addEventListener("input", (e)=>{
    if(+input_year.value > 2023){
        error_year.textContent = "Must be a valid date";
        span_error3.classList.add('span-error');
        input_year.classList.add('input-error');
        isValid = false;
        return;
    }
    else{
        isValid = true;
        error_year.textContent = "";
        span_error3.classList.remove('span-error');
        input_year.classList.remove('input-error');        
    }
    if(+input_year.value === 0){
        error_year.textContent = "This field is required";
        span_error3.classList.add('span-error');
        input_year.classList.add('input-error');
        isValid = false;
        return;
    }
    else{
        error_year.textContent = "";
        span_error3.classList.remove('span-error');
        input_year.classList.remove('input-error');
    }
});

// calculate Age
function calculateDate() {
    if (isValid) {
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        console.log(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() -1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();
        // DISPLAY OUTPUT
        output_year.textContent = ageYears;
        output_month.textContent = ageMonth;
        output_day.textContent = ageDay;
    }
    else{
        alert("All the fields are required!");
        span_error1.classList.add('span-error');
        input_day.classList.add('input-error');
        span_error2.classList.add('span-error');
        input_month.classList.add('input-error');
        span_error3.classList.add('span-error');
        input_year.classList.add('input-error');
    }
};