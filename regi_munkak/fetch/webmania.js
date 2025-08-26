let letters = document.getElementById("fname")
let result = document.getElementById("result")
letters.oninput = function () {

    if (letters.value.length > 2) {
        result.innerHTML = ""
        fetch(`https://hur.webmania.cc/firstnames/${letters.value}.json`)
        .then(response => response.json())
        .then(data => {
            data.firstnames.forEach(element => {
                result.innerHTML += element.name + " " + element.sex + "<br>"
            })
        })
        .catch(error => console.error(error))       
    }

}
