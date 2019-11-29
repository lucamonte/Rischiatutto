var DomandaModa10000=[

            "Chi ha fondato il brand Blumarine?", //10000
         
            "Kate ha festeggiato i 90 anni della regina Elisabetta con un giacchino rosso da 60 euro. Firmato?", //10000
            "Chanel ha scelto una località inedita per presentare la sua Cruise Collection. Quale?", //10000
            
            ];
var r1Moda10000 = [ 
            
            "Alessia Giacobino", 
            
            "H&M", 
            "Lampedusa"];
 var r2Moda10000= [ 
           
            "Anna Molinari", 
            
            "Zara", 
            "Porto Rico"];
 var r3Moda10000 = [ 
           
            "Rossella Tarabini", 
          
            "Pull&Bear", 
            "Swansea",];
 var r4Moda10000 = [  
            
            "Riccardo Tisci", 
            
            "Mango", 
            "Avana"];
 var soluzioneModa10000 = [2, 2, 4]; 


 //TIMER
		
		    var id;
             var sec;
            function moveModa10000() {
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
           tempoScadutoModa10000();
           abilitaBottoni(); 
            
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeModa10000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaModa10000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Moda10000[x];
                document.getElementById("risp2").innerHTML = r2Moda10000[x];
                document.getElementById("risp3").innerHTML = r3Moda10000[x];
                document.getElementById("risp4").innerHTML = r4Moda10000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/moda/blumarine-2.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/moda/kate.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/moda/avana.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveModa10000();
                disabilitaBottoni(); 
                
                                
        }

//PONGO LA DOMANDA

                function inizioModa10000() {
                    
                 document.getElementById("moda10").onclick = function() {}; 
                
                 document.getElementById("non-valido").style.display = "none";
                 document.getElementById("bottone-rischia").style.display = "none";
                 document.getElementById("rischia").style.display = "none";

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
                 
                 risp1.onclick = function() {valutaModa10000(1)}; 
                 risp2.onclick = function() {valutaModa10000(2)};
                 risp3.onclick = function() {valutaModa10000(3)};
                 risp4.onclick = function() {valutaModa10000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                
                 risposta++;
                 
                 generaDomandeModa10000();
        }
        
//CONTROLLO LE RISPOSTE

        function valutaModa10000(n){
            clearInterval(id);
            if (n == soluzioneModa10000[oldindice]) {
                montepremi += 10000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("moda10").style.backgroundColor = "green";
                document.getElementById("moda10").style.color = "white";
                 
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
                document.getElementById("moda10").style.backgroundColor = "red";
                document.getElementById("moda10").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
            }
            
            
                if (risposta==30) { 
                    window.location.href="../html/riepilogo-terza-fase.html";
                    localStorage.setItem("montepremi", montepremi);
                }
            
        }

     function tempoScadutoModa10000(){
                montepremi -= 10000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                 document.getElementById("moda10").style.backgroundColor = "red";
                document.getElementById("moda10").style.color = "white";
            }
            