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
    listItems.forEach(function (element) {
        const itemText = element.textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            element.style.display = '';
        } else  {
            element.style.display = 'none';
        }
    });
});


const smallertobiggestcommande = document.getElementById("smallertobiggestcommande");
const raking = document.querySelector(".raking");
const raking9 = document.querySelector('.raking9_1');
smallertobiggestcommande.addEventListener("click",function () {
    raking.classList.add("hidden");
    raking9.classList.remove("hidden")
});

const biggesttosmaller = document.getElementById("biggesttosmaller");

const raking9_1 = document.querySelector('.raking9_1');
biggesttosmaller.addEventListener("click",function () {
    raking9_1.classList.add("hidden");
    raking.classList.remove("hidden");
});



const smallertobiggestletter_Letter = document.getElementById("smallertobiggestletter_Letter");
const raking_oneLetter_commande = document.querySelector(".raking_oneLetter_commande");
const raking9_letter_commande = document.querySelector(".raking9_letter_commande");

smallertobiggestletter_Letter.addEventListener("click",function () {
    raking_oneLetter_commande.classList.add("hidden");
    raking9_letter_commande.classList.remove("hidden")
});

const biggesttosmallerLetter = document.getElementById("biggesttosmallerLetter");

biggesttosmallerLetter.addEventListener("click",function () {
    raking9_letter_commande.classList.add("hidden");
    raking_oneLetter_commande.classList.remove("hidden")
});



const smallertobiggestcommande_2 = document.getElementById("smallertobiggestcommande_2");
const raking_2 = document.querySelector(".raking_2");
const raking9_2 = document.querySelector('.raking9_2');
smallertobiggestcommande_2.addEventListener("click",function () {
    raking_2.classList.add("hidden");
    raking9_3.classList.remove("hidden");
});

const biggesttosmaller_3 = document.getElementById("biggesttosmaller_3");

const raking9_3 = document.querySelector('.raking9_3');
biggesttosmaller_3.addEventListener("click",function () {
    raking9_3.classList.add("hidden");
    raking_2.classList.remove("hidden");
   
});


const smallertobiggestletter_satus = document.getElementById("smallertobiggestletter_satus");
const raking9_letter_status_commande = document.querySelector(".raking9_letter_status_commande");
const raking_oneLetter_satatus = document.querySelector('.raking_oneLetter_satatus');
smallertobiggestletter_satus.addEventListener("click",function () {
    raking_oneLetter_satatus.classList.add("hidden");
    raking9_letter_status_commande.classList.remove("hidden");
});

 const biggesttosmallerLetter_status = document.getElementById("biggesttosmallerLetter_status");


 biggesttosmallerLetter_status.addEventListener("click",function () {
    raking9_letter_status_commande.classList.add("hidden");
    raking_oneLetter_satatus.classList.remove("hidden");
 });



const compare = (ids, asc) => (row1, row2) => {
    const tdValue = (row, ids) => row.children[ids].textContent;
    const tri = (v1, v2) => v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
    return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
  };
  

  const laligneTr = document.querySelectorAll('th');
  const trxb = tbody.querySelectorAll('tr');
  laligneTr.forEach(th => th.addEventListener('click', () => {
    let classe = Array.from(trxb).sort(compare(Array.from(laligneTr).indexOf(th), this.asc = !this.asc));
    console.log(classe);
    classe.forEach(tr => tbody.appendChild(tr));
  }));

