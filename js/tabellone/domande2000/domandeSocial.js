var DomandaSocial2000=[
           
            "Come vengono chiamati i Tweet che contengono esattamente 140 caratteri?", //2000
            
            "Come si chiama la mascotte di Snapchat?", //2000 
           
            "Da quante persone possono essere composti i Supergruppi su Telegram?", //2000

            ];
var r1Social2000 = [ 
           
            "Taesh", 
           
            "Ghostface Chilla", 
            
            "3000"
            ];
 var r2Social2000 = [ 
          
            "Tick", 
             
            "Ghost Smile", 
           
            "5000" 
           ];
 var r3Social2000 = [ 
            
            "Trill", 
            
            "Ghostspeed", 
        
            "1000" 
           ];
 var r4Social2000 = [  
           
            "Twoosh", 
            
            "Ghost Whitelong", 
            
            "7000" 
           ];
 var soluzioneSocial2000 = [4, 1, 2]; 
        
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
            function generaDomandeSocial2000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSocial2000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Social2000[x];
                document.getElementById("risp2").innerHTML = r2Social2000[x];
                document.getElementById("risp3").innerHTML = r3Social2000[x];
                document.getElementById("risp4").innerHTML = r4Social2000[x];
                oldindice=x;
                //move();
                document.getElementById("social2").disabled = true;
                document.getElementById("social2").style.backgroundColor = "green"
                document.getElementById("social2").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioSocial2000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeSocial2000();             
        }
        
//CONTROLLO LE RISPOSTE

           var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneSocial2000[oldindice]) {
                esatte++;
                var montepremio = esatte * 2000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremio;
                //stampa risposta corretta nel paragrafo con id risultato
                
                //setTimeout(generaDomande, 2000); //si aspetta 2 secondi prima della prossima domanda
            }
            else {
                var montepremio = esatte * 2000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremio; //altrimenti stampa rispost errata
                //setTimeout(generaDomande, 2000);//si aspetta 2 secondi prima della prossima domanda              
            }
            
        }