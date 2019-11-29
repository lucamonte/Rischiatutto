var DomandaCalcio2000 = [

                "Di che nazionalità è il centrocampista del Napoli Hamsik? ", //2000
                "Quale squadra di Lega Pro arrivò in semifinale di Coppa Italia nel 2016?", //2000
                "Chi detiene il record di marcature in una singola stagione di serie A?", //2000

            ];
var r1Calcio2000 = [ 

            "Russa", 
            "Carrarese", 
            "Nedved" 
];
 var r2Calcio2000 = [ 

            "Slovena", 
            "Casertana", 
            "Higuain"
];
 var r3Calcio2000 = [ 

            "Slovacca", 
            "Alessandria",
            "Hubner" 
];
 var r4Calcio2000 = [  

            "Ucraina", 
            "Albinoleffe", 
            "Toni"
];
 var soluzioneCalcio2000 = [3, 3, 2]; 
        


       
		
	//TIMER
		
		    var id;
             var sec;
            function moveCalcio2000() {
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
           tempoScadutoCalcio2000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeCalcio2000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaCalcio2000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Calcio2000[x];
                document.getElementById("risp2").innerHTML = r2Calcio2000[x];
                document.getElementById("risp3").innerHTML = r3Calcio2000[x];
                document.getElementById("risp4").innerHTML = r4Calcio2000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/hamsik.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/coppa-italia.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/pallone.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveCalcio2000();
                disabilitaBottoni();
                      
        }

//PONGO LA DOMANDA

          function inizioCalcio2000() {
                 document.getElementById("calcio2").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaCalcio2000(1)}; 
                 risp2.onclick = function() {valutaCalcio2000(2)};
                 risp3.onclick = function() {valutaCalcio2000(3)};
                 risp4.onclick = function() {valutaCalcio2000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
              
                 risposta++;
                 
                 generaDomandeCalcio2000();
        }
        
//CONTROLLO LE RISPOSTE

        function valutaCalcio2000(n){
            clearInterval(id);
            if (n == soluzioneCalcio2000[oldindice]) {
                montepremi+=rischio;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("calcio2").style.backgroundColor = "green";
                document.getElementById("calcio2").style.color = "white";
                document.getElementById("calcio2").style.fontSize = "185%";
                document.getElementById("calcio2").innerHTML = "Rischio";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                document.getElementById("calcio2").onclick = function () {};
                abilitaBottoni();
            }
            else {
                montepremi-=rischio;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                document.getElementById("calcio2").style.backgroundColor = "red";
                document.getElementById("calcio2").style.color = "white";
                document.getElementById("calcio2").style.fontSize = "185%";
                document.getElementById("calcio2").innerHTML = "Rischio";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                document.getElementById("calcio2").onclick = function () {};
                abilitaBottoni();
            }
            
            
            
                if (risposta==30 && montepremi <=0)
                window.location.href="../html/hai-perso-2.html";
            
            else if (risposta==30) { 
                    window.location.href="../html/riepilogo-terza-fase.html";
                    localStorage.setItem("montepremi", montepremi);
                }
        }

            function startRischia2() { //Funzione associata al bottone con id "smartphone5" sul tabellone
                
                if (montepremi<3000 && risposta>=28) {
                    montepremi = 3000;
                    document.getElementById("risultato").innerHTML = "Il tuo montepremi era minore di 3000, ora è pari a 3000 e puoi rischiare!";
                    document.getElementById("rischia").value = 3000;
                }
                   
                document.getElementById("bottone-rischia").onclick = function() {Rischia2()};
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


                function Rischia2() { //Funzione associata al bottone con id "bottone-rischia"
                
                
                rischio = document.getElementById("rischia").value * 1; //Trasformo da stringa a intero

                if (rischio>=3000 && rischio<=montepremi) { //Controllo se la cifra inserita è valida
                    inizioCalcio2000(); //Se è valida, genero la domanda
                    clearInterval(id);
                    moveCalcio2000();
                }
                else
                    document.getElementById("non-valido").style.display = "inline";
                    document.getElementById("non-valido").innerHTML = "La cifra inserita non è accettabile!<br>Il rischio deve essere maggiore di 3000&euro; e minore del montepremi attuale (" + montepremi + "€)!"; //Altrimenti, avviso che non va bene
                }

      function tempoScadutoCalcio2000(){
                montepremi -= rischio;
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
            