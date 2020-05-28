function validate() {

    document.getElementById("msg").innerHTML = " "
    document.getElementById("msgNum").innerHTML = " "
    document.getElementById("msgPass").innerHTML = " "
    document.getElementById("msgDOB").innerHTML = " "
    document.getElementById("err").innerHTML = " "
    document.getElementById("msggen").innerHTML = " "


    var email1 = document.getElementById("ema").value
    localStorage.setItem("email",email1)
    localStorage.setItem("streetAddid", "")
    localStorage.setItem("stateid","")
    localStorage.setItem("cityid", "")
    localStorage.setItem("aadhaarnoid","")
    localStorage.setItem("panid","")
    localStorage.setItem("accountnum","")
    localStorage.setItem("benaccountnum", "")
    localStorage.setItem("code","")
    localStorage.setItem("name", "")
    localStorage.setItem("amount","10000")

    

    var res = document.getElementById("fn").value
    localStorage.setItem("firstname", res);

    var pass = document.getElementById("pass").value
    localStorage.setItem("pass",pass)


    if (res.length == 0) {
        document.getElementById("msg").innerHTML = "**Please fill the Firstname"
        fn.style.border = "solid 2px red"
        return false
    } else if (!isNaN(res)) {
        document.getElementById("msg").innerHTML = "**Enter Valid input"
        fn.style.border = "solid 2px red"
        return false
    } else if (res.length < 3) {
        document.getElementById("msg").innerHTML = "**firstname should have min three letter"
        fn.style.border = "solid 2px red"
        return false
    } else if (res.length >= 15) {
        document.getElementById("msg").innerHTML = "**firstname should have max 15 letter"
        fn.style.border = "solid 2px red"
        return false
    }
    var s = document.getElementById("dob").value
    if (s.length == 0) {
        document.getElementById("msgDOB").innerHTML = "**Please Enter Date Of Birth "
        dob.style.border = "solid 2px red"
        return false
    }
    var phone = document.getElementById("phone").value
    localStorage.setItem("phoneNo", phone);

    if (phone.length == 0) {
        document.getElementById("msgNum").innerHTML = "**Please enter phone number"
        return false
    } else if (isNaN(phone)) {
        document.getElementById("msgNum").innerHTML = "*phone number should contain only digits"
        return false
    } else if (phone.length < 10) {
        document.getElementById("msgNum").innerHTML = "*phone number has less than 10 number"
        return false
    } else if (phone.length > 10) {
        document.getElementById("msgNum").innerHTML = "*phone num has more than 10 number"
        return false
    } else if (phone.charAt(0) < 6) {
        document.getElementById("msgNum").innerHTML = "phone num should start from 7 or 8 or 9"
        return false
    }

    var cpass = document.getElementById("cpass").value
    if (pass.length == 0) {
        document.getElementById("msgPass").innerHTML = "**please fill the password"
        return false
    } else if (pass.length < 3) {
        document.getElementById("msgPass").innerHTML = "**password should have min three letter"
        return false
    } else if (pass.length >= 15) {
        document.getElementById("msgPass").innerHTML = "**firstname should have max 15 letter"
        return false
    } else if (pass != cpass) {
        document.getElementById("err").innerHTML = "**password and confirm password is not matching "
        return false
    }

    var tes = document.getElementById("dob");
    var check = /^[\d]{2}[-][\d]{2}[-][\d]{4}$/;
    if (!tes.test(check)) {
        document.getElementById("msgDOB").innerHTML = "**Enter date in Correct format "
        return false
    }

    var tes = document.getElementById("gender");
    if (tes.value == "Gender") {
        document.getElementById("msggen").innerHTML = "**Please select the Gender "
        return false
    }

    var string1 = (document.getElementById('captcha').value);
    var string2 = (document.getElementById('inputText').value);

    if (string1 != string2 ) {
        document.getElementById('error').innerHTML = "Please enter a valid captcha."; 
        document.getElementById("inputText").style.border="2px solid red"
        return false
    }
else if(string2.length==0) {
    document.getElementById('error').innerHTML = "Please enter a valid captcha."; 
    document.getElementById("inputText").style.border="2px solid red"
    return false
}


}

function Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0');
    var i;
    for (i=0;i<6;i++){
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a  + b   + c  + d  + e + f  + g;
    document.getElementById("captcha").value = code
   

}




