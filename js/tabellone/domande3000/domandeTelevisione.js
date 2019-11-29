var DomandaTV3000 = [
              "In che anno nacque Rischiatutto?", //3000
            
              "Da che anno va in onda Striscia la Notizia?", //3000
              
              "Quando nacque il festivalbar?", //3000

];  

 var r1TV3000 = [
           "1970",
           
           "1980",
           
           "1964"];
 var r2TV3000 = [
           "1965",
           
           "1993",
           
           "1975"];
 var r3TV3000 = [
           "1977",
           
           "1988",
           
           "1959"];
 var r4TV3000 = [
           "1980",
           
           "1995",
           
           "1965" ];
 var soluzioneTV3000 = [1, 3, 1]; 


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
            function generaDomandeTV3000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaTV3000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1TV3000[x];
                document.getElementById("risp2").innerHTML = r2TV3000[x];
                document.getElementById("risp3").innerHTML = r3TV3000[x];
                document.getElementById("risp4").innerHTML = r4TV3000[x];
                oldindice=x;
                //move();
                document.getElementById("tv3").disabled = true;
                document.getElementById("tv3").style.backgroundColor = "green"
                document.getElementById("tv3").style.color = "white";tv3
                                
        }

//PONGO LA DOMANDA

             function inizioTV3000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeTV3000();             
        }
        
//CONTROLLO LE RISPOSTE

          var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneTV3000[oldindice]) {
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