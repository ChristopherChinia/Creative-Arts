const container = document.querySelector(".container"),
eyeShow = document.querySelectorAll(".showEye"),
pwFields = document.querySelectorAll(".password");

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