var DomandaSocial5000=[

            "In quale dei seguenti paesi venne ideato Ask.fm?", //5000
            
            "Qual era il re indiscusso dei social nel 2005?", //5000
            
            "Qual è la categoria principale dei post su Pinterest?" //5000
            
            ];
var r1Social5000 = [ 
           
            "USA", 
           
            "MSN",
            
            "Film", 
            ];
 var r2Social5000 = [ 
            
            "Danimarca", 
           
            "Netlog",
            
            "Teatro"];
 var r3Social5000 = [ 
            
            "Lettonia", 
           
            "Ask.fm",
            
            "Cibo", 
            ];
 var r4Social5000 = [  
        
            "Giappone", 
           
            "MySpace",
           
            "Musica"];
 var soluzioneSocial5000 = [ 1, 1, 3]; 
        
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
            function generaDomandeSocial5000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSocial5000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Social5000[x];
                document.getElementById("risp2").innerHTML = r2Social5000[x];
                document.getElementById("risp3").innerHTML = r3Social5000[x];
                document.getElementById("risp4").innerHTML = r4Social5000[x];
                oldindice=x;
                //move();
                document.getElementById("social5").disabled = true;
                document.getElementById("social5").style.backgroundColor = "green"
                document.getElementById("social5").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioSocial5000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeSocial5000();             
        }
        
//CONTROLLO LE RISPOSTE

           var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneSocial5000[oldindice]) {
                esatte++;
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