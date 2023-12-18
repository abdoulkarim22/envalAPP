const tableFacture = [
    {
        id:"00001",
        name:"Enval",
        date:"10/03/2023",
    },
    {
        id: "00002",
        name:"Biochimie",
        date:"10/03/2023"
    },
    {
        id:"00003",
        name:"Biologie",
        date:"11/03/2023"
    },
    {
        id:"00004",
        name:"Biologie",
        date:"12/03/2023"
    },
    {
        id:"00005",
        name:"Enval",
        date:"12/03/2023" 
    },
    {
        id:"00006",
        name:"Biochimie",
        date:"12/03/2023"   
    },
    {
        id:"00007",
        name:"Enval",
        date:"13/03/2023" 
    },
    {
        id:"00008",
        name:"Géologie",
        date:"13/03/2023" 
    },
    {
        id:"00009",
        name:"Enval",
        date:"13/03/2023" 
    }
]


const tbody = document.getElementById("tbody-facture");

function array() {
    tbody.innerHTML = ""
    tableFacture.forEach(element => {
        tbody.innerHTML += `<tr class="tr" id="rows">
        <td class="table td soso" style="text-align: center; padding-left: 40px; ">${element.id}</td>
        <td class="table td"   >${element.name}</td>
        <td class="table td" >${element.date}</td>
        <td class="voir td"  > <button class="button">voir</button> </td>
    </tr>`
    });
}
array(tableFacture);