/*let indulo = [
    {leiras: "Budapest", norma: 15000},
    {leiras: "Bécs", norma: 25000},
    {leiras: "Debrecen", norma: 17500}
]

let erkezo = [
    {leiras: "London", norma: 30000},
    {leiras: "Frankfurt", norma: 17500}
]
*/
document.getElementById("idopont").valueAsDate = new Date()

/*function selectIndulasFeltolt(){
    let parent = document.getElementById("norma")

    for ( let szam = 0; szam < indulo.length; szam++){
    let option = document.createElement("option")
    option.innerText= indulo[szam].leiras
    parent.appendChild(option)
        }
}
function selectErkezesFeltolt(){
    let parent =document.getElementById("norma")
    for (let szam = 0; szam < erkezo.length; szam++){
        let option =document.createElement("option")
        option.innerText= erkezo[szam].leiras
        parent.appendChild(option)
    }
}*/

function vegosszegSzamolas() {
    let indulandusz = document.getElementById("indulo").value;
    let erkezendusz = document.getElementById("erkezo").value;

    if(indulandusz === erkezendusz){
       alert("Ez nem hőlégballon :D (Hiba!)");
        return;
    }

    let arak = {
        "BUD": 15000,
        "VIE": 25000,
        "DEB": 17500,
        "FRA": 17500
    };

    let vegosszeg = arak[indulandusz];

    if (erkezendusz === "LHR") {
        vegosszeg = 30000;
    }


    document.getElementById("vegosszeg").innerText = "Végösszeg: " + vegosszeg + " Ft";
}
//document.onload= selectIndulasFeltolt

/*unction vegosszegSzamolas(){
    let indulas = document.getElementById("indulo").value
    let erkezes = document.getElementById("erkezo").value
    let normaindex= document.getElementById("norma").selectedIndex

    let norma= 0

    document.getElementById("vegosszeg").innerText=
    "Vegösszeg:" + (norma + indulo + erkezo) + " Ft"
} */
document.getElementById("szamolas").onclick = vegosszegSzamolas;

function visszaallit(){
    document.getElementById("nev").value = "";
    document.getElementById("emailje").value = "";
    document.getElementById("idopont").value = "";
    document.getElementById("indulo").value = "";
    document.getElementById("erkezo").value = "";


    document.getElementById("vegosszeg").innerText= "Végösszeg: ";
}
document.getElementById("visszaallitas").onclick = visszaallit;