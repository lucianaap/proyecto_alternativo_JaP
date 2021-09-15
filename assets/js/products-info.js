let product = {};
let commentsArray = [];

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGalleryAdicional").innerHTML = htmlContentToAppend;
    }
}

function showCommentsArray(array) {
    let comentario = "<hr/>";

    for (let i = 0; i < commentsArray.length; i++) {
        let comments = commentsArray[i];

        comentario += `<p id=usuario_puntuación>` + comments.score + `/5 </p>` + "<br/>"
        comentario += `<p id=usuario_comentario>` + comments.user + `</p>` + "<br/>"
        comentario += comments.description + "<br/><br/>"
        comentario += `<small>` + comments.dateTime + `</small>` + "<br/>"
        comentario += "<br/><hr/><br/>"
    }

    document.getElementById("productComments").innerHTML = comentario;
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productSoldCountHTML = document.getElementById("soldCount");
            let productCostHTML = document.getElementById("productCost");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productCategoryHTML = document.getElementById("productCategory");


            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.cost;
            productCurrencyHTML.innerHTML = product.currency;
            productCategoryHTML.innerHTML = product.category;
            showImagesGallery(product.images);

        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            commentsArray = resultObj.data;
            showCommentsArray(commentsArray);
        }
    });
});