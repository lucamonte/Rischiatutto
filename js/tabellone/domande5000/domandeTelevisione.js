var DomandaTV5000 = [
              
              "Quanti minuti durava il famoso &quot;Carosello&quot;?", //5000
              
              "Da che casa produttrice è prodotto Zelig?", //5000

              "Su che canale veniva trasmesso il programma &quot;Mai dire gol&quot;?", //5000

];  

 var r1TV5000 = [
           
           "20",
           
           "Mediaset",

           "Canale 5"];
 var r2TV5000 = [
          
           "15",
          
           "RAI", 

           "Italia 1"];
 var r3TV5000 = [
          
           "5",
          
           "Real Time",

           "RAI 1" ];
 var r4TV5000 = [
          
           "10", 
           
           "Dmax", 

           "Rete 4"];
 var soluzioneTV5000 = [4, 1, 2]; 


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
            function generaDomandeTV5000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaTV5000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1TV5000[x];
                document.getElementById("risp2").innerHTML = r2TV5000[x];
                document.getElementById("risp3").innerHTML = r3TV5000[x];
                document.getElementById("risp4").innerHTML = r4TV5000[x];
                oldindice=x;
                //move();
                document.getElementById("tv5").disabled = true;
                document.getElementById("tv5").style.backgroundColor = "green"
                document.getElementById("tv5").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioTV5000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeTV5000();             
        }
        
//CONTROLLO LE RISPOSTE

         var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneTV5000[oldindice]) {
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