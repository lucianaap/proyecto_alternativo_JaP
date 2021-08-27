const products_url = "https://lucianaap.github.io/proyecto_alternativo_JaP/assets/json/productos.json"

var getJSONData = function(url){
  var result = {};
  showSpinner();
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
        hideSpinner();
        return result;
  })
  .catch(function(error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
  });
}

document.addEventListener("DOMContentLoaded", function(e){
});