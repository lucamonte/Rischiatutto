var DomandaVideogiochi10000=[
            "In che anno venne rilasciato Grand Theft Auto IV?", //10000

            "Quale fu l'ultima console realizzata da Sega?", //10000
            
            "In che anno venne rilasciato per la prima volta il videogioco di Super Mario?", //10000

            ];
var r1Videogiochi10000 = [ 
            "2002", 

            "Mega Drive", 
            
            "1979"];
 var r2Videogiochi10000 = [ 
            "2008", 

            "Master System", 
            
            "1975"];
 var r3Videogiochi10000 = [ 
            "2006", 

            "Dreamcast", 
            
            "1988"];
 var r4Videogiochi10000 = [  
            "2010", 

            "Saturn", 
            
            "1985"];
 var soluzioneVideogiochi10000 = [2, 3, 4]; 
        
//TIMER
		/*
		    var id;
             var sec;
            function move() {
  var elem = document.getElementById("myBar");   
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
           valuta(5);
       }
         else
           elem.innerHTML = sec ;}
    
  }
}
*/
//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeVideogiochi10000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaVideogiochi10000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Videogiochi10000[x];
                document.getElementById("risp2").innerHTML = r2Videogiochi10000[x];
                document.getElementById("risp3").innerHTML = r3Videogiochi10000[x];
                document.getElementById("risp4").innerHTML = r4Videogiochi10000[x];
                oldindice=x;
                //move();
                document.getElementById("videogiochi10").disabled = true;
                document.getElementById("videogiochi10").style.backgroundColor = "green"
                document.getElementById("videogiochi10").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioVideogiochi10000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeVideogiochi10000();             
        }
        
//CONTROLLO LE RISPOSTE

           var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneVideogiochi10000[oldindice]) {
                esatte++;
                var montepremio = esatte * 10000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremio;
                //stampa risposta corretta nel paragrafo con id risultato
                
                //setTimeout(generaDomande, 2000); //si aspetta 2 secondi prima della prossima domanda
            }
            else {
                var montepremio = esatte * 10000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremio; //altrimenti stampa rispost errata
                //setTimeout(generaDomande, 2000);//si aspetta 2 secondi prima della prossima domanda    
            }
            
        }