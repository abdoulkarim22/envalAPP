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
    </tr>
    `

    });
}
array(tableFacture);










document.getElementById('search').addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll('#tbody-facture tr');
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

// function searchTable() {
//      let table_input = document.getElementById("search");
//      let search_value = table_input.value.toLowerCase();
//      let table = document.getElementById("tbody-facture");
//      let tr = table.getElementsByTagName("tr");
//      for (i = 1 ; i < tr.length; i++) {
//         // get the first column of every row
//         let td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//            // get the text content of the table cell
//            txtValue = td.textContent || td.innerText;
//            // If the search value is found in the table cell, show the row, otherwise hide it
//            if (txtValue.toLowerCase().indexOf(search_value) > -1) {
//               tr[i].style.display = "";
//            } else {
//               tr[i].style.display = "none";
//            }
//         }
//      }
//   }

const smallertobiggest = document.getElementById("smallertobiggest");
const raking_one = document.querySelector(".raking_one");
const raking9 = document.querySelector(".raking9");


smallertobiggest.addEventListener('click',function () {
    console.log(true);
    raking_one.classList.add("hidden");
    raking9.classList.remove("hidden-Two");
});