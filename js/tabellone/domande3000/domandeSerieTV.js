var DomandaSerie3000=[
          
            "Come si chiama il mostro proveniente dal Sottosopra nella serie Stranger Things?", //3000
         
            "Nella serie 'Scrubs' qual è il cognome del personaggio interpretato da Zach Braff?", //3000
            
            "Come si chiama la protagonista di 'New Girl'? " //3000
            ];
 var r1Serie3000 = [ 
          
            "Dissennatore", 
           
            "Cox",
            
            "Cece"];
 var r2Serie3000 = [ 
            
            "Sinestro", 
            
            "Turk",
            
            "Jessica"];
 var r3Serie3000 = [ 
            
            "Demogorgone", 
          
            "Kelso",
           
            "Julia"];
 var r4Serie3000 = [  
           
            "Saibaman", 
            
            "Dorian",
           
            "Daisy"];
 var soluzioneSerie3000 = [3, 4, 2]; 
        
//TIMER
		
		    var id;
             var sec;
            function moveSerie3000() {
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
           tempoScadutoSerie3000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeSerie3000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSerie3000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Serie3000[x];
                document.getElementById("risp2").innerHTML = r2Serie3000[x];
                document.getElementById("risp3").innerHTML = r3Serie3000[x];
                document.getElementById("risp4").innerHTML = r4Serie3000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/serie/stranger.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/serie/scrubs.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/serie/new-girl.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                 
                oldindice=x;
                moveSerie3000();
                disabilitaBottoni();
            
                                
        }

//PONGO LA DOMANDA

             function inizioSerie3000() {
                 document.getElementById("serie3").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaSerie3000(1)}; 
                 risp2.onclick = function() {valutaSerie3000(2)};
                 risp3.onclick = function() {valutaSerie3000(3)};
                 risp4.onclick = function() {valutaSerie3000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                 
                 risposta++;
                 
                 generaDomandeSerie3000();
        }
        
//CONTROLLO LE RISPOSTE

        function valutaSerie3000(n){
            clearInterval(id);
            if (n == soluzioneSerie3000[oldindice]) {
                montepremi += 3000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("serie3").style.backgroundColor = "green";
                document.getElementById("serie3").style.color = "white";
                 
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
                document.getElementById("serie3").style.backgroundColor = "red";
                document.getElementById("serie3").style.color = "white";
                 
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

         function tempoScadutoSerie3000(){
                montepremi -= 3000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
              document.getElementById("serie3").style.backgroundColor = "red";
                document.getElementById("serie3").style.color = "white";
            }
            