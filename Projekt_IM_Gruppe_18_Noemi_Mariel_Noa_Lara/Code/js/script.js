console.log("Hallo Welt");

holeUser();
holePaten()

function holeUser() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://796544-5.web.fhgr.ch/php/holeUser.php",
        {
            body: formData,
            method: "post",
            headers: {
                'Authorization': 'Basic ' + btoa(userID + ':' + token),
            }
        })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            } else {
                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"
            }
        })
        .then((data) => {
            document.querySelector("#username").innerHTML = data[0].name;
        })
}

function holePaten(){
    console.log("ich bin geladen");

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    fetch("https://796544-5.web.fhgr.ch/php/holePaten.php",
        {
           // body: formData,
            method: "post",
            headers: {
                'Authorization': 'Basic ' + btoa(userID + ':' + token),
            }
        })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            } else {
                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"
            }
        })
        .then((data) => {
            console.log(data);
            console.log("daten empfangen");
            PatenAnzeigen(data);
        })
        .catch((err)=>{
            console.log(err);
        })
}

function PatenAnzeigen(data) {

    data.forEach(pate => {
        
        let patenContainer = document.createElement("div");
        patenContainer.innerHTML =

            '<div class="pate">' +
            '<h2>' + pate.name + '</h2>' +
            '<img class="pate-image" src="' + pate.bild + '">' +
            '<h3>' + "Geburtstag" + '</h3>' +
            '<p>' + pate.geburtstag + '</p>' +
            '<h3>' + "Beruf" + '</h3>' +
            '<p>' + pate.beruf + '</p>' +
            '<h3>' + "Erfahrung mit Hunden" + '</h3>' +
            '<p>' + pate.erfahrung + '</p>' +
            '<h3>' + "Bevorzugte Hunderasse" + '</h3>' +
            '<p>' + pate.praeferenz_rasse + '</p>' +
            '<h3>' + "Bevorzugtes Hundealter" + '</h3>' +
            '<p>' + pate.praeferenz_alter + '</p>' +
            '<h3>' + "Über mich" + '</h3>' +
            '<p>' + pate.beschreibung + '</p>' +
            '<h3>' + "📍Wohnort" + '</h3>' +
            '<p>' + pate.wohnort + '</p>' +
            '<h3>' + "👉 E-Mail" + '</h3>' +
            '<a target="_blank" href="mailto:'+ pate.email + '">' + pate.email + '</a>' +
            '<h3>' + "Verfügbare Wochentage" + '</h3>' +
            '<p> <b> <span id="Pate-' + pate.id + '">  </span> <b> </p>'
            + '</div>';

        document.getElementById("liste-paten").appendChild(patenContainer);
        holeWochentageVonPate(pate.id);
    });
}

function holeWochentageVonPate(id) {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('pateID', id);

    fetch("https://796544-5.web.fhgr.ch/php/holeWochentageVonPate.php",
        {
            body: formData,
            method: "post",
            headers: {
                'Authorization': 'Basic ' + btoa(userID + ':' + token),
            }
        })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            } else {
                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"
            }
        })
        .then((data) => {
            if (data.length > 0) {
                data.forEach(element => {
                    document.getElementById("Pate-" + id).innerHTML += element.wochentage + ' '; // füge die Wochentage ins Dokument ein
                });
            }
        })
}

function logout(){

    localStorage.clear();
    window.location = "/login.html";

}