const products_url = "https://lucianaap.github.io/proyecto_alternativo_JaP/assets/json/productosss.json"
const products_info_donaMaracuya = "https://lucianaap.github.io/proyecto_alternativo_JaP/assets/json/products-info-dona_maracuya.json"
const products_info_donaBrownie = ""

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

    user.innerText = user.innerText + "Usuario logueado: " + userLogged.email;
  }



});