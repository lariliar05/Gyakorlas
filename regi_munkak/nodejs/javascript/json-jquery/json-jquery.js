$(document).ready(function() {
    $.getJSON("https://jsonplaceholder.typicode.com/users", function(data) {
        const tbody = $('tbody')
        data.forEach(element => {
            const tr = $('<tr></tr>')
            tr.append(`<td>${element.id}</td>`)
            tr.append(`<td>${element.name}</td>`)
            tr.append(`<td>${element.email}</td>`)
            tr.append(`<td>${element.address.city}</td>`)
        tbody.append(tr)
        })
    })
})
