let indulo = [
    { leiras: "Budapest", iata: "BUD" },
    { leiras: "Bécs", iata: "VIE" },
    { leiras: "Debrecen", iata: "DEB" }
]

let erkezo = [
    { leiras: "Frankfurt", iata: "FRA" },
    { leiras: "Budapest", iata: "BUD" },
    { leiras: "London", iata: "LHR" }
]

document.getElementById("idopont").valueAsDate = new Date()

function selectIndulasFeltolt() {
    let parent = document.getElementById("indulo")

    for (let szam = 0; szam < indulo.length; szam++) {
        let option = document.createElement("option")
        option.innerText= indulo[szam].leiras;
        option.value = indulo[szam].iata;
        parent.appendChild(option)
    }
}

function selectErkezoFeltolt() {
    let parent = document.getElementById("erkezo")

    for (let szam = 0; szam < erkezo.length; szam++) {
        let option = document.createElement("option")
        option.innerText= erkezo[szam].leiras;
        option.value = erkezo[szam].iata;
        parent.appendChild(option)
    }
}

function kiskutyaOnLoad() {
  selectIndulasFeltolt();
  selectErkezoFeltolt();
}

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

document.onload = kiskutyaOnLoad()
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
