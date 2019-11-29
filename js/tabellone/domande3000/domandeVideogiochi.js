var DomandaVideogiochi3000=[
          
            "Qual è stato l'ultimo titolo realizzato dalla Blizzard(2017)?", //3000
            "Qual è la console pìù venduta di tutti i tempi? ", //3000
            "Di quale serie di videogiochi è protagonista Nathan Drake?", //3000

            ];
var r1Videogiochi3000 = [ 
            
            "Heartstone", 
            "PlayStation 1", 

            "Uncharted"];
 var r2Videogiochi3000 = [ 
           
            "Team Fortress 2", 
            "PlayStation 2", 

            "Indiana Jones"];
 var r3Videogiochi3000 = [ 
            
            "Overwatch", 
            "XBOX", 
 
            "Tomb Raider"];
 var r4Videogiochi3000 = [  
            
            "Paladins", 
            "NES", 
 
            "Drake Adventures"];
 var soluzioneVideogiochi3000 = [3, 2, 1]; 
        
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
            function generaDomandeVideogiochi3000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaVideogiochi3000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Videogiochi3000[x];
                document.getElementById("risp2").innerHTML = r2Videogiochi3000[x];
                document.getElementById("risp3").innerHTML = r3Videogiochi3000[x];
                document.getElementById("risp4").innerHTML = r4Videogiochi3000[x];
                oldindice=x;
                //move();
                document.getElementById("videogiochi3").disabled = true;
                document.getElementById("videogiochi3").style.backgroundColor = "green"
                document.getElementById("videogiochi3").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioVideogiochi3000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeVideogiochi3000();             
        }
        
//CONTROLLO LE RISPOSTE

           var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneVideogiochi3000[oldindice]) {
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