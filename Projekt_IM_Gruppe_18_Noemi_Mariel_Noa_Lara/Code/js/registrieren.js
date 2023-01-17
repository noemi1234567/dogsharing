console.log("Hello Registrierung");

function registrieren(){

    let benutzername = document.querySelector("#benutzername").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let formData = new FormData();
    formData.append('benutzername', benutzername);
    formData.append('email', email);
    formData.append('password', password);

    fetch("https://796544-5.web.fhgr.ch/php/registrieren.php",
        {
            body: formData,
            method: "post",
        })
        .then((response) => {
            return response.text(); // json oder text
        })
        .then((data) => {
            document.querySelector('#nachricht').innerHTML = data;
            window.location = "/login.html";
        })
}



