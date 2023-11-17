let name = prompt("Nome");
console.log(name);

let surname = prompt('Cogome');
console.log(surname);

let fav_clr = prompt('Colore preferito');
console.log(fav_clr);

document.getElementById("password").innerHTML = `${name}`+`${surname}`+`${fav_clr}`+'23';


