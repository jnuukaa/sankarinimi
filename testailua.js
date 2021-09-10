
// Arvot sankarinimeä varten.
let ika = ['Vastasyntynyt','Vauva','Sinappi','Puklu','Taapero','Napero',
'Tuhoaja','Hyppääjä','Hevos','Muurahais','Paperi','Pahis','Ankka','Koira','Zombi',
'Buddha','Jeesus','Enkeli','Kahvikuppi','Posteljooni','Kuminauha','Puu','Kukka',
'Pleikkari','Hauis','Jäntevä','Naru','Betoni','Rauta','Gubbe','Muuri','Pyyhe',
'Keppi','Super','Mega','Rölli','Tiukka','Kissa','Kärpäs','Housu','Moikkaaja',
'Tölkki','Auto','Kivi','Nörtti','Bodaaja','Juoksija','Juna','Auto','Kenkä',
'Vesi','Maito','Ilma','Pupu','Toimari','Duunari',
'Tuhoaja','Hyppääjä','Hevos','Muurahais','Paperi','Pahis','Ankka','Koira','Zombi',
'Buddha','Jeesus','Enkeli','Kahvikuppi','Posteljooni','Kuminauha','Puu','Kukka',
'Pleikkari','Hauis','Jäntevä','Naru','Betoni','Rauta','Gubbe','Muuri','Pyyhe',
'Keppi','Super','Mega','Rölli','Tiukka','Kissa','Kärpäs','Housu','Moikkaaja',
'Tölkki','Auto','Kivi','Nörtti','Bodaaja','Juoksija','Juna','Auto','Kenkä'];


let otsikko='<h1>Selvitä sankarinimesi!</h1>';
document.getElementById("otsikko").innerHTML = otsikko;

let piirros='<img src = "sankari.png">';
document.getElementById("piirros").innerHTML = piirros;

let nimenSyotto ='Nimesi: <input type="text" id="myName" value="">';
document.getElementById("nimenSyotto").innerHTML = nimenSyotto;

let ianSyotto ='Ikäsi: <input type="text" id="myAge" value="">';
document.getElementById("ianSyotto").innerHTML = ianSyotto;

let ohjeet ='Kirjoita nimesi, sekä ikäsi ja paina nappia selvittääksesi sankarinimesi.';
document.getElementById("ohjeet").innerHTML = ohjeet;

let nappi ='<button onclick="myFunction()">Paina</button>';
document.getElementById("nappi").innerHTML = nappi;

// Funktio iän määrittämän sankaruuden ja nimen yhdistämiseksi.
function myFunction() {
    let x = document.getElementById("myName").value;
    let z = document.getElementById("myAge").value;
    let y = 'Sankarinimesi on: <b>' + (ika[(z)] || 'Uskomaton') + '-' + x + '</b>';
    document.getElementById("demo").innerHTML = y;
  }

let huomio ='HUOMIO! Sankarinimen generointi toimii 0-100 vuotiaille.';
document.getElementById("huomio").innerHTML = huomio;