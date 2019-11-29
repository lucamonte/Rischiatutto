var DomandaCartoni2000=[
            
            "Come si chiama il bambino che porta sempre un berretto rosa a cui sono stati affidati i fantagenitori?", //2000
            "Chi è l'antagonista principale di Perry l'ornitorinco?", //2000
            "Come si chiama il film in computer grafica che ha come protagonista un orco?" //2000
            
            ];
var r1Cartoni2000 = [ 
             
            "Timmy", 
            "Isabella", 
            "Shrek"];
 var r2Cartoni2000 = [ 
           
            "Denzel", 
            "Candace", 
            "Trolls"];
 var r3Cartoni2000 = [ 
            
            "Mark", 
            "Doofershmitz", 
            "Il Fantabosco"];
 var r4Cartoni2000 = [  
          
            "Francis", 
            "Buford", 
            "Winnie The Pooh"];
 var soluzioneCartoni2000 = [1, 3, 1]; 


//TIMER
		
//TIMER
		
		    var id;
             var sec;
            function moveCartoni2000() {
  var elem = document.getElementById("myBarTabellone");   
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
           elem.innerHTML = "Tempo Scaduto";
           tempoScadutoCartoni2000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeCartoni2000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaCartoni2000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Cartoni2000[x];
                document.getElementById("risp2").innerHTML = r2Cartoni2000[x];
                document.getElementById("risp3").innerHTML = r3Cartoni2000[x];
                document.getElementById("risp4").innerHTML = r4Cartoni2000[x];
                                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/fantagenitori-2.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/perry.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/movie.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveCartoni2000();
                disabilitaBottoni(); 
               
                                
        }

//PONGO LA DOMANDA

           function inizioCartoni2000() {
                 document.getElementById("cartoni2").onclick = function() {}; 
                 document.getElementById("rischia").style.display = "none";
                 document.getElementById("bottone-rischia").style.display = "none";
                 document.getElementById("non-valido").style.display = "none";
               
                 var risp1 = document.getElementById("risp1");
                 var risp2 = document.getElementById("risp2");
                 var risp3 = document.getElementById("risp3");
                 var risp4 = document.getElementById("risp4");
                 
                 risp1.style.display = "inline";
                 risp2.style.display = "inline";
                 risp3.style.display = "inline";
                 risp4.style.display = "inline";
               document.getElementById("myBarTabellone").style.display = "block";
                document.getElementById("myProgressTabellone").style.display = "block";
                 
                 risp1.disabled = false;
                 risp2.disabled = false;
                 risp3.disabled = false;
                 risp4.disabled = false;
                 
                 risp1.onclick = function() {valutaCartoni2000(1)}; 
                 risp2.onclick = function() {valutaCartoni2000(2)};
                 risp3.onclick = function() {valutaCartoni2000(3)};
                 risp4.onclick = function() {valutaCartoni2000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
               
                 risposta++;
                 
                 generaDomandeCartoni2000();
        }
        
//CONTROLLO LE RISPOSTE

    function valutaCartoni2000(n){
            clearInterval(id);
            if (n == soluzioneCartoni2000[oldindice]) {
                montepremi += 2000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("cartoni2").style.backgroundColor = "green";
                document.getElementById("cartoni2").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
            }
            else {
                montepremi -= 2000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa risposta errata
                document.getElementById("cartoni2").style.backgroundColor = "red";
                document.getElementById("cartoni2").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
            }
        
        
                if (risposta==30 && montepremi <=0)
                window.location.href="../html/hai-perso-2.html";
            
            else if (risposta==30) { 
                    window.location.href="../html/riepilogo-terza-fase.html";
                    localStorage.setItem("montepremi", montepremi);
                }
        }

         function tempoScadutoCartoni2000(){
                montepremi -= 2000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
              document.getElementById("cartoni2").style.backgroundColor = "red";
                document.getElementById("cartoni2").style.color = "white";
            }
            