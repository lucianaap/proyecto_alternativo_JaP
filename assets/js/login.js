let inputEmail = document.getElementById("email-form");
let inputContraseña = document.getElementById("password-form")

function loginRedirectAndSaveUser(){
        if (inputEmail.value === "" || inputContraseña.value === ""){
            alert ("Necesita rellenar los campos vacíos")
        } else{
            window.location = "inicio.html";
            localStorage.setItem("User-Logged", JSON.stringify({email: inputEmail.value}));
           
        }

};

document.addEventListener("DOMContentLoaded", function(e){

})
