var DomandaSmartphone1000 = [
    "Qual è il nome della marca che ha come logo una mela morsicata?", //1000
    "Come si chiama l'assistente vocale di iOS?", //1000
    "Come si chiama l'app di messaggistica più utilizzata sugli smartphone?" //1000 
];


var r1Smartphone1000 = [
    "Apple",
    "Lili",
    "Whatsapp"
];

var r2Smartphone1000 = [
    "Huawei",
    "Cortana",
    "Telegram"
];

var r3Smartphone1000 = [
    "Samsung",
    "Siri",
    "Viber"
];

var r4Smartphone1000 = [
    "LG",
    "Cisco",
    "Messenger"
];

var soluzioneSmartphone1000 = [1, 3, 1];

//TIMER
		
		    var id;
             var sec;
            function moveSmartphone1000() {
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
           tempoScadutoSmartphone1000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//SELEZIONO IL TIPO DI DOMANDA 

            function SelezionaSmartphone1000() {
                selettore = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 2
                
                if (selettore==0) {
                    inizioSmartphone1000();
                }
                
                if (selettore==1 && contaJolly<4) {
                    contaJolly++;
                    jollySmartphone1000();
                }
                
                if (selettore==2 && contaRischi<2) {
                    contaRischi++;
                    startRischiaSmartphone1000();
                }
                
                else if (selettore == 1 && contaJolly >= 4 || selettore == 2 && contaRischi >= 2) {
                    selettore = 0; 
                    inizioSmartphone1000();
                }
                }

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeSmartphone1000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSmartphone1000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Smartphone1000[x];
                document.getElementById("risp2").innerHTML = r2Smartphone1000[x];
                document.getElementById("risp3").innerHTML = r3Smartphone1000[x];
                document.getElementById("risp4").innerHTML = r4Smartphone1000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/apple.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/microfono.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/messaggi.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveSmartphone1000();
                
                disabilitaBottoni(); 
                        
        }

//PONGO LA DOMANDA

            function inizioSmartphone1000() {
                 document.getElementById("smartphone1").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaSmartphone1000(1)}; 
                 risp2.onclick = function() {valutaSmartphone1000(2)};
                 risp3.onclick = function() {valutaSmartphone1000(3)};
                 risp4.onclick = function() {valutaSmartphone1000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                
                 risposta++;
                
                 if (selettore == 0) 
                     valore = 1000;
               
                    else 
                        valore = rischio;
                 
                 generaDomandeSmartphone1000();
        }
        
//CONTROLLO LE RISPOSTE
        function valutaSmartphone1000(n){
            clearInterval(id);
            if (n == soluzioneSmartphone1000[oldindice]) {
                montepremi += valore;
                if (selettore == 2) {
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone1").style.backgroundColor = "green";
                document.getElementById("smartphone1").style.color = "white";
                document.getElementById("smartphone1").style.fontSize = "185%";
                document.getElementById("smartphone1").innerHTML = "Rischio";
                }
                
                else {
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone1").style.backgroundColor = "green";
                document.getElementById("smartphone1").style.color = "white";
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
                document.getElementById("smartphone1").style.backgroundColor = "red";
                document.getElementById("smartphone1").style.color = "white";
                document.getElementById("smartphone1").style.fontSize = "185%";
                document.getElementById("smartphone1").innerHTML = "Rischio";
                }
                
                else {
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone1").style.backgroundColor = "red";
                document.getElementById("smartphone1").style.color = "white";
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

      function tempoScadutoSmartphone1000(){
                montepremi -= valore;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                document.getElementById("smartphone1").style.backgroundColor = "red";
                document.getElementById("smartphone1").style.color = "white";
            }

//JOLLY

    function jollySmartphone1000(){
            
        document.getElementById("smartphone1").onclick = function() {}; 
        var risp1 = document.getElementById("risp1");
        var risp2 = document.getElementById("risp2");
        var risp3 = document.getElementById("risp3");
        var risp4 = document.getElementById("risp4");
        risp1.style.display = "none";
        risp2.style.display = "none";
        risp3.style.display = "none";
        risp4.style.display = "none";
        document.getElementById("risultato").style.display = "block";
        montepremi += 1000;
        document.getElementById("risultato").innerHTML = "Il jolly ha fatto aumentare il tuo montepremi di 1000&euro;!<br/> Montepremi: " + montepremi;
        document.getElementById("smartphone1").disabled = true;
        document.getElementById("smartphone1").style.backgroundColor = "#ffaa00";
        document.getElementById("smartphone1").style.color = "white";
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

//RISCHI

            function startRischiaSmartphone1000() { 
                
                if (montepremi<3000 && risposta>=28) {
                    montepremi = 3000;
                    document.getElementById("risultato").innerHTML = "Il tuo montepremi era minore di 3000, ora è pari a 3000 e puoi rischiare!";
                    document.getElementById("rischia").value = 3000;
                }
                   
                document.getElementById("bottone-rischia").onclick = function() {RischiaSmartphone1000()};
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


                function RischiaSmartphone1000() { //Funzione associata al bottone con id "bottone-rischia"
                
                
                rischio = document.getElementById("rischia").value * 1; //Trasformo da stringa a intero
                    
                valore = rischio;

                if (rischio>=3000 && rischio<=montepremi) { //Controllo se la cifra inserita è valida
                    inizioSmartphone1000(); //Se è valida, genero la domanda
                    clearInterval(id);
                    moveSmartphone1000();
                }
                else
                    document.getElementById("non-valido").style.display = "inline";
                    document.getElementById("non-valido").innerHTML = "La cifra inserita non è accettabile!<br>Il rischio deve essere maggiore di 3000&euro; e minore del montepremi attuale (" + montepremi + "€)!"; //Altrimenti, avviso che non va bene
                }
            
            
            