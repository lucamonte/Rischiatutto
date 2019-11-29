var DomandaCalcio3000 = [
                "Quale fu il primo club di calcio fondato in Italia?", //3000
                "Come venne denominata l' Inter durante il ventennio fascista?", //3000
                "Quale centravanti guidò il Verona alla conquista dello scudetto 1984/1985?", //3000
            ];
var r1Calcio3000 = [ 
            "Genoa", 
            
            "Internazionale", 
            
            "Di Natale" 
                ];
 var r2Calcio3000 = [ 
            "Fiorentina", 
 
            "Inter", 
            
            "Rossi" 
                ];
 var r3Calcio3000 = [ 
            "Milan", 
            
            "Intermilan", 
            
            "Graziani" 
            ];
 var r4Calcio3000 = [  
            "Juventus", 
            
            "Ambrosiana Inter", 
            
            "Galderisi" 
                ];
 var soluzioneCalcio3000 = [1, 4, 4]; 
        


       
		
	//TIMER
		
		    var id;
             var sec;
            function moveCalcio3000() {
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
           tempoScadutoCalcio3000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeCalcio3000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaCalcio3000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Calcio3000[x];
                document.getElementById("risp2").innerHTML = r2Calcio3000[x];
                document.getElementById("risp3").innerHTML = r3Calcio3000[x];
                document.getElementById("risp4").innerHTML = r4Calcio3000[x];
				if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/bandiera_italia.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/inter.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/calcio/verona.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveCalcio3000();
                disabilitaBottoni(); 
                       
        }

//PONGO LA DOMANDA

             function inizioCalcio3000() {
                 document.getElementById("calcio3").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaCalcio3000(1)}; 
                 risp2.onclick = function() {valutaCalcio3000(2)};
                 risp3.onclick = function() {valutaCalcio3000(3)};
                 risp4.onclick = function() {valutaCalcio3000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                 
                 risposta++;
                 
                 generaDomandeCalcio3000();
        }
        
//CONTROLLO LE RISPOSTE

        function valutaCalcio3000(n){
            clearInterval(id);
            if (n == soluzioneCalcio3000[oldindice]) {
                montepremi += 3000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("calcio3").style.backgroundColor = "green";
                document.getElementById("calcio3").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
            }
            else {
                montepremi -= 3000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                document.getElementById("calcio3").style.backgroundColor = "red";
                document.getElementById("calcio3").style.color = "white";
                 
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

        function tempoScadutoCalcio3000(){
                montepremi -= 3000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
             document.getElementById("calcio3").style.backgroundColor = "red";
                document.getElementById("calcio3").style.color = "white";
            }
            