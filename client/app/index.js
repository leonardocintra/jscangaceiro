var campos = [
    document.querySelector("#data"),
    document.querySelector("#valor"),
    document.querySelector("#quantidade")
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        var td = document.createElement('td');

        td.textContent = campo.value;
        tr.appendChild(td);
    });
    // parou na 34
});