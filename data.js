 const compte = [
     {
         username: "Cesar",
         password:"0000"
     },
     {
        username: "Admin",
        password: "1234"
     }
 ]

 const myCompte = JSON.parse(localStorage.getItem("identifient"));
 if (!myCompte) {
     localStorage.setItem("identifient",JSON.stringify(compte))
 }