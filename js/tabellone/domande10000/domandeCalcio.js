var DomandaCalcio10000 = [

                "Durante la seconda guerra mondiale in quali anni non venne disputato il campionato?", //10000
                "Quale giocatore detiene il record di presenze in Serie A?", //10000
               
                "Da quale squadra inglese proveniva il gallese Ian Rush quando giunse alla Juventus?"//10000
            ];
var r1Calcio10000 = [ 

            "1944/1945", 
            "Javier Zanetti", 
           
            "Chelsea"];
 var r2Calcio10000 = [ 

            "1938/1939", 
            "Francesco Totti", 
            
            "Liverpool"];
 var r3Calcio10000 = [ 
 
            "1950/1951", 
            "Gianluigi Buffon", 
           
            "Manchester"];
 var r4Calcio10000 = [  

            "1955/1956", 
            "Paolo Maldini", 
            
            "Arsenal"];
 var soluzioneCalcio10000 = [1, 4, 2]; 
        


       
		
	//TIMER
		
		    var id;
             var sec;
            function moveCalcio10000() {
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
           tempoScadutoCalcio10000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeCalcio10000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaCalcio10000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Calcio10000[x];
                document.getElementById("risp2").innerHTML = r2Calcio10000[x];
                document.getElementById("risp3").innerHTML = r3Calcio10000[x];
                document.getElementById("risp4").innerHTML = r4Calcio10000[x];
				if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/carroarmato.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/serieA.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/rush.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveCalcio10000();
                disabilitaBottoni(); 
                
                                
        }

//PONGO LA DOMANDA

             function inizioCalcio10000() {
                 document.getElementById("calcio10").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaCalcio10000(1)}; 
                 risp2.onclick = function() {valutaCalcio10000(2)};
                 risp3.onclick = function() {valutaCalcio10000(3)};
                 risp4.onclick = function() {valutaCalcio10000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                 
                 risposta++;
                 
                 generaDomandeCalcio10000();
        }
        
//CONTROLLO LE RISPOSTE

        function valutaCalcio10000(n){
            clearInterval(id);
            if (n == soluzioneCalcio10000[oldindice]) {
                montepremi += 10000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("calcio10").style.backgroundColor = "green";
                document.getElementById("calcio10").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
            }
            else {
                montepremi -= 10000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                document.getElementById("calcio10").style.backgroundColor = "red";
                document.getElementById("calcio10").style.color = "white";
                 
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

     function tempoScadutoCalcio10000(){
                montepremi -= 10000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
          document.getElementById("calcio10").style.backgroundColor = "red";
                document.getElementById("calcio10").style.color = "white";
            }
            