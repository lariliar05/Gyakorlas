let letters = document.getElementById("irszam")
let result = document.getElementById("result")
let lat1 =""
let lng1=""
letters.oninput = function(){
    if(letters.value.length >3){
        $.getJSON(`https://hur.webmania.cc/zips/${letters.value}.json`, function(data){
        data.zips.forEach(element => {
            varos.value=element.name
            lat.value=element.lat
            lng.value=element.lng
            lat1=element.lat
            lng1=element.lng
        })
    })
}
}

gomb.onclick= function(){
        $.getJSON(`https://api.open-meteo.com/v1/forecast?latitude=${lat1}&longitude=${lng1}&current=temperature_2m&daily=weather_code`, function(data){
            hom.innerText=data.current.temperature_2m
    })
}
