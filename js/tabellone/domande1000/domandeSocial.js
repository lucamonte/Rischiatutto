oldindice;//var DomandaSocial1000=[
           
            "Quale simbolo si utilizza per creare un hashtag?", //1000
           
            "Qual è l'ultimo social network comprato da Mark Zuckerberg?", //1000
            
            "Facebook ha come colore pricipale il...", //1000

            ];
var r1Social1000 = [ 
           
            "#", 
            
            "Instagram", 
            
            "Bianco"];
 var r2Social1000 = [ 
             
            "@", 
       
            "WhatsApp", 
            
            "Blu"];
 var r3Social1000 = [ 
            
            ":", 
      
            "Ask.fm", 
            
            "Rosso"
                ];
 var r4Social1000 = [  
             
            "*", 
          
            "Telegram", 
            
            "Verde"];
 var soluzioneSocial1000 = [1, 2, 2]; 
        
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
            function generaDomandeSocial1000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSocial1000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Social1000[x];
                document.getElementById("risp2").innerHTML = r2Social1000[x];
                document.getElementById("risp3").innerHTML = r3Social1000[x];
                document.getElementById("risp4").innerHTML = r4Social1000[x];
                oldindice=x;
                //move();
                document.getElementById("social1").disabled = true;
                document.getElementById("social1").style.backgroundColor = "green";
                document.getElementById("social1").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioSocial1000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeSocial1000();             
        }
        
//CONTROLLO LE RISPOSTE

           var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneSocial1000[oldindice]) {
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