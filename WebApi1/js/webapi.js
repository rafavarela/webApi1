let dominio = window.document.location.href;
let uri = 'api/productos';
let fullUri = dominio + uri;

window.onload = function () {
    get(fullUri, listarProductos);
}

function listarProductos(rpta) {    
    if (rpta != "") {
        let ulProductos = document.getElementById("products");
        let items = JSON.parse(rpta);      
        let salida = "";

        for (let key in items) {
            salida += `<li> ${ items[key].Nombre } : $ ${ items[key].Precio }</li>`;
        }
        ulProductos.innerHTML = salida;
    }
}

function encontrarProducto() {
    let id = document.getElementById("prodId").value;
    get(fullUri + '/' + id, mostrarUnProducto);
}

function mostrarUnProducto(rpta) {
    let pProducto = document.getElementById("product");

    if (rpta.includes('Error')) {
        // alert(rpta);
        pProducto.innerHTML = rpta;
    } else {
        let producto = JSON.parse(rpta);
        pProducto.innerHTML = producto.Nombre + ' : $ ' + producto.Precio;
    }
}

/* -------------------------------------------------------------------- */
/* Manejo de Ajax */
var get = function (url, funcionCallBack) {
    requestServer("get", url, funcionCallBack);
}

var postText = function (url, funcionCallBack, text) {
    requestServer("post", url, funcionCallBack, text)
}

function requestServer(metodo, url, funcionCallback, datos) {
    let params = {
        method: metodo
    };
    if (datos != null)
        params.body = datos;

    fetch(url, params)
        .then(response => {
            if (response.ok) {
                return response.text().then(data => funcionCallback(data));
            } else {
                if (response.status == 404) {
                    funcionCallback("Error 404. Recurso no encontrado.");
                } else {
                    funcionCallback("Error " + response.status + ". " + response.statusText);
                }
            }
        })
        .catch(error => funcionCallback(error));
}
/* Fin manejo de Ajax */
/* -------------------------------------------------------------------- */