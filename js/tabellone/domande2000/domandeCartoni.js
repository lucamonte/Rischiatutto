var DomandaCartoni2000=[
            
            "Come si chiama il bambino che porta sempre un berretto rosa a cui sono stati affidati i fantagenitori?", //2000
            "Chi è l'antagonista principale di Perry l'ornitorinco?", //2000
            "Come si chiama il film in computer grafica che ha come protagonista un orco?" //2000
            
            ];
var r1Cartoni2000 = [ 
             
            "Timmy", 
            "Isabella", 
            "Shrek"];
 var r2Cartoni2000 = [ 
           
            "Denzel", 
            "Candace", 
            "Trolls"];
 var r3Cartoni2000 = [ 
            
            "Mark", 
            "Doofershmitz", 
            "Il Fantabosco"];
 var r4Cartoni2000 = [  
          
            "Francis", 
            "Buford", 
            "Winnie The Pooh"];
 var soluzioneCartoni2000 = [1, 3, 1]; 


//TIMER
		
//TIMER
		
		    var id;
             var sec;
            function moveCartoni2000() {
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
           tempoScadutoCartoni2000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//SELEZIONO IL TIPO DI DOMANDA

            function SelezionaCartoni2000() {
                selettore = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 2
                
                if (selettore==0) {
                    inizioCartoni2000();
                }
                
                if (selettore==1 && contaJolly<4) {
                    contaJolly++;
                    jollyCartoni2000();
                }
                
                if (selettore==2 && contaRischi<2) {
                    contaRischi++;
                    startRischiaCartoni2000();
                }
                
                else if (selettore == 1 && contaJolly >= 4 || selettore == 2 && contaRischi >= 2) {
                    selettore = 0;
                    inizioCartoni2000();
                }
                }

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeCartoni2000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaCartoni2000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Cartoni2000[x];
                document.getElementById("risp2").innerHTML = r2Cartoni2000[x];
                document.getElementById("risp3").innerHTML = r3Cartoni2000[x];
                document.getElementById("risp4").innerHTML = r4Cartoni2000[x];
                                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/fantagenitori-2.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/perry.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/movie.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveCartoni2000();
                disabilitaBottoni(); 
               
                                
        }

//PONGO LA DOMANDA

           function inizioCartoni2000() {
                 document.getElementById("cartoni2").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaCartoni2000(1)}; 
                 risp2.onclick = function() {valutaCartoni2000(2)};
                 risp3.onclick = function() {valutaCartoni2000(3)};
                 risp4.onclick = function() {valutaCartoni2000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
               
                 risposta++;
               
                 if (selettore == 0) 
                     valore = 2000;
               
                    else 
                        valore = rischio;
                 
                 generaDomandeCartoni2000();
        }
        
//CONTROLLO LE RISPOSTE

    function valutaCartoni2000(n){
            clearInterval(id);
            if (n == soluzioneCartoni2000[oldindice]) {
                montepremi += valore;
                if (selettore == 2) {
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("cartoni2").style.backgroundColor = "green";
                document.getElementById("cartoni2").style.color = "white";
                document.getElementById("cartoni2").style.fontSize = "185%";
                document.getElementById("cartoni2").innerHTML = "Rischio";
                }
                
                else {
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("cartoni2").style.backgroundColor = "green";
                document.getElementById("cartoni2").style.color = "white";
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
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa risposta errata
                document.getElementById("cartoni2").style.backgroundColor = "red";
                document.getElementById("cartoni2").style.color = "white";
                 
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

         function tempoScadutoCartoni2000(){
                montepremi -= valore;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                document.getElementById("cartoni2").style.backgroundColor = "red";
                document.getElementById("cartoni2").style.color = "white";
            }

//RISCHIO

            function startRischiaCartoni2000() { //Funzione associata al bottone con id "smartphone5" sul tabellone
                
                if (montepremi<3000 && risposta>=28) {
                    montepremi = 3000;
                    document.getElementById("risultato").innerHTML = "Il tuo montepremi era minore di 3000, ora è pari a 3000 e puoi rischiare!";
                    document.getElementById("rischia").value = 3000;
                }
                   
                document.getElementById("bottone-rischia").onclick = function() {RischiaCartoni2000()};
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


                function RischiaCartoni2000() { //Funzione associata al bottone con id "bottone-rischia"
                
                
                rischio = document.getElementById("rischia").value * 1; //Trasformo da stringa a intero
                    
                valore = rischio;

                if (rischio>=3000 && rischio<=montepremi) { //Controllo se la cifra inserita è valida
                    inizioCartoni2000(); //Se è valida, genero la domanda
                    clearInterval(id);
                    moveCartoni2000();
                }
                else
                    document.getElementById("non-valido").style.display = "inline";
                    document.getElementById("non-valido").innerHTML = "La cifra inserita non è accettabile!<br>Il rischio deve essere maggiore di 3000&euro; e minore del montepremi attuale (" + montepremi + "€)!"; //Altrimenti, avviso che non va bene
                }

      function tempoScadutoCalcio2000(){
                montepremi -= valore;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                document.getElementById("calcio2").style.backgroundColor = "red";
                document.getElementById("calcio2").style.color = "white";
            }

//JOLLY

        function jollyCartoni2000(){
        
        document.getElementById("cartoni2").onclick = function() {};
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
        document.getElementById("cartoni2").disabled = true;
        document.getElementById("cartoni2").style.backgroundColor = "#ffaa00";
        document.getElementById("cartoni2").style.color = "white";
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
            
            