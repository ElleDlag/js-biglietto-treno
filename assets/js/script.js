var dom = document;
var born = dom.querySelector("#anno-nascita");
var checkAll = dom.querySelector(".check-all");
var destination = dom.querySelector("#destinazione");
var txtSale = dom.querySelector("#txt-sconto").textContent;
var txtTot = dom.querySelector("#txt-totale").textContent;



var formField = Array.prototype.concat
var inputs = formField.call(dom.querySelectorAll('form input[type="text"]'));
var selects = formField.call(dom.querySelectorAll('form select'));
console.log(formField.valuOf())


var result = dom.querySelector(".result");
var nome = dom.querySelector("#nome");
var cognome = dom.querySelector("#cognome");

//var output
var ageTxtSale = "al momento nessuna promozione disponibile";
var saleOutput = "NO";
var totOutput = " €";

var currentDate = new Date();
var today = currentDate.getDate();
var month = currentDate.getMonth();
var fullY = currentDate.getFullYear();
var h = currentDate.getHours();
var m = currentDate.getMinutes();
var s = currentDate.getSeconds();
var currentHour = today + "/" + month + "/" + fullY + " - " + h + ":" + m + ":" + s;
var age;



//function
function checkThis() {
    iput.forEach((x)=>{
        alert(x.value)
    })
    /* if (born.value != "Selezionare anno..." && destination.value != "Selezionare destinazione..." && nome.value != "" && cognome.value != "") {
        var kms = parseInt(destination.value);
        var price = kms * 0.21;
        var sale;
        age = currentDate.getFullYear() - born.value;

        if (age >= 65) {
            saleOutput = "40%";
            sale = (price * 0.4).toFixed(2);
            ageTxtSale = "over 65 - 40% ti ha fatto risparmiare " + sale + " €";
            txtTot.textContent = (price - sale).toFixed(2) + " €";
        } else if (age <= 17) {
            saleOutput = "20%";
            sale = (price * 0.2).toFixed(2);
            ageTxtSale = "under 18 - 20% ti ha fatto risparmiare " + sale + " €";
            txtTot.textContent = (price - sale).toFixed(2) + " €";
        }

        //tesxt result via concatenation
        result.innerHTML = "Biglietto nominativo per: " + nome.value + " " + cognome.value + "<br>";
        result.innerHTML += "Partenza:Milano Centrale<br>";
        result.innerHTML += "Destinazione in Km: " + destination.value + " km <br>";
        result.innerHTML += "Al km: 0.21€ <br>";
        result.innerHTML += "Sconto:" + ageTxtSale + "<br>";
        result.innerHTML += "Totale lordo: " + price + "€ <br>";
        result.innerHTML += "Totale netto: " + txtTot.textContent + "<br>";
        result.innerHTML += "Date e ora di emissione: " + currentHour + "<br>";
        result.innerHTML += "Buon Viaggio<br>";

    } */
};

//injecton (parte aggiunta)
checkAll.addEventListener("click", checkThis);




/* #region  non usare ora */
/* else{
        if(born.value == "Selezionare anno..."){
            alert("non hai selezionato l'anno di nascita");
        }
        if(destination.value == "Selezionare destinazione..."){
            alert("non hai selezionato la partenza");
        }
        if(nome.value == ""){
            alert("Campo nome vuoto");
        }
        if(cognome.value == ""){
            alert("Campo cognome vuoto");
        }

    }; */
/* #endregion */