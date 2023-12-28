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
const search = document.getElementById("search")

function array() {
    tbody.innerHTML = ""
    tableFacture.forEach(element => {
        tbody.innerHTML += `<tr class="tr" id="rows">
        <td class="table td soso" style="text-align: center; padding-left: 40px; ">${element.id}</td>
        <td class="table td"   >${element.name}</td>
        <td class="table td" >${element.date}</td>
        <td class="voir td"  > <button class="button">voir</button> </td>
    </tr>
    `

    });
}
array(tableFacture);


search.addEventListener('input',function (event) {
    var input, filter, table, tr, td, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody-facture");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none"; 
          }
      } 
    
    }
});
