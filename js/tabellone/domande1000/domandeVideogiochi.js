var DomandaVideogiochi1000=[

            "Come si chiamava il protagonista delle prime avventure dei videogiochi Pokèmon?", //1000
            
            "Che animale è Crash?", //1000

            "Come si chiama lo store di videogiochi online più utilizzato?", //1000

            ];
var r1Videogiochi1000 = [ 
            
            "Oak", 
            
            "Volpe", 

            "Kinguin"];
 var r2Videogiochi1000 = [ 
           
            "Gary", 
            
            "Topo-Marsupiale", 

            "Uplay"];
 var r3Videogiochi1000 = [ 
            
            "Rosso", 
            
            "Sephirot", 

            "Origin"];
 var r4Videogiochi1000 = [  
            
            "Ash", 
            
            "Bandicoot", 

            "Steam"];
 var soluzioneVideogiochi1000 = [3, 4, 2]; 
        
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
            function generaDomandeVideogiochi1000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaVideogiochi1000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Videogiochi1000[x];
                document.getElementById("risp2").innerHTML = r2Videogiochi1000[x];
                document.getElementById("risp3").innerHTML = r3Videogiochi1000[x];
                document.getElementById("risp4").innerHTML = r4Videogiochi1000[x];
                oldindice=x;
                //move();
                document.getElementById("videogiochi1").disabled = true;
                document.getElementById("videogiochi1").style.backgroundColor = "green";
                document.getElementById("videogiochi1").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioVideogiochi1000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeVideogiochi1000();             
        }
        
//CONTROLLO LE RISPOSTE

           var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneVideogiochi1000[oldindice]) {
                esatte++;
                var montepremio = esatte * 1000;
                document.getElementById("risultato").innerHTML = oldindice;//"RISPOSTA CORRETTA<br />Montepremi: " + montepremio;
                //stampa risposta corretta nel paragrafo con id risultato
                
                //setTimeout(generaDomande, 2000); //si aspetta 2 secondi prima della prossima domanda
            }
            else {
                var montepremio = esatte * 1000;
                document.getElementById("risultato").innerHTML = oldindice;//"RISPOSTA ERRATA<br />Montepremi: " + montepremio; //altrimenti stampa rispost errata
                //setTimeout(generaDomande, 2000);//si aspetta 2 secondi prima della prossima domanda              
            }
            
        }