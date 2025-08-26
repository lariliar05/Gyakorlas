document.getElementById("tipus").value = "Toyota Corolla"
document.getElementById("datum").valueAsDate = new Date()
document.getElementById("ar").value = 605
document.getElementById("tavolsag").value = "100"

let benzin = [
    { leiras: "1000 cm3-ig 7,6 l/100km", norma: 7.6 },
    { leiras: "1001-1500 cm3 között 8,6 l/100km", norma: 8.6 },
    { leiras: "1501-2000 cm3 között 9,5 l/100km", norma: 9.5 },
    { leiras: "2001-3000 cm3 között 11,4 l/100km", norma: 11.4 },
    { leiras: "3001 cm3 fölött 13,3 l/100km", norma: 13.3 }    
]

let gazolaj = [
    { leiras: "1500 cm3-ig 5,7 l/100km", norma: 5.7 },
    { leiras: "1501-2000 cm3 között 6,7 l/100km", norma: 6.7 },
    { leiras: "2001-3000 cm3 között 7,6 l/100km", norma: 7.6 },
    { leiras: "3001 cm3 fölött 9,5 l/100km", norma: 9.5 }
]

function selectBenzinFeltolt() {
    let parent = document.getElementById("norma")
    for (let i = 0; i < benzin.length; i++) {
        let option = document.createElement("option")
        option.innerText = benzin[i].leiras
        parent.appendChild(option)        
    }
}

function selectGazolajFeltolt() {
    let parent = document.getElementById("norma")
    for (let i = 0; i < gazolaj.length; i++) {
        let option = document.createElement("option")
        option.innerText = gazolaj[i].leiras
        parent.appendChild(option)        
    }   
}

document.onload = selectBenzinFeltolt()

function uzemanyagSelect() {
    //selectTorles()
    select_delete()
    let uzemanyag = document.getElementById("uzemanyag")
    switch (uzemanyag.value) {
        case "benzin":
            selectBenzinFeltolt()
            break
        case "gazolaj":
            selectGazolajFeltolt()
            break
    }
}

function select_delete(){
    let parent = document.getElementById("norma")
    while (parent.firstChild) parent.removeChild(parent.firstChild)
}

function selectTorles() {
    for (let i = norma.options.length-1; i >= 0; i--) {
        norma.options[i].remove()       
    }
}

function utikoltsegSzamolas() {
    let egysegar = document.getElementById("ar").value
    let tavolsag = document.getElementById("tavolsag").value
    let uzemanyag = document.getElementById("uzemanyag")
    let normaindex = document.getElementById("norma").selectedIndex
    let norma = 0
    switch (uzemanyag.value) {
        case "benzin":
            norma = benzin[normaindex].norma
            break
        case "gazolaj":
            norma = gazolaj[normaindex].norma
            break
    }
    document.getElementById("utikoltseg").innerText ="Útiköltség: " + norma * egysegar * tavolsag / 100 + " Ft"
}

document.getElementById("szamolas").onclick = utikoltsegSzamolas

document.getElementById("uzemanyag").onchange = uzemanyagSelect


