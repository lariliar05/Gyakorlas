const sportok = {
    "Futás": 680,
    "Focizás": 550,
    "Bringázás": 480,
    "Hegymászás": 420,
    "Lovaglás": 370,
    "Túrázás": 360,
    "Kajakozás": 340,
    "Súlyzós edzés": 320,
    "Pingpongozás": 270,
    "Kutyasétáltatás": 200,
    "Muay Thai": 790,
    "Úszás": 600,
    "Aerobik": 720   
}
/*
const sportok = [
    { sport: "Futás", kcal: 680 },
    { sport: "Focizás", kcal: 550 },
    { sport: "Bringázás", kcal: 480 },
    { sport: "Hegymászás", kcal: 420 },
    { sport: "Lovaglás", kcal: 370 },
    { sport: "Túrázás", kcal: 360 },
    { sport: "Kajakozás", kcal: 340 },
    { sport: "Súlyzós e, kcal:zés": 320 },
    { sport: "Pingpongozás", kcal: 270 },
    { sport: "Kutyasétáltatás", kcal: 200 },
    { sport: "Muay T, kcal:ai": 790 },
    { sport: "Úszás", kcal: 600 },
    { sport: "Aerobik", kcal: 720 } 
]
*/
const fejlec = ["Sport, mozgás", "kcal/óra", "perc", "kcal"]

document.onload = addTable(sportok, fejlec)

//for (var index = 0; index < sportok.length; index++) {
//}


/*
function add(x, y) {
  let eredmeny = x + y;
  console.log(eredmeny);
}

add(8, 2);
add(10, 6);

const titkosSzamEgy = 89;
const tikosSzamKetto = 76;
add(titkosSzamEgy, tikosSzamKetto);
*/


function addTable(obj, arr) {
    const parent = document.getElementById("kiskutya");
    const table = document.createElement("table")
    parent.appendChild(table)

    const tr = document.createElement("tr")
    table.append(tr)

    for (index = 0; index < arr.length; index++) {
        const th = document.createElement("th")
        th.innerText = arr[index]
        tr.appendChild(th)
    }
    /*
    arr.map(elem => {
        const th = document.createElement("th")
        th.innerText = elem
        tr.appendChild(th)
    })
*/
    for (let key in obj) {
        const tr = document.createElement("tr")
        table.appendChild(tr)

        //1.oszlop
        const td1 = document.createElement("td")
        td1.innerText = key
        tr.appendChild(td1)   

        //2.oszlop
        const td2 = document.createElement("td")
        td2.innerText = obj[key]
        td2.className = "kcalperora"
        tr.appendChild(td2)
        
        //3.oszlop
        const td3 = document.createElement("td")        
        tr.appendChild(td3)
        const input = document.createElement("input")
        input.type = "number"
        input.className = "perc"
        input.min = "0"
        input.max = "500"
        input.step = "5"
        td3.appendChild(input)

        //4.oszlop
        const td4 = document.createElement("td")        
        tr.appendChild(td4)
        const input2 = document.createElement("input")
        input2.type = "text"
        input2.disabled = true
        input2.className = "kcal"
        td4.appendChild(input2)
      }

      //összesen sor
      const tr_osszesen = document.createElement("tr")
      tr_osszesen.innerHTML=`<tr>
      <td colspan="2">Összesen:</td>
      <td><input type="text" id="sumperc" size="5" disabled></td>
      <td><input type="text" id="sumkcal" size="5" disabled></td></tr>`
      table.appendChild(tr_osszesen)

      //arány sor
      const tr_arany_no = document.createElement("tr")
      tr_arany_no.innerHTML=`<tr>
      <td colspan="3">Napi energiaszükséglet Nőként: (2000 kcal) arányában:</td>
      <td><input type="text" id="aranyno" size="5" disabled></td></tr>`
      table.appendChild(tr_arany_no)

      const tr_arany_ferfi = document.createElement("tr")
      tr_arany_ferfi.innerHTML=`<tr>
      <td colspan="3">Napi energiaszükséglet Férfiként: (2500 kcal) arányában:</td>
      <td><input type="text" id="aranyferfi" size="5" disabled></td></tr>`
      table.appendChild(tr_arany_ferfi)
      
}

let percek = document.querySelectorAll('.perc')

for (let i = 0; i < percek.length; i++) {
    percek[i].addEventListener('change', function() {
        szamol(i)
        sumperc()
        sumkcal()
        arany()
    })    
}

function szamol(x) {
    let kcalperora = document.querySelectorAll('.kcalperora')[x].innerHTML
    let perc = document.querySelectorAll('.perc')[x].value
    let kcal = document.querySelectorAll('.kcal')[x]
    kcal.value = Math.round(Number(kcalperora) * Number(perc) / 60)
}

//adatok törlése
 function torles() {
    let inputok = document.querySelectorAll("input")
    for (let i = 0; i < inputok.length; i++) {
        inputok[i].value = ""        
    }
 }
 document.querySelector("button").onclick = torles

 //összes perc
 function sumperc() {
    let percek = document.querySelectorAll(".perc")
    let osszesperc = 0
    for (let i = 0; i < percek.length; i++) {
        osszesperc += Number(percek[i].value)        
    }
    document.getElementById("sumperc").value = osszesperc
 }

 //összes kaloria
 function sumkcal() {
    let kaloriak = document.querySelectorAll(".kcal")
    let osszeskcal = 0
    for (let i = 0; i < kaloriak.length; i++) {
        osszeskcal += Number(kaloriak[i].value)        
    }
    document.getElementById("sumkcal").value = osszeskcal
 }

 function arany() {
    let sumkcal = Number(document.getElementById("sumkcal").value)

    document.getElementById("aranyno").value = Math.round(sumkcal / 2000 * 100) + " %"

    document.getElementById("aranyferfi").value = Math.round(sumkcal / 2500 * 100) + " %"
 }



