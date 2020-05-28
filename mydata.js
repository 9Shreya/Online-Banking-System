function f1() {
    document.getElementById("name").value = localStorage.getItem("firstname")
    document.getElementById("mobileno").value = localStorage.getItem("phoneNo")
    document.getElementById("mailid").value = localStorage.getItem("email")
    var accountnum = localStorage.getItem("accountnum")
    if (accountnum == "") {
        var num = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9')
        var a = num[Math.floor((Math.random() * num.length))];
        var b = num[Math.floor((Math.random() * num.length))];
        var c = num[Math.floor((Math.random() * num.length))];
        var d = num[Math.floor((Math.random() * num.length))];
        var e = num[Math.floor((Math.random() * num.length))];
        var f = num[Math.floor((Math.random() * num.length))];
        var g = num[Math.floor((Math.random() * num.length))];
        var h = num[Math.floor((Math.random() * num.length))];
        var i = num[Math.floor((Math.random() * num.length))];
        var code = b + c + d + e + f + g + h + i + a
        document.getElementById("accountnum").value = code
        localStorage.setItem("accountnum", code)
    } else {
        document.getElementById("accountnum").value = accountnum
    }

    var street = localStorage.getItem("streetAddid")
    var state = localStorage.getItem("stateid")
    var city = localStorage.getItem("cityid")
    var aadhaar = localStorage.getItem("aadhaarnoid")
    var pan = localStorage.getItem("panid")
    if (!street == "") {
        document.getElementById("streetAddid").value = street
    }
    if (!state == "") {
        document.getElementById("stateid").value = state
    }
    if (!city == "") {
        document.getElementById("cityid").value = city
    }
    if (!aadhaar == "") {
        document.getElementById("aadhaarnoid").value = aadhaar
    }
    if (!pan == "") {
        document.getElementById("panid").value = pan
    }
    return false;

}

function f2() {
    localStorage.setItem("accountnum", document.getElementById("accountnum").value)
    localStorage.setItem("streetAddid", document.getElementById("streetAddid").value)
    localStorage.setItem("stateid", document.getElementById("stateid").value)
    localStorage.setItem("cityid", document.getElementById("cityid").value)
    localStorage.setItem("aadhaarnoid", document.getElementById("aadhaarnoid").value)
    localStorage.setItem("panid", document.getElementById("panid").value)

}

