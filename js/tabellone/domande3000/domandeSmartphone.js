var DomandaSmartphone3000 = [
    "Di quale tipo di schermo è dotato il Samsung Galaxy S7?", //3000
    "Qual è la tecnologia che fornisce connettività wireless bidirezionale a corto raggio fino a un massimo di 10 cm?", //3000
    "Qual è il nome della serie di smartband prodotto da Xiaomi?", //3000
];


var r1Smartphone3000 = [
    "TFT",
    "Bluetooth",
    "Edubro"
];

var r2Smartphone3000 = [
    "IPS",
    "NFC",
    "Teclast"
];

var r3Smartphone3000 = [
    "AMOLED",
    "3G",
    "Cubot"
];

var r4Smartphone3000 = [
    "Retina",
    "Wi-Fi",
    "Mi Band"
];

var soluzioneSmartphone3000 = [3, 2, 4];

//TIMER
		
		    var id;
             var sec;
            function moveSmartphone3000() {
  var elem = document.getElementById("myBarTabellone");   
  var width = 0;
  sec=0;
  elem.style.width = width+"%";
  elem.innerHTML = 0 ;
  id= setInterval(frame, 1000);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      
      
    } else {
      width+=5; 
      elem.style.width = width+"%"; 
      sec=width/5;
      if(sec>=20){
           elem.innerHTML = "Tempo Scaduto";
           tempoScadutoSmartphone3000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//SELEZIONO IL TIPO DI DOMANDA 

    function SelezionaSmartphone3000() {
                selettore = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 2
                
                if (selettore==0) {
                    inizioSmartphone3000();
                }
                
                if (selettore==1 && contaJolly<4) {
                    contaJolly++;
                    jollySmartphone3000();
                }
                
                if (selettore==2 && contaRischi<2) {
                    contaRischi++;
                    startRischiaSmartphone3000();
                }
                
                else if (selettore == 1 && contaJolly >= 4 || selettore == 2 && contaRischi >= 2) {
                    selettore = 0;
                    inizioSmartphone3000();
                }
                }


//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeSmartphone3000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSmartphone3000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Smartphone3000[x];
                document.getElementById("risp2").innerHTML = r2Smartphone3000[x];
                document.getElementById("risp3").innerHTML = r3Smartphone3000[x];
                document.getElementById("risp4").innerHTML = r4Smartphone3000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/s7.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/connessione.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/xiaomi.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveSmartphone3000();
                disabilitaBottoni(); 
               
                                
        }

//PONGO LA DOMANDA

                    function inizioSmartphone3000() {
                 document.getElementById("smartphone3").onclick = function() {}; 
                 document.getElementById("rischia").style.display = "none";
                 document.getElementById("bottone-rischia").style.display = "none";
                 document.getElementById("non-valido").style.display = "none";
                        
                 var risp1 = document.getElementById("risp1");
                 var risp2 = document.getElementById("risp2");
                 var risp3 = document.getElementById("risp3");
                 var risp4 = document.getElementById("risp4");
                 
                 risp1.style.display = "inline";
                 risp2.style.display = "inline";
                 risp3.style.display = "inline";
                 risp4.style.display = "inline";
                document.getElementById("myBarTabellone").style.display = "block";
                document.getElementById("myProgressTabellone").style.display = "block";
                 
                 risp1.disabled = false;
                 risp2.disabled = false;
                 risp3.disabled = false;
                 risp4.disabled = false;
                 
                 risp1.onclick = function() {valutaSmartphone3000(1)}; 
                 risp2.onclick = function() {valutaSmartphone3000(2)};
                 risp3.onclick = function() {valutaSmartphone3000(3)};
                 risp4.onclick = function() {valutaSmartphone3000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                        
                 risposta++;
                        
                 if (selettore == 0) 
                     valore = 3000;
               
                    else 
                        valore = rischio;
                 
                 generaDomandeSmartphone3000();
        }
        
//CONTROLLO LE RISPOSTE
        
        function valutaSmartphone3000(n){
            clearInterval(id);
            if (n == soluzioneSmartphone3000[oldindice]) {
                montepremi += valore;
                
                if (selettore == 2) {
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone3").style.backgroundColor = "green";
                document.getElementById("smartphone3").style.color = "white";
                document.getElementById("smartphone3").style.fontSize = "185%";
                document.getElementById("smartphone3").innerHTML = "Rischio";
                }
                
                else {
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone3").style.backgroundColor = "green";
                document.getElementById("smartphone3").style.color = "white";
                }
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
            }
            else {
                montepremi -= valore;
                
                if (selettore == 2) {
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi;
                document.getElementById("serie3").style.backgroundColor = "red";
                document.getElementById("serie3").style.color = "white";
                document.getElementById("serie3").style.fontSize = "185%";
                document.getElementById("serie3").innerHTML = "Rischio";
                }
                
                else {
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                document.getElementById("smartphone3").style.backgroundColor = "red";
                document.getElementById("smartphone3").style.color = "white";
                }
                
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
            }
            
            
                if (risposta==30 && montepremi <=0)
                window.location.href="../html/hai-perso-2.html";
            
            else if (risposta==30) { 
                    window.location.href="../html/riepilogo-terza-fase.html";
                    localStorage.setItem("montepremi", montepremi);
                }
        }

         function tempoScadutoSmartphone3000(){
                montepremi -= 3000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
              document.getElementById("smartphone3").style.backgroundColor = "red";
                document.getElementById("smartphone3").style.color = "white";
            }

//RISCHIO

function startRischiaSmartphone3000() { //Funzione associata al bottone con id "smartphone5" sul tabellone
                
                if (montepremi<3000 && risposta>=28) {
                    montepremi = 3000;
                    document.getElementById("risultato").innerHTML = "Il tuo montepremi era minore di 3000, ora è pari a 3000 e puoi rischiare!";
                    document.getElementById("rischia").value = 3000;
                }
                   
                document.getElementById("bottone-rischia").onclick = function() {RischiaSmartphone3000()};
                document.getElementById("img-tabellone").src = "../img/tabellone/rischio-2.jpg"; //Cambio l'immagine
                document.getElementById("img-tabellone").style.display = "inline";
                    
                var risp1 = document.getElementById("risp1");
                var risp2 = document.getElementById("risp2");
                var risp3 = document.getElementById("risp3");
                var risp4 = document.getElementById("risp4");
                    
                
                //Stampo nel div la stringa     
                document.getElementById("domanda-tabellone").innerHTML = "Hai trovato un rischio!<br>Inserisci una cifra compresa tra 3000&euro; e il tuo montepremi totale (" + montepremi + "€).";
                document.getElementById("domanda-tabellone").style.color = "black"; //Colore dei caratteri nero
                document.getElementById("rischia").style.display = "inline"; //Mostro il textfield per inserire il rischio
                document.getElementById("bottone-rischia").style.display = "inline"; //Mostro il bottone
                
                //Nascondo i quattro bottoni di risposta
                risp1.style.display = "none"; 
                risp2.style.display = "none";
                risp3.style.display = "none";
                risp4.style.display = "none";
                }


                function RischiaSmartphone3000() { //Funzione associata al bottone con id "bottone-rischia"
                
                
                rischio = document.getElementById("rischia").value * 1; //Trasformo da stringa a intero
                    
                valore = rischio;

                if (rischio>=3000 && rischio<=montepremi) { //Controllo se la cifra inserita è valida
                    inizioSmartphone3000(); //Se è valida, genero la domanda
                    clearInterval(id);
                    moveSmartphone3000();
                }
                else
                    document.getElementById("non-valido").style.display = "inline";
                    document.getElementById("non-valido").innerHTML = "La cifra inserita non è accettabile!<br>Il rischio deve essere maggiore di 3000&euro; e minore del montepremi attuale (" + montepremi + "€)!"; //Altrimenti, avviso che non va bene
                }

//JOLLY

    function jollySmartphone3000(){
        
        document.getElementById("smartphone3").onclick = function() {};
        var risp1 = document.getElementById("risp1");
        var risp2 = document.getElementById("risp2");
        var risp3 = document.getElementById("risp3");
        var risp4 = document.getElementById("risp4");
        risp1.style.display = "none";
        risp2.style.display = "none";
        risp3.style.display = "none";
        risp4.style.display = "none";
        document.getElementById("risultato").style.display = "block";
        montepremi += 3000;
        document.getElementById("risultato").innerHTML = "Il jolly ha fatto aumentare il tuo montepremi di 3000&euro;!<br/> Montepremi: " + montepremi;
        document.getElementById("smartphone3").disabled = true;
        document.getElementById("smartphone3").style.backgroundColor = "#ffaa00";
        document.getElementById("smartphone3").style.color = "white";
        document.getElementById("domanda-tabellone").innerHTML = "Complimenti, hai trovato uno dei jolly!";
        document.getElementById("img-tabellone").src = "../img/tabellone/jolly.png";
        document.getElementById("img-tabellone").style.display = "inline";
            
        document.getElementById("myBarTabellone").style.display = "none";
        document.getElementById("myProgressTabellone").style.display = "none";
        document.getElementById("rischia").style.display = "none";
        document.getElementById("bottone-rischia").style.display = "none";
        document.getElementById("non-valido").style.display = "none";
        clearInterval(id);
            
                 risposta++;
        
              if (risposta==30 && montepremi <=0)
                window.location.href="../html/hai-perso-2.html";
            
            else if (risposta==30) { 
                    window.location.href="../html/riepilogo-terza-fase.html";
                    localStorage.setItem("montepremi", montepremi);
                }
        }
            
            