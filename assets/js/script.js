
// Scrivere un programma che chieda all’utente:
// -Il numero di chilometri da percorrere
// -Età del passeggero 

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// -il prezzo del biglietto è definito in base ai km (0.21 € al km)
// -va applicato uno sconto del 20% per i minorenni
// -va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: 
// usando esclusivamente due input e un bottone (non stilizzati), 
// realizziamo le specifiche scritte sopra. 
// La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante 
// allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e 
// visualizzare il calcolo finale con il prezzo. 
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
// (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 



// Elements richiesti
const age_input_element = document.querySelector('#age');
const km_input_element = document.querySelector('#km');
const generate_button_element = document.querySelector('#generate');

const price_per_km = 0.21;


// Event listener sul button
generate_button_element.addEventListener('click', function(){

    console.log('click', age_input_element.value, km_input_element.value);

    // Trasformato i value ricevuti in variabili
    const age = parseInt(age_input_element.value);
    const km = Number(km_input_element.value);

    let full_price = km * price_per_km;
    let discount;

    console.log(age, km, price_per_km);
    console.log(full_price); //prezzo del biglietto

    if (age < 18){

        console.log('sconto 20%');
        discount = 0.2;

    } else if (age > 65) {

        console.log('sconto 40%');
        discount = 0.4;

    } else {

        console.log(full_price);
        discount = 0;

    }

    // aggiunto prezzo finale con 2 decimali
    const final_price = (full_price - (full_price * discount)).toFixed(2);

    console.log(final_price);

    document.querySelector('.ticket').innerHTML = 'il prezzo del biglietto è:' + final_price;





})