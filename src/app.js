
const tbody = document.querySelector("#tbody"); // összekötés az index-ben lévő táblával

// objektum tömb 
var empList = [
    {id: 1, name: "Per Lajos", city: "Budapest", salary: 315 },
    {id: 2, name: "Para Béla", city: "Szeged", salary: 325 },
    {id: 3, name: "Erős Imre", city: "Szolnok", salary: 335 },
    {id: 4, name: "Tér Emese", city: "Szigetszentmiklós", salary: 385 },
    {id: 5, name: "Ken Irén", city: "Miskolc", salary: 345 },
    {id: 6, name: "Csoma Ferenc", city: "Nagykáta", salary: 395 }    
];

empList.forEach((emp) => {
    console.log(emp.name);
});