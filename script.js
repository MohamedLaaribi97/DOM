var total = 0;
let t1 = parseInt(document.getElementById("P1").innerText);
let q1 = parseInt(document.getElementById("qtt1").innerText);
let t2 = parseInt(document.getElementById("P2").innerText);
let q2 = parseInt(document.getElementById("qtt2").innerText);
let t3 = parseInt(document.getElementById("P3").innerText);
let q3 = parseInt(document.getElementById("qtt3").innerText);

function addQtt(id) {
  let x = document.getElementById(id).innerText;
  let y = parseInt(x);
  y++;
  document.getElementById(id).innerText = y;
}
var currentQtt = 0;
function decQtt(id) {
  
  let x = document.getElementById(id).innerText;
   currentQtt =  parseInt(x); 
  let y = parseInt(x);
  y--;
  if (y <= 0) y = 0;
  document.getElementById(id).innerText = y;
}
let icons = document.getElementsByClassName("bi-heart");

function switchcolor(event) {
  event.preventDefault();
  if (event.target.style.color !== "red") {
    event.target.style.color = "red";
  } else {
    event.target.style.color = "black";
  }
}

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", switchcolor);
}

document.getElementById("total").innerText = total + " TND";

function tot(a, b) {
  a = 1;
  total += a * b;
  document.getElementById("total").innerText = total + " TND";
}

function totm(a, b, qt) {
  a = 1;
  na = document.getElementById(qt).innerText;
  if (na> 0) {
    console.log("current na =" + na);
    total -= a * b;
    document.getElementById("total").innerText = total + " TND";
    console.log(a);
  }
}

function deleteitem(id, x, idqtt) {
  let y = document.getElementById(idqtt).innerText;
  document.getElementById(id).remove();
  total -= y * x;
  document.getElementById("total").innerText = total + " TND";
}
