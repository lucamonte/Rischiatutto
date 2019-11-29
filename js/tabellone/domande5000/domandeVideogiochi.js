var DomandaVideogiochi5000=[

            "Quale fu il primo videogioco di sempre?", //5000

            "Per quale genere la Lucas Art sviluppava la maggior parte dei giochi?", //5000
            
            "Quale casa produttrice ha prodotto Half-Life e Counter Strike?" //5000
            ];
var r1Videogiochi5000 = [ 

            "Pong", 

            "GDR", 
           
            "CapCom"];
 var r2Videogiochi5000 = [ 
  
            "Pac-Man", 

            "Horror", 
           
            "Activision"];
 var r3Videogiochi5000 = [ 
   
            "Donkey Kong", 

            "FPS", 
            
            "Blizzard"];
 var r4Videogiochi5000 = [  

            "Snake", 

            "Avventure Grafiche", 
           
            "Valve"];
 var soluzioneVideogiochi5000 = [1, 4, 4]; 
        
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
            function generaDomandeVideogiochi5000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaVideogiochi5000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Videogiochi5000[x];
                document.getElementById("risp2").innerHTML = r2Videogiochi5000[x];
                document.getElementById("risp3").innerHTML = r3Videogiochi5000[x];
                document.getElementById("risp4").innerHTML = r4Videogiochi5000[x];
                oldindice=x;
                //move();
                document.getElementById("videogiochi5").disabled = true;
                document.getElementById("videogiochi5").style.backgroundColor = "green"
                document.getElementById("videogiochi5").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioVideogiochi5000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeVideogiochi5000();             
        }
        
//CONTROLLO LE RISPOSTE


        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneVideogiochi5000[oldindice]) {
                var montepremio = esatte * 5000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremio;
                //stampa risposta corretta nel paragrafo con id risultato
                
                //setTimeout(generaDomande, 2000); //si aspetta 2 secondi prima della prossima domanda
            }
            else {
                var montepremio = esatte * 5000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremio; //altrimenti stampa rispost errata
                //setTimeout(generaDomande, 2000);//si aspetta 2 secondi prima della prossima domanda              
            }
            
        }