var fname;
var lname;
var email;
var password;

function setVariables(){
     fname = document.getElementById("firstname").value;
     lname = document.getElementById("lastname").value;
     email = document.getElementById("email").value;
     password = document.getElementById("password").value;
    

    alert(fname + " " + lname +"\n" + email);
}

function getVariables(){
    if(email == "abc@xyz.com" && password == "qwerty"){
        alert("Login successful");
    }
    else{
        alert("Login failed");
    }
}