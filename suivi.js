const tableSuivi = [
    {
        lot: "1E202023001",
        etat: "Reçu",
        date: "12/03/2023",
        rapport: "Disponible"
    },
    {
        lot: "E2202023023",
        etat: "NON Reçu",
        date: "12/03/2023",
        rapport: "NON Disponible"
    },
    {
        lot: "TE202023090",
        etat: "Reçu",
        date: "14/03/2023",
        rapport: "NON Disponible"
    },
    {
        lot: "carbonate",
        etat: "Reçu",
        date: "14/03/2023",
        rapport: "Disponible"
    },
    {
        lot: "Checurire",
        etat: "NON Reçu",
        date: "16/03/2023",
        rapport: "NON Disponible"
    },
    {
        lot: "CO2 libre",
        etat: "Reçu",
        date: "16/03/2023",
        rapport: "Disponible"
    },
    {
        lot: "Conductivite elctricite",
        etat: "NON Reçu",
        date: "16/03/2023",
        rapport: "NON Disponible"
    },
    {
        lot: "PH/temperature",
        etat: "Reçu",
        date: "16/03/2023",
        rapport: "Disponible"
    },
    {
        lot: "Couleur Brute",
        etat: "Reçu",
        date: "18/03/2023",
        rapport: "NON Disponible"
    },
    {
        lot: "Cenuire libre",
        etat: "Reçu",
        date: "20/03/2023",
        rapport: "Disponible"
    }, 
]

 const tbodySuivi = document.getElementById("tbodySuivi");

 function arraySuivi() {
    tbodySuivi.innerHTML = "" 
    tableSuivi.forEach((element,index) => {
        tbodySuivi.innerHTML += ` <tr id="rows" class="tr">
        <td id="nameLot" class="table td soso" style=" text-align: start; padding-left: 40px;">${element.lot}</td>
        <td class="table td">${element.etat}</td>
        <td class="table td">${element.date}</td>
        <td id= "rapport" class="table td">${element.rapport}</td>
        <td class="voir td" id="buttons" data-id="${index}"><a href="suivideteal.html"><input class="button" type="button" value="voir" ></a></td>
    </tr>`
    });
 }
 arraySuivi(tableSuivi);