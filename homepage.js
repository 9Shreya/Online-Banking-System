var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
function validate(){
  document.getElementById("msg").innerHTML = ""
  document.getElementById("msgPass").innerHTML = ""
  document.getElementById("msgEmail").innerHTML = ""

  var user=document.getElementById("Username").value
  var firstname=localStorage.getItem("firstname")
  if(!(user==firstname)){
    console.log("dsfdfsdf")
      document.getElementById("msg").innerHTML = "**Please fill the correct name"
      return false
  }
  var pass=document.getElementById("Password").value
  var confirmpass= localStorage.getItem("pass")
  if(!(pass==confirmpass)){   
    document.getElementById("msgPass").innerHTML = "**Please fill the correct password"
    return false
  }
  var mail=document.getElementById("Email").value
  var mails=localStorage.getItem("email")
  if(!(mail==mails)){
    document.getElementById("msgEmail").innerHTML = "**Please fill the correct email"
    return false

  }
  }