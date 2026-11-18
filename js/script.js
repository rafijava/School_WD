function showDateTime(){
let now = new Date();
document.getElementById("datetime").innerHTML = now.toLocaleString();
}

setInterval(showDateTime,1000);


function loginConfirm(){
alert("Login Successful!");
}