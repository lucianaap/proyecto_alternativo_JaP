var PRODUCTS_URL = "https://lucianaap.github.io/proyecto_alternativo_JaP/assets/json/productosss.json"
var PRODUCT_INFO_URL = "https://lucianaap.github.io/proyecto_alternativo_JaP/assets/json/products-info-dona_maracuyaa.json"
var PRODUCT_INFO_COMMENTS_URL = "https://lucianaap.github.io/proyecto_alternativo_JaP/assets/json/comments.json"

var getJSONData = function(url){
  var result = {};
  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }else{
      throw Error(response.statusText);
    }
  })
  .then(function(response) {
        result.status = 'ok';
        result.data = response;
        return result;
  })
  .catch(function(error) {
      result.status = 'error';
      result.data = error;
      return result;
  });
}

document.addEventListener("DOMContentLoaded", function(e){

  let userLogged = localStorage.getItem("User-Logged")
  let userInfo = document.getElementById("user-info")
  let user = document.getElementById("user")

  if (userLogged){

    userLogged = JSON.parse(userLogged)

    user.innerHTML = user.innerHTML + "Usuario logueado: " + userLogged.email;
  }



});