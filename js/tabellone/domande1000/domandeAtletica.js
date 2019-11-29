var DomandaAtletica1000 = [
                
                "Come si chiama l'oggetto che si passano gli atleti nelle staffette?", 
                "Come si chiama questo esercizio?", 
                "Dove si sono tenute le olimpiadi nel 2016?"
                
            ];
var r1Atletica1000 =  [
           
           "Paletto",
           "Crunch",        
           "Sydney"    
           ];
 var r2Atletica1000 = [
           
           "Cilindro", 
           "Squat", 
           "Rio de Janeiro"   
           
            ];
 var r3Atletica1000 = [
            
            "Testimone",     
            "Push Up",         
            "Londra" 
            
            ];
 var r4Atletica1000 = [
           
           "Bastone",
           "Skip",       
           "Pechino"  
           ];

 var soluzioneAtletica1000 = [3, 2, 2]; 
 var soluzione = [3, 2, 2];

//TIMER
		
		    var id;
             var sec;
            function moveAtl1000() {
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
           elem.innerHTML="Tempo Scaduto";
           tempoScadutoAtl1000();
           abilitaBottoni(); 
            
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice=0;
            function generaDomandeAtletica1000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaAtletica1000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Atletica1000[x];
                document.getElementById("risp2").innerHTML = r2Atletica1000[x];
                document.getElementById("risp3").innerHTML = r3Atletica1000[x];
                document.getElementById("risp4").innerHTML = r4Atletica1000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/atletica/staffetta.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/atletica/squat.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/atletica/olimpiadi.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveAtl1000();
                
                disabilitaBottoni(); 
                
                                
        }

//PONGO LA DOMANDA
            
            var risposta = 0;
            function inizioAtletica1000() {
                 document.getElementById("atletica1").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaAtl1000(1)}; 
                 risp2.onclick = function() {valutaAtl1000(2)};
                 risp3.onclick = function() {valutaAtl1000(3)};
                 risp4.onclick = function() {valutaAtl1000(4)};
                
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                
                 risposta++;
                 
                 generaDomandeAtletica1000();
        }        
//CONTROLLO LE RISPOSTE

        function valutaAtl1000(n){
            clearInterval(id);
            if (n == soluzioneAtletica1000[oldindice]) {
                montepremi += 1000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("atletica1").style.backgroundColor = "green";
                document.getElementById("atletica1").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
                
             
            }
            
            else {
                montepremi -= 1000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                document.getElementById("atletica1").style.backgroundColor = "red";
                document.getElementById("atletica1").style.color = "white";
                 
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

      function tempoScadutoAtl1000(){
                montepremi -= 1000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
           document.getElementById("atletica1").style.backgroundColor = "red";
                document.getElementById("atletica1").style.color = "white";
            }
            