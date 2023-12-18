const compte = [
    {
        id: 1,
        username: "abdoulkarim",
        password:"codeloccol"
    },
    {
        id: 2,
        username: "Cesar",
        password:"0000"
    },
    {
        id: 3,
        username: "admin",
        password:"1234",
    }
]

const myCompte = JSON.parse(localStorage.getItem("identifient"));
if (!myCompte) {
    localStorage.setItem("identifient",JSON.stringify(compte))
}
console.log(myCompte);
