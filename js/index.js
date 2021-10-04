let veg = document.getElementById("veg");
let nonveg = document.getElementById("nonveg");
let starter = document.getElementById("starter");
let biryani = document.getElementById("biryani");

function showVeg(){
    starter.style.display= "none";
    nonveg.style.display= "none";
    biryani.style.display= "none";
    veg.style.display="block";
}

function showNonVeg() {
    starter.style.display= "none";
    nonveg.style.display= "block";
    biryani.style.display= "none";
    veg.style.display="none";
}
function showBiryani() {
    starter.style.display= "none";
    nonveg.style.display= "none";
    biryani.style.display= "block";
    veg.style.display="none";
}
function showStarter() {
    starter.style.display= "block";
    nonveg.style.display= "none";
    biryani.style.display= "none";
    veg.style.display="none";
}


let sortDirection = false;
let starterMenu= [
    {name: 'Rosted Papad', price: 10},
    {name: 'Masala Papad', price: 20},
    {name: 'Bombil Fry', price: 180},
    {name: 'Lolipop', price: 200},
    {name: 'Sukka Chicken', price: 200},
    {name: 'Mutton Chicken', price: 260},
    {name: 'Kothimbir vadi', price: 100},
    {name: 'Masvadi Fry', price: 200},
];

let biryaniMenu = [
    {name: "Chicken Dum Biryani", half: 240, full: 350},
    {name: "Mutton Dum Biryani", half: 260, full: 380},
    {name: "Veg Biryani", half: 200, full: 300},
];

let vegMenu= [
    {name: "pithala Bhakar", price: 160},
    {name: "Veg kurma", price: 200},
    {name: "bhindi Masala", price: 160},
    {name: "mix veg", price: 180},
    {name: "paneer butter masala", price: 200},
    {name: "green peas masala", price: 160},
    {name: "veg kolhapuri", price: 180},
    {name: "matki masala", price: 170},
    {name: "baingan masala", price: 160},
    {name: "soyabin masala", price: 160},
    {name: "dal fry", price: 140},
    {name: "akhha masoor", price: 160},
    {name: "methi masala", price: 160}
    
]
let nonvegMenu= [
    {name: "Chicken thakli", price: 160},
    {name: "pithala Bhakar", price: 160},
    {name: "pithala Bhakar", price: 160},
    {name: "pithala Bhakar", price: 160},
    {name: "pithala Bhakar", price: 160},

]



function loadStarterTable(starterMenu) {
    const tableBody = document.getElementById('starterMenu');
    let dataHtml = '';
    
    for( let start of starterMenu){
        dataHtml += `<tr>
        <td colspan="2">${start.name}</td>
        <td >${start.price}/-</td>
        </tr>`
    }
    console.log(dataHtml)
    
    tableBody.innerHTML = dataHtml;
}
loadStarterTable(starterMenu);




function loadBiryaniTable(biryaniMenu) {
    const tableBody = document.getElementById('biryaniMenu');
    let dataHtml = '';
    
    for( let start of biryaniMenu){
        dataHtml += `<tr>
        <td colspan="2">${start.name}</td>
        <td >${start.half} / ${start.full}/-</td>
        </tr>`
    }
    console.log(dataHtml)
    
    tableBody.innerHTML = dataHtml;
}
loadBiryaniTable(biryaniMenu);


function loadVegTable(vegMenu) {
    const tableBody = document.getElementById('vegMenu');
    let dataHtml = '';
    
    for( let start of vegMenu){
        dataHtml += `<tr>
        <td colspan="2">${start.name}</td>
        <td >${start.price}/-</td>
        </tr>`
    }
    console.log(dataHtml)
    
    tableBody.innerHTML = dataHtml;
}
loadVegTable(vegMenu);



loadNonVegTable(nonvegMenu);

function loadNonVegTable(nonvegMenu) {
    const tableBody = document.getElementById('nonvegMenu');
    let dataHtml = '';
    
    for( let start of nonvegMenu){
        dataHtml += `<tr>
        <td colspan="2">${start.name}</td>
        <td >${start.price}/-</td>
        </tr>`
    }
    console.log(dataHtml)
    
    tableBody.innerHTML = dataHtml;
}
