var pateID;
var wochentage = [];

holeUserPate();
holeAlleWochentage();

function neuerPate(){

    let name = document.querySelector("#name").value;
    let geburtstag = document.querySelector("#geburtstag").value;
    let beruf = document.querySelector("#beruf").value;
    let wohnort = document.querySelector("#wohnort").value;
    let praeferenz_rasse = document.querySelector("#praeferenz_rasse").value;
    let praeferenz_alter = document.querySelector("#praeferenz_alter").value;
    let bild = document.querySelector("#bild").value;
    let beschreibung = document.querySelector("#beschreibung").value;
    let erfahrung = document.querySelector("#erfahrung").value;

    let formData = new FormData();
    formData.append('name', name);
    formData.append('geburtstag', geburtstag);
    formData.append('beruf', beruf);
    formData.append('wohnort', wohnort);
    formData.append('praeferenz_rasse', praeferenz_rasse);
    formData.append('praeferenz_alter', praeferenz_alter);
    formData.append('bild', bild);
    formData.append('beschreibung', beschreibung);
    formData.append('erfahrung', erfahrung);
    formData.append('wochentage', JSON.stringify(wochentage));
    console.log(JSON.stringify(wochentage));

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    formData.append('user', userID);

    fetch("https://796544-5.web.fhgr.ch/php/neuerPate.php",
        {
            body: formData,
            method: "post",
            headers: {
                'Authorization': 'Basic ' + btoa(userID + ':' + token),
            }
        })
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            document.querySelector('#nachricht').innerHTML = data;
            window.location.href = "/";
        })
        .catch((err)=>{
            console.log(err);
        })
}

function holeUserPate() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);

    fetch("https://796544-5.web.fhgr.ch/php/holeUserPate.php",
        {
            body: formData,
            method: "post",
            headers: {
                'Authorization': 'Basic ' + btoa(userID + ':' + token),
            }
        })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {            //session wird geprüft, sonst errormeldung
                return res.json();
            } else {
                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"
              }
        })
        .then((data) => {
            if (data.length == 0) {
                document.querySelector('#infoText').innerHTML = "Fülle dieses Formular aus, um dein Inserat aufzuschalten:"
                document.querySelector('#button-neue').classList.remove("hidden");
            } else {
                pateID = data[0].id;
                document.querySelector('#infoText').innerHTML = "Hier kannst du dein Inserat bearbeiten:" 
                document.querySelector('#button-aktualisieren').classList.remove("hidden");
                document.querySelector('#button-loeschen').classList.remove("hidden");

                document.querySelector('#name').value = data[0].name;               //Formular wird mit Werten aus DB gefüllt
                document.querySelector('#geburtstag').value = data[0].geburtstag;
                document.querySelector('#beruf').value = data[0].beruf;
                document.querySelector('#wohnort').value = data[0].wohnort;
                document.querySelector('#praeferenz_rasse').value = data[0].praeferenz_rasse;
                document.querySelector('#praeferenz_alter').value = data[0].praeferenz_alter;
                document.querySelector('#bild').value = data[0].bild;
                document.querySelector('#beschreibung').value = data[0].beschreibung;
                document.querySelector('#erfahrung').value = data[0].erfahrung;
                document.querySelector('#bild-vorschau').src = data[0].bild;

                holeWochentageVonPate(pateID);
              }
        })
}

function aktualisierePate() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let name = document.querySelector("#name").value;
    let geburtstag = document.querySelector("#geburtstag").value;
    let beruf = document.querySelector("#beruf").value;
    let wohnort = document.querySelector("#wohnort").value;
    let praeferenz_rasse = document.querySelector("#praeferenz_rasse").value;
    let praeferenz_alter = document.querySelector("#praeferenz_alter").value;
    let bild = document.querySelector("#bild").value;
    let beschreibung = document.querySelector("#beschreibung").value;
    let erfahrung = document.querySelector("#erfahrung").value;
    let jsonWochentage = JSON.stringify(wochentage);
    console.log('aktualisiere',jsonWochentage);

    let formData = new FormData();
    formData.append('name', name);
    formData.append('geburtstag', geburtstag);
    formData.append('beruf', beruf);
    formData.append('wohnort', wohnort);
    formData.append('praeferenz_rasse', praeferenz_rasse);
    formData.append('praeferenz_alter', praeferenz_alter);
    formData.append('bild', bild);
    formData.append('beschreibung', beschreibung);
    formData.append('erfahrung', erfahrung);
    formData.append('wochentage', jsonWochentage);
    formData.append('userID', userID);
    formData.append('pateID', pateID);

    fetch("https://796544-5.web.fhgr.ch/php/aktualisierePate.php",
        {
            body: formData,
            method: "post",
            headers: {
                'Authorization': 'Basic ' + btoa(userID + ':' + token),
            }
        })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res.text();

            } else {
                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"
            }
        })
        .then((data) => {
            document.querySelector('#nachricht').innerHTML = data;
            window.location.href = "/";

            document.querySelector('#button-aktualisieren').classList.add("hidden");
            document.querySelector('#button-loeschen').classList.add("hidden");
        })
}

function loeschePate() {

    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    let formData = new FormData();
    formData.append('userID', userID);
    formData.append('pateID', pateID);

    fetch("https://796544-5.web.fhgr.ch/php/loeschePate.php",
        {
            body: formData,
            method: "post",
            headers: {
                'Authorization': 'Basic ' + btoa(userID + ':' + token),
            }
        })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res.text();
            } else {
                alert('Deine Sitzung ist abgelaufen. Du wirst auf die Login-Seite weitergeleitet.');
                window.location = "/login.html"
            }
        })
        .then((data) => {
            
            document.querySelector('#nachricht').innerHTML = data;
            window.location.href = "/";

            document.querySelector('#button-aktualisieren').classList.add("hidden");
            document.querySelector('#button-loeschen').classList.add("hidden");

            document.querySelector('#name').value = "";
            document.querySelector('#geburtstag').value = "";
            document.querySelector('#beruf').value = "";                       
            document.querySelector('#wohnort').value = "";
            document.querySelector('#praeferenz_rasse').value = "";
            document.querySelector('#praeferenz_alter').value = "";
            document.querySelector('#beschreibung').value = "";
            document.querySelector('#erfahrung').value = "";
            document.querySelector('#bild').value = "";
            document.querySelector('#status-frei').checked = false;
            document.querySelector('#status-besetzt').checked = false;
            document.querySelector('#bild-vorschau').src = "";
            document.querySelector('.wochentage').style = "Color: black;";

            wochentage = [];
            pateID = "";
        })
};

function holeAlleWochentage() {
    // console.log("hallo");
    let userID = localStorage.getItem('userID');
    let token = localStorage.getItem('token');

    fetch("https://796544-5.web.fhgr.ch/php/holeAlleWochentage.php",
        {
            body: "",
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
            data.forEach(wochentag => {

                let dieserWochentag = document.createElement("div"); // schreibe die Wochentage mittels div Tag ins HTML

                dieserWochentag.innerHTML = " <p onclick='addWochentag(" + wochentag.id + ")' id='" + wochentag.id + "' class='wochentag'>" + wochentag.wochentage + "</p> ";

                dieserWochentag.style = 'margin-right: 10px; cursor: pointer;';
                document.getElementById("wochentage").appendChild(dieserWochentag);
            });
        })
}

function addWochentag(id) {

    if (wochentage.indexOf(id) == -1) {
        document.getElementById(id).style = "Color: blue;"
        wochentage.push(id);
    } else {
        document.getElementById(id).style = "Color: black;"
        wochentage.splice(wochentage.indexOf(id), 1);
    }
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
            if (data) {
                data.forEach(wochentag => {
                    document.getElementById(wochentag.id).style = "color: Blue;";
                    wochentage.push(parseInt(wochentag.id));
                });
            }
        })
}
