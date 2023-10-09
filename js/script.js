//algorithm
/*
-ask the user for the kilometres to travel (first variable)
-ask the user for the age of the passenger (second variable)
-create a variable for the price per km
-create a variable for under18 price
-create a variable for over65 price
-write a conditional statement with the full price and the 2 discount price:
-- if age < 18 apply -20%
   if age >= 18 && <= 65 apply full price
   if age > 65 apply -40%

-print proce with 2 decimal number    
*/


let km = parseInt(prompt ('Insert travel kilometres'));
let age = parseInt(prompt('Insert passenger age'));
let myDiv = document.getElementById('text');

if (isNaN(km) || isNaN (age)){
  myDiv.innerHTML = 'You must insert numbers!';
}

document.getElementById('km').innerHTML += ` ${km}`;
document.getElementById('age').innerHTML += ` ${age}`;

let price_km = 0.21;
let price_u18 = 0.21 * 4 / 5;  //price with -20% discount
let price_o65 = 0.21 * 3 / 5;  //price with -40% discount


if (age < 18){
  document.getElementById('ticket_price').innerHTML += (km * price_u18).toFixed(2);
} else if ((age >= 18) && (age < 65)){
  document.getElementById('ticket_price').innerHTML += (km * price_km).toFixed(2);
} else if (age > 65){
  document.getElementById('ticket_price').innerHTML += (km * price_o65).toFixed(2);
}
