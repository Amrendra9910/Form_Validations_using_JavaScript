
function hello() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var username = document.getElementById("username").value;
    var email1 = document.getElementById("email1").value;
    var mnumber = document.getElementById("mnumber").value;
    var pss = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;
    var my_error = document.getElementById("my_error");

    my_error.style.padding = "20px";
    var text;
    if (fname.length < 5) 
    {
        text = "*Please Enter  valid First name";
        my_error.innerHTML = text;
        return false;
    }
    if (lname.length < 2) 
    {
        text = "*Please Enter Valid Last Name";
        my_error.innerHTML = text;
        return false;
    }
    if (username.length < 6)
     {
        text = "*Please Enter Valid User Name";
        my_error.innerHTML = text;
        return false;
    }
    if (email1.indexOf("@") <= 0) 
    {
        text = "*Please Enter Valid Email Id";
        my_error.innerHTML = text;
        return false;
    }
    if ((email1.charAt(email1.length - 4) != '.') && (email1.charAt(email1.length - 3) != '.')) 
    {
        text = "*Please Enter Valid Email Id";
        my_error.innerHTML = text;
        return false;
    }
    if (mnumber.length!=10)
    {
        text = "*Please Enter Valid Mobile Number";
        my_error.innerHTML = text;
        return false;
    }
    if (!mnumber.match(/^[0-9]/)) {
        text = "*Please Enter Valid Mobile Number";
        my_error.innerHTML = text;
        return false;
    }
    if (!pss.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
        text = "*Password should be in alphbate,number and spical charactor";
        my_error.innerHTML = text;
        return false;
    }
    if (!pass2.match(pss)) {
        text = "*Please Enter Same Password";
        my_error.innerHTML = text;
        return false;
    }

    alert("Form Submitted Sucessfully")
    return true;


}
