const file = document.querySelector("#input-file"),
  photo = document.querySelector("#photo"),
  navarImg = document.querySelector("#navar-img"),
  btnDelete = document.querySelector("#btn-delete"),
  inputName = document.querySelector("#input-name"),
  inputEmail = document.querySelector("#input-email"),
  inputBiographie = document.querySelector("textarea"),
  btnSend = document.querySelector(".btn-send"),
  alert1 = document.querySelector(".alert-text"),
  alert2 = document.querySelector(".alert-text1"),
  alert3 = document.querySelector(".alert-text2"),
  alert4 = document.querySelector(".alert-text3"),
  btnUpdateProfil = document.querySelector("#btn-updateProfil"),
  btnDeleteProfil = document.getElementById(".btn-deleteProfil"),
  oldPassword = document.querySelector("#old-password"),
  newPassword = document.querySelector("#new-password"),
  confirmationPassword = document.querySelector("#confirmation-password"),
  btnSend1 = document.querySelector("#btnSend");


//   btnDeleteProfil.addEventListener('click',function () {
//     alert4.classList.add("alert-text-show3");
//   });

function editMotdepasse() {
 alert4.classList.add("alert-text-show3"); 

}

const old_password = document.getElementById("old-password");
const new_password = document.getElementById("new-password");
const modifierCompteBtn = document.getElementById("modifierCompteBtn");



let myCompte = JSON.parse(localStorage.getItem("identifient"));
const myCompteIdentifient = JSON.parse(localStorage.getItem("identifient"));

// Récupérer le bouton par son ID
const boutonModifierMotDePasse = document.getElementById("modifierMotDePasseBtn");

// Ajouter un gestionnaire d'événement click
modifierCompteBtn.addEventListener("click", modifierMotDePasse);

function modifierMotDePasse() {
  // myCompte.forEach(element => {
  //   console.log(element);
  //   if (element.password != old_password.value ) {
  //     alert("Voleur de codeloccol")
  //   }
  // });
     // Vérifier si le compte existe dans le localStorage
     if (myCompte) {
         // Modifier le mot de passe (vous pouvez personnaliser cela)
         myCompte[0].password = "nouveauMotDePasse";

         // Mettre à jour le compte dans le localStorage
        myCompte.forEach(element => {
          let Login = {
            userName: element.username,
             passWord: element.password,
         };
        localStorage.setItem("utilisateur", JSON.stringify(Login))
        });

         // Afficher un message (vous pouvez personnaliser le message)
         alert("Mot de passe modifié avec succès !");
         localStorage.clear()
     }
      else {
         // Afficher un message si le compte n'existe pas
         alert("Aucun compte trouvé. Veuillez d'abord créer un compte.");
     }
}

