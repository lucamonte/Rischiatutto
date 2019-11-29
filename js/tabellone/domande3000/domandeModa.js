var DomandaModa3000=[
            "Chi disse: ' l'eleganza non è farsi notare, ma farsi ricordare'? ", //3000
            "Il tubino più famoso è di colore..", //3000
            "Quale stilista è stato ucciso il 1997 a Miami?", //3000
            
            ];
var r1Moda3000 = [ 
            "Giorgio Armani", 
            "Rosso", 
           
            "Nicola Trussardi", 
            ];
 var r2Moda3000= [ 
            "Gianni Versace", 
            "Nero", 
            
            "Walter Albini", 
           ];
 var r3Moda3000 = [ 
            "Karl Lagerfeld", 
            "Grigio", 
           
            "Ottavio Missoni", 
            ];
 var r4Moda3000 = [  
            "Vera Wang", 
            "Verde Militare", 
             
            "Gianni Versace", 
            ];
 var soluzioneModa3000 = [1, 2, 4]; 


 //TIMER
		
		    var id;
             var sec;
            function moveModa3000() {
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
           tempoScadutoModa3000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeModa3000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaModa3000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Moda3000[x];
                document.getElementById("risp2").innerHTML = r2Moda3000[x];
                document.getElementById("risp3").innerHTML = r3Moda3000[x];
                document.getElementById("risp4").innerHTML = r4Moda3000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/moda/citazione.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/moda/tubino.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/moda/miami.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveModa3000();
                disabilitaBottoni(); 
               
        }

//PONGO LA DOMANDA

              function inizioModa3000() {
                 document.getElementById("moda3").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaModa3000(1)}; 
                 risp2.onclick = function() {valutaModa3000(2)};
                 risp3.onclick = function() {valutaModa3000(3)};
                 risp4.onclick = function() {valutaModa3000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                  
                 risposta++;
                 
                 generaDomandeModa3000();
        }
        
//CONTROLLO LE RISPOSTE

        function valutaModa3000(n){
            clearInterval(id);
            if (n == soluzioneModa3000[oldindice]) {
                montepremi += 3000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("moda3").style.backgroundColor = "green";
                document.getElementById("moda3").style.color = "white";
                 
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
                document.getElementById("moda3").style.backgroundColor = "red";
                document.getElementById("moda3").style.color = "white";
                 
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

         function tempoScadutoModa3000(){
                montepremi -= 3000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
              document.getElementById("moda3").style.backgroundColor = "red";
                document.getElementById("moda3").style.color = "white";
            }
            