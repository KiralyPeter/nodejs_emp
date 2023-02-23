/*
* File: style.css
* Author: Király Péter
* Copyright: 2023, Király Péter
* Group: Szoft-1-2-E
* Date: 2023-02-23
* Github: https://github.com/janos/
* Licenc: GNU GPL
*/


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


function createTable(){
    empList.forEach((emp) => {
        // console.log(emp.name); -- debug miatt...
                
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdCity = document.createElement("td");
        let tdSalary = document.createElement("td");

        tdId.textContent = emp.id;
        tdName.textContent = emp.name;
        tdCity.textContent = emp.city;
        tdSalary.textContent = emp.salary;

        tbody.append(tr);
        tr.append(tdId);
        tr.append(tdName);
        tr.append(tdCity);
        tr.append(tdSalary);

    });    
}; 

createTable();