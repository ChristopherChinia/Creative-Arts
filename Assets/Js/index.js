const container = document.querySelector(".container"),
eyeShow = document.querySelectorAll(".showEye"),
pwFields = document.querySelectorAll(".password");

// 
signup = document.querySelector(".signup-link"),
logIn = document.querySelector(".logIn-link"),


//  js code for show/hide password and icon change

eyeShow.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
       pwFields.forEach(pwField =>{
           if(pwField.type ==="password"){
               pwField.type = "text";

               eyeShow.forEach(icon =>{
                   icon.classList.replace("uil-eye-slash","uil-eye");
               })  
           }else{
               pwField.type = "password";

               eyeShow.forEach(icon =>{
                   icon.classList.replace("uil-eye","uil-eye-slash");
               }) 
           }
       })
    })
})


// Validation login and registation page

function validateInputs(){
    alert("Welcome...")
}



function text(){
    alert("please wait...")
}
function sign(){
    alert("please wait...")
}



// Property page 
function topOne(){
    alert("Welcome Home")
}
function topTwo(){
    alert("please wait...")
}
function topThree(){
    alert("please wait...")
}

function topFour(){
    alert("Tel:0701-000-000")
}
function but(){
    alert("More info on the service section")
}
function sect(){
    alert("More for less? Visit our service link.")
}


