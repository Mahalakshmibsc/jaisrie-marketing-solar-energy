/* COUNTER ANIMATION */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

counter.innerText = '0';

const updateCounter = () => {

const target = +counter.getAttribute('data-target');

const c = +counter.innerText;

const increment = target / 200;

if(c < target){

counter.innerText = `${Math.ceil(c + increment)}`;

setTimeout(updateCounter,10);

}else{

counter.innerText = target;

}

};

updateCounter();

});


/* ROI CALCULATOR */

function calculate(){

let bill = document.getElementById("bill").value;

let system = bill/1500;

let savings = bill*12*25;

document.getElementById("result").innerHTML =

"Recommended System: "+system.toFixed(1)+" kW <br> Estimated 25 Year Savings: ₹"+savings;

}


/* LANGUAGE SWITCH */

function toggleLanguage(){

document.querySelectorAll(".lang-en").forEach(el=>el.classList.toggle("hidden"))

document.querySelectorAll(".lang-ta").forEach(el=>el.classList.toggle("hidden"))

}


/* LEAD FORM */

document.getElementById("leadForm").addEventListener("submit",function(e){

e.preventDefault()

alert("Thank you! Our solar team will contact you.")

})
