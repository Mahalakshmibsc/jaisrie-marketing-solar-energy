/* COUNTER ANIMATION */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/50;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,40);

}else{

counter.innerText=target;

}

};

update();

});


/* SOLAR SAVINGS CALCULATOR */

function calculate(){

let bill=document.getElementById("bill").value;

let savings=bill*0.9;

document.getElementById("result").innerHTML=
"Estimated Monthly Savings: ₹"+Math.round(savings);

}
