const tableCommande = [
    {
        id:"00001",
        name:"Enval",
        date:"10/03/2023",
        status: "En cours"
    },
    {
        id:"00002",
        name:"Codeloccol",
        date:"10/03/2023",
        status: "En cours"
    },
    {
        id:"00003",
        name:"ANSI",
        date:"12/03/2023",
        status: "Terminer"
    },
    {
        id:"00004",
        name:"CIPMEN",
        date:"12/03/2023",
        status: "En cours"
    },
    {
        id:"00005",
        name:"ADU",
        date:"13/03/2023",
        status: "Terminer"
    },
    {
        id:"00006",
        name:"Codeloccol",
        date:"14/03/2023",
        status: "En cours"
    },
    {
        id:"00007",
        name:"Enval",
        date:"14/03/2023",
        status: "En cours"
    },
    {
        id:"00008",
        name:"ANSI",
        date:"16/03/2023",
        status: "En cours"
    },
    {
        id:"00009",
        name:"ADU",
        date:"16/03/2023",
        status: "Terminer"
    },
    
  ];

  const tbody = document.getElementById("tbody-commande");

  function array() {
    tbody.innerHTML = ""
    tableCommande.forEach(element => {
        tbody.innerHTML += ` 
        <tr id="rows" class="tr">
        <td class="table td soso" style="text-align: start; padding-left: 40px;">${element.id}</td>
        <td class="table td ">${element.name}</td>
        <td class="table td ">${element.date}</td>
        <td class="table td " style="color: red; border-color: black;" >${element.status}</td>
        <td class="voir td "> <button class="button">voir</button> </td>
                                
      </tr>` 
    });
  
  }
  array(tableCommande);


  document.getElementById('searchCommande').addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll('#tbody-commande tr');
    const results_list = document.getElementById("results-list");
     const bobyTable = document.getElementById("tbody-facture");
    listItems.forEach(function (item) {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            item.style.display = '';
        } else  {
            item.style.display = 'none';
        }
    });
});
