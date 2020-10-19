var nomeUtente = prompt('Ciao, qual è il tuo nome?');

var cognomeUtente = prompt('E il tuo cognome?');

var colorePreferito = prompt('Qual è il tuo colore preferito?');

var password = nomeUtente + cognomeUtente + colorePreferito;

document.getElementById("password").innerHTML = 'La tua password è: ' + password + '19';
