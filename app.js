const input_text = document.getElementById("input-text");
const input_password = document.getElementById("input-password");
const alert_text = document.querySelector(".alert-text");
const btnConnexion = document.getElementById("btnConnexion");
const table_2 = document.querySelector(".alert-text2");
const timer = document.getElementById("timer");























// let localStorageArray = JSON.parse(localStorage.getItem("arrayLogin"));
  let userConnect = JSON.parse(localStorage.getItem("utilisateur"));

  let numberofTentatives = 0;
 btnConnexion.addEventListener('click',function () {
    numberofTentatives++;
    console.log(numberofTentatives);
     compte.forEach((element) => {
         if (element.username === input_text.value && element.password === input_password.value) {
             let Login = {
              userName: element.username,
               passWord: element.password,
            };
            localStorage.setItem("utilisateur", JSON.stringify(Login));
            window.location.href = "dashboard.html";
            numberofTentatives = 0;
         }
         else{
             alert_text.classList.add("alert-text-show"); 
             setTimeout (() => {
                alert_text.classList.remove("alert-text-show");
            },2000);
         }
         if (numberofTentatives === 3) {
            const leSecret = prompt("Quel est Le surnom de NUEVE");
            if (leSecret === "Mouton") {
                window.location.href = "dashboard.html";
            }else{
                table_2.classList.add("alert-text-show2");
                setTimeout(() => {
                    input_text.disabled = false;
                    input_password.disabled = false;
                    btnConnexion.disabled = false;
              }, 240000);
              temps();

            }
         }
        });
    });

  
  

     function temps() {
         const timer = document.getElementById("timer");
         const Minutes = 4;
         let temps = Minutes * 60;
         setInterval(updateCountdown, 1000);
         input_text.disabled = true;
         input_password.disabled = true;
         btnConnexion.disabled = true;
         function updateCountdown() {

            const minute = Math.floor(temps / 60);
            let second = temps % 60;
            second = second < 10 ? "0" + second : second;

        timer.innerHTML = `00:0${minute}:${second}`;
        temps--;
        if (temps < -1) {
         table_2.style.display = "none"
         clearInterval(temps);
       }
      }
     }


//         // {
            
//         //     alert_text.classList.add("alert-text-show");
//         //    setTimeout (() => {
//         //       alert_text.classList.remove("alert-text-show");
//         //     },2000);
//         // }
//     });
 
// 


// let numberofTentatives = 0;
// function clique() {
//     if (numberofTentatives >= 3) {
//         alert("impossible");
//     }else{
//         alert("possible");
//     }
// }

// let localStorageArray = JSON.parse(localStorage.getItem("arrayLogin"));
// let userConnect = JSON.parse(localStorage.getItem("utilisateur"));


// function login() {
//     //  numberofTentatives++;
//     // clique();
//   compte.forEach((element,numberofTentatives) => {
//     if (element.username === input_text.value && element.password === input_password.value) {
//         let objLogin = {
//             id: element.id,
//             userName: element.username,
//             passWord: element.password,
//           };
//           localStorage.setItem("utilisateur", JSON.stringify(objLogin));
//           window.location.href = "dashboard.html";
//     }
//     else{
       
//         alert_text.classList.add("alert-text-show");
//         setTimeout (() => {
//             alert_text.classList.remove("alert-text-show");
//         },2000);

//     }
    
//    });
// }