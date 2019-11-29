var DomandaTV10000 = [
            
              "Chi creò il primo prototipo funzionante di televisione?", //10000
             
              "Da chi è interpretato il commissario Montalbano nell&#39;omonima serie tv?", //10000
              
              "Da che anno Mentana conduce TG La7?", //10000

];  

 var r1TV10000 = [
           
           "Baird",
           
           "Giacinto Ferro",
          
           "2005"];
 var r2TV10000 = [
           
           "Marconi",
          
           "Peppino Mazzotta",
           
           "2007"];
 var r3TV10000 = [
           
           "Hawking",
           
           "Cesare Bozzi",
           
           "2010"];
 var r4TV10000 = [
           
           "Franklin", 
           
           "Luca Zingaretti",
          
           "2012"];
 var soluzioneTV10000 = [1, 4, 3]; 


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
            function generaDomandeTV10000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaTV10000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1TV10000[x];
                document.getElementById("risp2").innerHTML = r2TV10000[x];
                document.getElementById("risp3").innerHTML = r3TV10000[x];
                document.getElementById("risp4").innerHTML = r4TV10000[x];
                oldindice=x;
                //move();
                document.getElementById("tv10").disabled = true;
                document.getElementById("tv10").style.backgroundColor = "green"
                document.getElementById("tv10").style.color = "white";tv10
                                
        }

//PONGO LA DOMANDA

             function inizioTV10000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeTV10000();             
        }
        
//CONTROLLO LE RISPOSTE

            var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneTV10000[oldindice]) {
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