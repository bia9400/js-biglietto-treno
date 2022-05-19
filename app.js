
let eta = prompt("Qual è la tua età?");
let km = prompt("Quanti chilometri devi percorrere?");
let prezzoBiglietto;
let tariffaAlKilometro = km * 0.21;
let etaLenght = eta.length
let kmLenght = km.length


if (isNaN(parseInt(eta)) && isNaN(parseInt(km))) {
    alert("Inserire dei valori numerici nei campi Età e Chilometri")
}
else if (isNaN(parseInt(eta)) && !isNaN(parseInt(km))) {
    alert("Inserire un Età valida (es:8..98)")
}
else if (!isNaN(parseInt(eta)) && isNaN(parseInt(km))) {
    alert("Inserire un chilometraggio minimo (es: 0...1520)")
}
else {
    if (etaLenght <= 0 || kmLenght <= 0) {
        alert("Inserire dei valori dentro i campi Età e Km")
    }
    else if (parseInt(eta) <= 0 || parseInt(km) <= 0) {
        alert("Wow non sei ancora nato? O sai viaggiare per distanze negative o nulle? inserisci dei valori positivi e maggiori di 0 nei campi richiesti")
    }
    else if (parseInt(km) > 0 && parseInt(km) < 10) {
        alert("La tua tratta non esiste, inserire un chilometraggio più grande")
    }
    else if (parseInt(km) > 2000) {
        alert("Seee vabbéé siamo Trenitalia mica Starlink..Inserisci un chilometraggio più corto")
    }
    else if (parseInt(eta) > 120) {
        alert("Complimenti per la tua età, ma non vorremmo mai morissi sul nostro treno")
    }
    else if (parseInt(eta) > 0 && parseInt(eta) < 5) {
        alert("Il biglietto per i minori di 6 anni è cmpletamente gratuito")
        let printTicket = document.getElementById("exercise")
        printTicket.innerHTML = (`<h1>Per Età: ${eta} anni costo biglietto: 0$ </h1> `)
    }
    else {
        if (parseInt(eta) < 18) {
            prezzoBiglietto = tariffaAlKilometro - (tariffaAlKilometro * 0.2)
            let printTicket = document.getElementById("exercise")

            printTicket.innerHTML = (`<li>Età: ${eta} anni </li> <li>Chilometri da percorrere: ${km} Km</li> <li>Prezzo biglietto: ${(Math.round(prezzoBiglietto * 100) / 100)} $</li>`)
        }
        else if (parseInt(eta) > 65) {
            prezzoBiglietto = tariffaAlKilometro - (tariffaAlKilometro * 0.4)
            let printTicket = document.getElementById("exercise")

            printTicket.innerHTML = (`<li>Età: ${eta} anni </li> <li>Chilometri da percorrere: ${km} Km</li> <li>Prezzo biglietto: ${(Math.round(prezzoBiglietto * 100) / 100)} $</li>`)
        }
        else {
            prezzoBiglietto = tariffaAlKilometro
            let printTicket = document.getElementById("exercise")

            printTicket.innerHTML = (`<li>Età: ${eta} anni </li> <li>Chilometri da percorrere: ${km} Km</li> <li>Prezzo biglietto: ${(Math.round(prezzoBiglietto * 100) / 100)} $</li>`)

        }
    }

}




