var productsArray = [];
function showProductsList(productsArray) {
    let list = "<hr>"
    for (let i = 0; i< productsArray.length; i++){
        
        let donas = productsArray[i];
        list += `<h4 id="donas-name">` + donas.nombre + `</h4>`+ "<br>";
        list +=  donas.descripcion + "<br>";
        list += donas.precio + " " + donas.currency + "<br>";
        list += "<br>" +  `<img id="imagen-producto" src=" `+ donas.imgSrc + `"alt = `+ donas.descripcion + `` + "<br>"
        list += "<br><hr><br>"
    
    };
    
    document.getElementById("lista-productos").innerHTML =list;
   
};

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(products_url).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            showProductsList(productsArray);
        }
    });
});