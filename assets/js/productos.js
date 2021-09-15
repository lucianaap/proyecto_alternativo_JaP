let productsArray = [];
let minPrecio;
let maxPrecio;
let buscar;
let sort_by_menor_precio = "Menor Precio"
let sort_by_mayor_precio = "Mayor Precio"
let currentSortCriteria;



function masInfo(){
    window.location = "products-info.html";
}

function showProductsList() {

    let list = "<hr>"

    for (let i = 0; i < productsArray.length; i++) {
        let donas = productsArray[i];

        if (((minPrecio == undefined) || (donas.precio >= minPrecio)) &&
            ((maxPrecio == undefined) || (donas.precio <= maxPrecio))) {

            if ((buscar == undefined || donas.nombre.toLowerCase().includes(buscar))) {

                list += "<br>" + `<img src=" ` + donas.imgSrc + `"alt = ` + donas.descripcion + `` + "<br>" + "<br>"
                list += `<h4>` + donas.nombre + `</h4>` + "<br>";
                list += donas.descripcion + "<br>";
                list += donas.precio + " " + donas.currency + "<br>" + "<br>";
                list += '<button id="mas-info" onclick="masInfo()">Más información</button><br/><br/>'
                list += "<br><hr><br>"
            }
        }
        document.getElementById("lista-productos").innerHTML = list;
    }
};


function filtrarPrecios() {
    minPrecio = document.getElementById("filtroPrecioMinimo").value;
    maxPrecio = document.getElementById("filtroPrecioMaximo").value;

    if ((minPrecio != undefined) && (minPrecio != "") && (parseInt(minPrecio)) >= 0) {
        minPrecio = parseInt(minPrecio);
    } else {
        minPrecio = undefined;
    }

    if ((maxPrecio != undefined) && (maxPrecio != "") && (parseInt(maxPrecio)) >= 0) {
        maxPrecio = parseInt(maxPrecio);
    } else {
        maxPrecio = undefined;
    }

    showProductsList();
}

function limpiarFiltro() {
    minPrecio = document.getElementById("filtroPrecioMinimo").value = "";
    maxPrecio = document.getElementById("filtroPrecioMaximo").value = "";

    minPrecio = undefined;
    maxPrecio = undefined;

    showProductsList();
}

function ordenarProductos(criteria, array) {

    let result = [];
    if (criteria === sort_by_menor_precio) {
        result = array.sort(function (a, b) {
            if (a.precio < b.precio) { return -1; }
            if (a.precio > b.precio) { return 1; }
            return 0;
        });
    } else if (criteria === sort_by_mayor_precio) {
        result = array.sort(function (a, b) {
            if (a.precio > b.precio) { return -1; }
            if (a.precio < b.precio) { return 1; }
            return 0;
        });
    }

    return result;
}

function OrdenarYMostarProductos(sortCriteria, currentProductsArray) {

    currentSortCriteria = sortCriteria;

    if (currentProductsArray != undefined) {
        productsArray = currentProductsArray;
    }

    productsArray = ordenarProductos(currentSortCriteria, productsArray);

    showProductsList();
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            showProductsList(productsArray);
        }
    });
    
    document.getElementById("btn-min-precio").addEventListener("click", function () {
        OrdenarYMostarProductos(sort_by_menor_precio);
    })


    document.getElementById("btn-max-precio").addEventListener("click", function () {
        OrdenarYMostarProductos(sort_by_mayor_precio);
    })





    document.getElementById("buscador").addEventListener("input", function (e) {
        buscar = document.getElementById("buscador").value.toLowerCase();

        showProductsList();
    })

    document.getElementById("limpiarBusqueda").addEventListener("click", function (e) {
        document.getElementById("buscador").value = ""

        buscar = undefined

        showProductsList();
    })

   

    


});

