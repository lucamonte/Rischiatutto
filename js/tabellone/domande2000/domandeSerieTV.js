var DomandaSerie2000=[
            "Come si chiama la fidanzata di Ted Mosby che lo abbandona sull'altare poco prima del matrimonio?", //2000
            
            "A quale casa produttrice appartengono i fumetti su cui sono basate le serie tv Daredevil, Jessica Jones e Luke Cage?", //2000
            
            "Quanti membri compongono la compagnia di amici di Friends? " //2000

            ];
 var r1Serie2000 = [ 
            "Stella", 
            
            "Marvel", 
           
            "4"];
 var r2Serie2000 = [ 
            "Robin", 
            
            "DC", 
            
            "7"];
 var r3Serie2000 = [ 
            "Lily", 
            
            "Fox", 
            
            "6"];
 var r4Serie2000 = [  
            "Natalie", 
            
            "Paramount", 
             
            "5"];
 var soluzioneSerie2000 = [1, 1, 3]; 
        
//TIMER
		
		    var id;
             var sec;
            function moveSerie2000() {
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
           tempoScadutoSerie2000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeSerie2000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSerie2000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Serie2000[x];
                document.getElementById("risp2").innerHTML = r2Serie2000[x];
                document.getElementById("risp3").innerHTML = r3Serie2000[x];
                document.getElementById("risp4").innerHTML = r4Serie2000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/serie/how-i-met-your-mother.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/serie/minimal-tv.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/serie/friends.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveSerie2000();
                disabilitaBottoni();
               
                
        }

//PONGO LA DOMANDA

             function inizioSerie2000() { 
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
                 
                 risp1.onclick = function() {valutaSerie2000(1)}; 
                 risp2.onclick = function() {valutaSerie2000(2)};
                 risp3.onclick = function() {valutaSerie2000(3)};
                 risp4.onclick = function() {valutaSerie2000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                
                 
                 generaDomandeSerie2000();
        }        
        
//CONTROLLO LE RISPOSTE

        function valutaSerie2000(n){
            clearInterval(id);
            if (n == soluzioneSerie2000[oldindice]) {
                montepremi += 2000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("serie2").style.backgroundColor = "green";
                document.getElementById("serie2").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
            }
            else {
                montepremi -= 2000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                document.getElementById("serie2").style.backgroundColor = "red";
                document.getElementById("serie2").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
            }
            
        }
		
		function jolly2000(){
        
        document.getElementById("serie2").onclick = function() {};
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
        document.getElementById("serie2").disabled = true;
        document.getElementById("serie2").style.backgroundColor = "#ffaa00";
        document.getElementById("serie2").style.color = "white";
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

      function tempoScadutoSerie2000(){
                montepremi -= 2000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
           document.getElementById("serie2").style.backgroundColor = "red";
                document.getElementById("serie2").style.color = "white";
            }
            