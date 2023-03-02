/*
* File: app.js
* Author: Király Péter
* Copyright: 2023, Király Péter
* Group: Szoft-1-2-E
* Date: 2023-02-23
* Github: https://github.com/KiralyPeter/nodejs_emp.git
* Licenc: GNU GPL
*/


const tbody = document.querySelector("#tbody"); // összekötés az index-ben lévő táblával

// objektum tömb; az objektumok tulajdonságai: id, name, city, salary
var empList = [
    {id: 1, name: "Per Lajos", city: "Budapest", salary: 315 },
    {id: 2, name: "Para Béla", city: "Szeged", salary: 325 },
    {id: 3, name: "Erős Imre", city: "Szolnok", salary: 335 },
    {id: 4, name: "Tér Emese", city: "Szigetszentmiklós", salary: 385 },
    {id: 5, name: "Ken Irén", city: "Miskolc", salary: 345 },
    {id: 6, name: "Csoma Ferenc", city: "Nagykáta", salary: 395 }    
];

// Függvény a táblázat létrehozására 
function createTable(){
    // "Névtelen" függvény; foreEach függvény, ami végigmegy az "empList" tömb elemein
    // az aktuális elem az "emp" változóba kerül
    empList.forEach((emp) => {
        // console.log(emp.name); -- debug miatt...

        // Létrehozunk helyi változókat (let), és azoknak HTML tagokat adunk
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdCity = document.createElement("td");
        let tdSalary = document.createElement("td");

        // A válozóknak a HTML tagokon kívül szöveg tartalmat is adunk (az objektum megfelelő értékét)
        tdId.textContent = emp.id;
        tdName.textContent = emp.name;
        tdCity.textContent = emp.city;
        tdSalary.textContent = emp.salary;


        // Az index.htm oldalon lévő üres "tbody"-hoz a fenti HTML tagokat és a szövegeket (objektum értékeket)
        tbody.append(tr);
        tr.append(tdId);
        tr.append(tdName);
        tr.append(tdCity);
        tr.append(tdSalary);

    });    
}; 

// A fenti függvény meghívása
createTable();
