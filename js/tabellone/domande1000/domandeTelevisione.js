var DomandaTV1000 = [
             
              "Chi è il conduttore del programma &quot;Che tempo che fa&quot;?", //1000
             
              "In che teatro si svolge il Festival di Sanremo?", //1000
              
              "A chi appartiene lo slogan &quot;liberi di...&quot;?" //1000
];  

 var r1TV1000 = [
           
           "Carlo Conti",
          
           "Olimpico",
           
           "Disney Channel"];
 var r2TV1000 = [
          
           "Fabio Fazio",
           
           "La Scala",
          
           "Mediaset Premium"];
 var r3TV1000 = [
           
           "Gerry Scotti",
        
           "Ariston",
           
           "Sky" ];
 var r4TV1000 = [
          
           "Paolo Bonolis", 
           
           "Petruzzelli", 
           
           "RAI" ];
 var soluzioneTV1000 = [2, 3, 3]; 


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
            function generaDomandeTV1000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaTV1000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1TV1000[x];
                document.getElementById("risp2").innerHTML = r2TV1000[x];
                document.getElementById("risp3").innerHTML = r3TV1000[x];
                document.getElementById("risp4").innerHTML = r4TV1000[x];
                oldindice=x;
                //move();
                document.getElementById("tv1").disabled = true;
                document.getElementById("tv1").style.backgroundColor = "green"
                document.getElementById("tv1").style.color = "white";
                                
        }

//PONGO LA DOMANDA

             function inizioTV1000() {
                 //document.getElementById("inizio").style.display = "none";/*rendo invisibile il pulsante
                                                                           /*  di inizio gioco*/
                 document.getElementById("risp1").style.display = "inline";/*si visulizzano i 4 pulsanti
                                                                          che conterranno le risposte*/
                 document.getElementById("risp2").style.display = "inline";
                 document.getElementById("risp3").style.display = "inline";
                 document.getElementById("risp4").style.display = "inline";
                 
                 document.getElementById("risultato").style.display = "block";
                 generaDomandeTV1000();             
        }
        
//CONTROLLO LE RISPOSTE

         var esatte=0;
        function valuta(n){
            //clearInterval(id);
            if (n == soluzioneTV1000[oldindice]) {
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