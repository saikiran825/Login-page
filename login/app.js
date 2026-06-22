const button = document.querySelector("button");
const username = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');
let icon = document.querySelector("#eye")





button.addEventListener("click", function(){
    if(username.value ==="" || password.value ===""){
        alert("Please fill all fields")
    }
    else{
        alert("Login successful!");
    }
});



icon.addEventListener("click",function(){
    // if(this.className === "fa-solid fa-eye-slash"){
    //     this.className = "fa-solid fa-eye";
    //     password.type = "text";
    // }else{
    //     this.className = "fa-solid fa-eye-slash";
    //     password.type = "password";
    // }
  
    // icon.className = "fa-solid fa-eye";


    if(icon.className === "fa-solid fa-eye-slash"){
        icon.className = "fa-solid fa-eye";
        password.type = "text";
    }else{
        icon.className = "fa-solid fa-eye-slash";
        password.type = "password";
    }
});

// password.addEventListener("dblclick",function(){
//     if(password.type === "password"){
        
//     }
//     else{
//         password.type = "password";
//     }
// });
