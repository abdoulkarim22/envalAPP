const input_text = document.getElementById("input-text");
const input_password = document.getElementById("input-password");
const alert_text = document.querySelector(".alert-text")



















function login() {

compte.forEach(element => {
    if (element.username === input_text.value && element.password === input_password.value) {
        window.location.href = "dashboard.html";
        console.log(false);
    }
    else{
        console.log(true);
        alert_text.classList.add("alert-text-show");
        setTimeout (() => {
            alert_text.classList.remove("alert-text-show");
        },2000);
    }
    
   });
}


