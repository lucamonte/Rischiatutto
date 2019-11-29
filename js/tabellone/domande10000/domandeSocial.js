var DomandaSocial10000=[
            
            "Qual è il secondo sito web più visitato al mondo?", //10000
            
            "Quanti miliardi di volte viene utilizzato mediamente ogni giorno il bottone +1 di Google Plus?", //10000
            
            "Da che anno Telegram ha introdotto una piattaforma per permettere, a sviluppatori terzi, di creare i Bot?" //10000
            ];
var r1Social10000 = [ 
           
            "Instagram", 
           
            "5", 
            
            "2013"];
 var r2Social10000 = [ 
            
            "Facebook", 
             
            "2", 
           
            "2010"];
 var r3Social10000 = [ 
            
            "YouTube", 
            
            "6", 
           
            "2008"];
 var r4Social10000 = [  
             
            "Amazon", 
            
            "11", 
            
            "2015"];
 var soluzioneSocial10000 = [3, 1, 4]; 
        
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
            function generaDomandeSocial10000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSocial10000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Social10000[x];
                document.getElementById("risp2").innerHTML = r2Social10000[x];
                document.getElementById("risp3").innerHTML = r3Social10000[x];
                document.getElementById("risp4").innerHTML = r4Social10000[x];
                oldindice=x;
                //move();
                document.getElementById("social10").disabled = true;
                document.getElementById("social10").style.backgroundColor = "green"
                document.getElementById("social10").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioSocial10000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeSocial10000();             
        }
        
//CONTROLLO LE RISPOSTE

           var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneSocial10000[oldindice]) {
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