function f3() {

    var res = document.getElementById("accountnum").value
    localStorage.setItem("benaccountnum", res)
    var codef=document.getElementById()
    localStorage.setItem("ifsccode", code)
    var name = document.getElementById("name").value
    localStorage.setItem("name", name)
}

function f4() {
    var accountnum = localStorage.getItem("benaccountnum")
    if (!accountnum == "") {
        document.getElementById("accountnum").value= accountnum
        document.getElementById("code").value= localStorage.getItem("ifsccode");
        document.getElementById("name").value= localStorage.getItem("name");
    }
}