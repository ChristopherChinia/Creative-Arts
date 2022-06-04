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

// js code to appear signup and login
signup.addEventListener("click",()=>{
    container.classList.add("active");
})
logIn.addEventListener("click",()=>{
    container.classList.remove("active");
});



