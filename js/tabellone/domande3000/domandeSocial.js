var DomandaSocial3000=[
            "In che anno è stato fondato Facebook?", //3000
            "Qual era il nome originale di instagram?", //3000
           
            "A che azienda appartiene la piattaforma di video streaming 'Twitch'?", //3000
            ];
var r1Social3000 = [ 
            "2004", 
            "Insta", 
            
            "Depop"
            ];
 var r2Social3000 = [ 
            "2001", 
            "Burbn", 
           
            "Twitter" 
       ];
 var r3Social3000 = [ 
            "2008", 
            "Grammy", 
            
            "Amazon" 
           ];
 var r4Social3000 = [  
            "2002", 
            "Barmb", 
            
            "Subito.it" 
            ];
 var soluzioneSocial3000 = [1, 2, 3]; 
        
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
            function generaDomandeSocial3000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSocial3000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Social3000[x];
                document.getElementById("risp2").innerHTML = r2Social3000[x];
                document.getElementById("risp3").innerHTML = r3Social3000[x];
                document.getElementById("risp4").innerHTML = r4Social3000[x];
                oldindice=x;
                //move();
                document.getElementById("social3").disabled = true;
                document.getElementById("social3").style.backgroundColor = "green"
                document.getElementById("social3").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioSocial3000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeSocial3000();             
        }
        
//CONTROLLO LE RISPOSTE

           var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneSocial3000[oldindice]) {
                esatte++;
                var montepremio = esatte * 3000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremio;
                //stampa risposta corretta nel paragrafo con id risultato
                
                //setTimeout(generaDomande, 2000); //si aspetta 2 secondi prima della prossima domanda
            }
            else {
                var montepremio = esatte * 3000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremio; //altrimenti stampa rispost errata
                //setTimeout(generaDomande, 2000);//si aspetta 2 secondi prima della prossima domanda              
            }
            
        }