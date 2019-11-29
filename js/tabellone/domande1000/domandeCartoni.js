var DomandaCartoni1000=[
            "Chi è il miglior amico di Scooby Doo?", //1000

            "Come si chiama l'elefante che riesce a volare grazie alle sue enormi orecchie?", //1000
           
            "Chi mangia sempre ciambelle e lavora in una centrale nucleare?" //1000

            ];
var r1Cartoni1000 = [ 

            "Velma", 
           
            "Ortone", 
            
            "Mr. Burns"];
 var r2Cartoni1000 = [ 
 
            "Shaggy", 
            
            "Dumbo", 
             
            "Bart"];
 var r3Cartoni1000 = [ 

            "Daphne", 
            
            "Giddy", 
            
            "Homer"];
 var r4Cartoni1000 = [  

            "Fred", 
           
            "Prissy", 
             
            "Winchester"];
 var soluzioneCartoni1000 = [2, 2, 3]; 


//TIMER
		
		    var id;
             var sec;
            function moveCartoni1000() {
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
           tempoScadutoCartoni1000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeCartoni1000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaCartoni1000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Cartoni1000[x];
                document.getElementById("risp2").innerHTML = r2Cartoni1000[x];
                document.getElementById("risp3").innerHTML = r3Cartoni1000[x];
                document.getElementById("risp4").innerHTML = r4Cartoni1000[x];
                oldindice=x;
                moveCartoni1000();
                disabilitaBottoni(); 
               
        }

//PONGO LA DOMANDA

             function inizioCartoni1000() {
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
                 
                 risp1.onclick = function() {valutaCartoni1000(1)}; 
                 risp2.onclick = function() {valutaCartoni1000(2)};
                 risp3.onclick = function() {valutaCartoni1000(3)};
                 risp4.onclick = function() {valutaCartoni1000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                 
                 
                 generaDomandeCartoni1000();
        }
        
//CONTROLLO LE RISPOSTE

        function valutaCartoni1000(n){
            clearInterval(id);
            if (n == soluzioneCartoni1000[oldindice]) {
                montepremi += 1000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("cartoni1").style.backgroundColor = "green";
                document.getElementById("cartoni1").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                
            }
            else {
                montepremi -= 1000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa risposta errata
                document.getElementById("cartoni1").style.backgroundColor = "red";
                document.getElementById("cartoni1").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;  
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
            }
            
        }
		
		function jolly1000(){
            
        document.getElementById("cartoni1").onclick = function() {}; 
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
        document.getElementById("cartoni1").disabled = true;
        document.getElementById("cartoni1").style.backgroundColor = "#ffaa00";
        document.getElementById("cartoni1").style.color = "white";
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

      function tempoScadutoCartoni1000(){
                montepremi -= 1000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
           document.getElementById("cartoni1").style.backgroundColor = "red";
                document.getElementById("cartoni1").style.color = "white";
            }
            