var DomandaTV2000 = [
             
              "In che giorno va in onda il programma Rischiatutto?", //2000
             
              "Dove si trova la sede di Mediaset?", //2000
              "Chi è la persona nella foto *Foto di Chef Tony*?", //2000

];  

 var r1TV2000 = [
    
           "Lunedì",
           
           "Corso Sempione",
           "Chef Rubio"];
 var r2TV2000 = [

           "Giovedì",
           
           "Cologno Monzese",
           "Iginio Massario"];
 var r3TV2000 = [
      
           "Martedì",
           
           "Milano Rogoredo", 
           "Buddy Valastro"];
 var r4TV2000 = [
       
           "Mercoledì", 
           
           "Cinecittà", 
           "Chef Tony"];
 var soluzioneTV2000 = [2, 2, 4]; 


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
            function generaDomandeTV2000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaTV2000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1TV2000[x];
                document.getElementById("risp2").innerHTML = r2TV2000[x];
                document.getElementById("risp3").innerHTML = r3TV2000[x];
                document.getElementById("risp4").innerHTML = r4TV2000[x];
                oldindice=x;
                //move();
                document.getElementById("tv2").disabled = true;
                document.getElementById("tv2").style.backgroundColor = "green"
                document.getElementById("tv2").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioTV2000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeTV2000();             
        }
        
//CONTROLLO LE RISPOSTE

         var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneTV2000[oldindice]) {
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