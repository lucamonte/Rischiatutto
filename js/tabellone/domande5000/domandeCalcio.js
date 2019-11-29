
var DomandaCalcio5000 = [

                "Quale giocatore veniva soprannominato 'Balilla'?", //5000
                
                "Chi detiene il record di gol nella squadra della Lazio?", //5000
             

                "Quale calciatore vinse la Scarpa D'oro 2007?", //5000

            ];
var r1Calcio5000 = [ 
        
            "Valentino Mazzola", 
           
            "Piola", 
            
            "Totti"
            ];
 var r2Calcio5000 = [ 
           
            "Giuseppe Meazza", 
           
            "Chinaglia", 
           
            "Pirlo"];
 var r3Calcio5000 = [ 
            
            "Roberto Baggio", 

            "Giordano", 
           
            "Del Piero"];
 var r4Calcio5000 = [  
            
            "Gigi Riva", 
           
            "Signori", 
           
            "Toni"];
 var soluzioneCalcio5000 = [2, 1, 4]; 
        


       
		
	//TIMER
		
		    var id;
             var sec;
            function moveCalcio5000() {
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
           tempoScadutoCalcio5000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}




//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeCalcio5000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaCalcio5000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Calcio5000[x];
                document.getElementById("risp2").innerHTML = r2Calcio5000[x];
                document.getElementById("risp3").innerHTML = r3Calcio5000[x];
                document.getElementById("risp4").innerHTML = r4Calcio5000[x];
				if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/balilla.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/lazio.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/scarpa.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveCalcio5000();
                disabilitaBottoni(); 
                
        }

//PONGO LA DOMANDA

             function inizioCalcio5000() {
                 document.getElementById("calcio5").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaCalcio5000(1)}; 
                 risp2.onclick = function() {valutaCalcio5000(2)};
                 risp3.onclick = function() {valutaCalcio5000(3)};
                 risp4.onclick = function() {valutaCalcio5000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                 
                 risposta++;
                 
                 generaDomandeCalcio5000();
        }
        
//CONTROLLO LE RISPOSTE

        function valutaCalcio5000(n){
            clearInterval(id);
            if (n == soluzioneCalcio5000[oldindice]) {
                montepremi += 5000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("calcio5").style.backgroundColor = "green";
                document.getElementById("calcio5").style.color = "white";
                abilitaBottoni();
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
            }
            else {
                montepremi -= 5000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                document.getElementById("calcio5").style.backgroundColor = "red";
                document.getElementById("calcio5").style.color = "white";
                abilitaBottoni();
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
            }
            
            
                if (risposta==30 && montepremi <=0)
                window.location.href="../html/hai-perso-2.html";
            
            else if (risposta==30) { 
                    window.location.href="../html/riepilogo-terza-fase.html";
                    localStorage.setItem("montepremi", montepremi);
                }
        }

      function tempoScadutoCalcio5000(){
                montepremi -= 5000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
           document.getElementById("calcio5").style.backgroundColor = "red";
                document.getElementById("calcio5").style.color = "white";
            }
            