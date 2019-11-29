var DomandaVideogiochi2000=[
            
            "Come si chiama il protagonista della saga di The Legend Of Zelda? ", //2000

            "Quale gioco in esclusiva PlayStation viene definito come simulatore di guida per eccellenza? ", //2000

            "Qual è stata la prima console di Microsoft?", //2000

            ];
var r1Videogiochi2000 = [ 
            
            "Zelda", 

            "Gran Turismo", 

            "XBOX"];
 var r2Videogiochi2000 = [ 
            
            "Link", 

            "F1", 
 

            "Team Fortress 2"];
 var r3Videogiochi2000 = [ 
            
            "Ocarina", 

            "Assetto Corsa", 

            "XBOX ONE"];
 var r4Videogiochi2000 = [  
           
            "Ganondorf", 

            "Need For Speed", 

            "PlayStation 3"];
 var soluzioneVideogiochi2000 = [2, 1, 1]; 
        
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
            function generaDomandeVideogiochi2000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaVideogiochi2000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Videogiochi2000[x];
                document.getElementById("risp2").innerHTML = r2Videogiochi2000[x];
                document.getElementById("risp3").innerHTML = r3Videogiochi2000[x];
                document.getElementById("risp4").innerHTML = r4Videogiochi2000[x];
                oldindice=x;
                //move();
                document.getElementById("videogiochi2").disabled = true;
                document.getElementById("videogiochi2").style.backgroundColor = "green"
                document.getElementById("videogiochi2").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioVideogiochi2000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeVideogiochi2000();             
        }
        
//CONTROLLO LE RISPOSTE

           var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneVideogiochi2000[oldindice]) {
                esatte++;
                var montepremio = esatte * 2000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremio;
                //stampa risposta corretta nel paragrafo con id risultato

            }
            else {
                var montepremio = esatte * 2000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremio; //altrimenti stampa rispost errata
                //setTimeout(generaDomande, 2000);//si aspetta 2 secondi prima della prossima domanda              
            }
            
        }