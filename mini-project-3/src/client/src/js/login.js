function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    localStorage.setItem("user", email);
    localStorage.setItem("password", password);

    console.log("logged in as " + email);
}


function validateUser() {
    document.getElementById("cartcount").innerHTML = localStorage.getItem("count");
    if (localStorage.getItem("user") != null) {
        document.getElementById("account").innerHTML = " " + localStorage.getItem("user");
        document.getElementById("accountlink").setAttribute("href", "/account");
    }
}