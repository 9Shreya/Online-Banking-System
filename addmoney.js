function myFunction() {
    var amount = localStorage.getItem("amount")
    document.getElementById("balance").value=amount
    var amount2 = (document.getElementById("amount").value)
        var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = document.getElementById("amount").value;
        cell2.innerHTML = document.getElementById("Description").value;
        amount = parseInt(amount) + parseInt(amount2);
        alert("Amount Added successfully!!!" +" "+amount)
        localStorage.setItem("amount",amount) 
}
function showBalance(){
    var amount = localStorage.getItem("amount")
    document.getElementById("balance").value=amount
    var firstname=localStorage.getItem("firstname")
    document.getElementById("name").value=firstname
    
}