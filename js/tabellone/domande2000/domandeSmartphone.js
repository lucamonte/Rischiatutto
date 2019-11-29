var DomandaSmartphone2000 = [
    "Qual è il nome del primo iPhone uscito in America?", //2000
    "A quale casa produttrice appartiene la serie di telefoni 'Zenfone'?", //2000 
    "Come si chiama quest'app?", //2000
];


var r1Smartphone2000 = [
    "2G",
    "Acer",
    "One Drive"
];

var r2Smartphone2000 = [
    "1G",
    "HP",
    "Dropbox"
];

var r3Smartphone2000 = [
    "1S",
    "LG",
    "Google Drive"
];

var r4Smartphone2000 = [
    "2S",
    "Asus",
    "iCloud"
];

var soluzioneSmartphone2000 = [1, 4, 3];

//TIMER
		
		    var id;
             var sec;
            function moveSmartphone2000() {
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
           tempoScadutoSmartphone2000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//SELEZIONO IL TIPO DI DOMANDA

        function SelezionaSmartphone2000() {
                selettore = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 2
                
                if (selettore==0) {
                    inizioSmartphone2000();
                }
                
                if (selettore==1 && contaJolly<4) {
                    contaJolly++;
                    jollySmartphone2000();
                }
                
                if (selettore==2 && contaRischi<2) {
                    contaRischi++;
                    startRischiaSmartphone2000();
                }
                
                else if (selettore == 1 && contaJolly >= 4 || selettore == 2 && contaRischi >= 2) {
                    selettore = 0;
                    inizioSmartphone2000();
                }
                }

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeSmartphone2000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSmartphone2000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Smartphone2000[x];
                document.getElementById("risp2").innerHTML = r2Smartphone2000[x];
                document.getElementById("risp3").innerHTML = r3Smartphone2000[x];
                document.getElementById("risp4").innerHTML = r4Smartphone2000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/iPhone.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/zenfone.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/app.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveSmartphone2000();
                disabilitaBottoni(); 
                                
        }

//PONGO LA DOMANDA

              function inizioSmartphone2000() {
                 document.getElementById("smartphone2").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaSmartphone2000(1)}; 
                 risp2.onclick = function() {valutaSmartphone2000(2)};
                 risp3.onclick = function() {valutaSmartphone2000(3)};
                 risp4.onclick = function() {valutaSmartphone2000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                  
                 risposta++;
                  
                 if (selettore == 0) 
                     valore = 2000;
               
                    else 
                        valore = rischio;
                 
                 generaDomandeSmartphone2000();
        }
        
//CONTROLLO LE RISPOSTE
        function valutaSmartphone2000(n){
            clearInterval(id);
            if (n == soluzioneSmartphone2000[oldindice]) {
                montepremi += 2000;
                if (selettore == 2) {
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone2").style.backgroundColor = "green";
                document.getElementById("smartphone2").style.color = "white";
                document.getElementById("smartphone2").style.fontSize = "185%";
                document.getElementById("smartphone2").innerHTML = "Rischio";
                }
                
                else {
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone2").style.backgroundColor = "green";
                document.getElementById("smartphone2").style.color = "white";
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
                montepremi -= 2000;
                if (selettore == 2) {
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone2").style.backgroundColor = "red";
                document.getElementById("smartphone2").style.color = "white";
                document.getElementById("smartphone2").style.fontSize = "185%";
                document.getElementById("smartphone2").innerHTML = "Rischio";
                }
                
                else {
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone2").style.backgroundColor = "red";
                document.getElementById("smartphone2").style.color = "white";
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

      function tempoScadutoSmartphone2000(){
                montepremi -= 2000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                document.getElementById("smartphone2").style.backgroundColor = "red";
                document.getElementById("smartphone2").style.color = "white";
            }

//JOLLY 
		
		function jollySmartphone2000(){
        
        document.getElementById("smartphone2").onclick = function() {};
        var risp1 = document.getElementById("risp1");
        var risp2 = document.getElementById("risp2");
        var risp3 = document.getElementById("risp3");
        var risp4 = document.getElementById("risp4");
        risp1.style.display = "none";
        risp2.style.display = "none";
        risp3.style.display = "none";
        risp4.style.display = "none";
        document.getElementById("risultato").style.display = "block";
        montepremi += 2000;
        document.getElementById("risultato").innerHTML = "Il jolly ha fatto aumentare il tuo montepremi di 2000&euro;!<br/> Montepremi: " + montepremi;
        document.getElementById("smartphone2").disabled = true;
        document.getElementById("smartphone2").style.backgroundColor = "#ffaa00";
        document.getElementById("smartphone2").style.color = "white";
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

      function tempoScadutoSmartphone2000(){
                montepremi -= valore;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                document.getElementById("serie2").style.backgroundColor = "red";
                document.getElementById("serie2").style.color = "white";
            }

//RISCHIO 

        function startRischiaSmartphone2000() { //Funzione associata al bottone con id "smartphone5" sul tabellone
                
                if (montepremi<3000 && risposta>=28) {
                    montepremi = 3000;
                    document.getElementById("risultato").innerHTML = "Il tuo montepremi era minore di 3000, ora è pari a 3000 e puoi rischiare!";
                    document.getElementById("rischia").value = 3000;
                }
                   
                document.getElementById("bottone-rischia").onclick = function() {RischiaSmartphone2000()};
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


                function RischiaSmartphone2000() { //Funzione associata al bottone con id "bottone-rischia"
                
                
                rischio = document.getElementById("rischia").value * 1; //Trasformo da stringa a intero
                    
                valore = rischio;

                if (rischio>=3000 && rischio<=montepremi) { //Controllo se la cifra inserita è valida
                    inizioSmartphone2000(); //Se è valida, genero la domanda
                    clearInterval(id);
                    moveSmartphone2000();
                }
                else
                    document.getElementById("non-valido").style.display = "inline";
                    document.getElementById("non-valido").innerHTML = "La cifra inserita non è accettabile!<br>Il rischio deve essere maggiore di 3000&euro; e minore del montepremi attuale (" + montepremi + "€)!"; //Altrimenti, avviso che non va bene
                }

            
            