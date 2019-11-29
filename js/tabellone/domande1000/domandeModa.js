var DomandaModa1000=[
            "Quale stilista ha lavorato alla Rinascente di Milano? ", //1000
            "Gli anfibi sono degli...", //1000
            "Il tailleur è un..." //1000
           
            ];
var r1Moda1000 = [ 
            "Stefano Gabbana", 
            "Sneakers",
            "Completo"
            ];
 var r2Moda1000= [ 
            "Anna Fendi", 
            "Stivali",
            "Giacca" 
            ];
 var r3Moda1000 = [ 
            "Giorgio Armani",
            "Tacchi",
            "Tuta"
            ];  
 var r4Moda1000 = [  
            
            "Renato Balestra", 
 
            "Infradito",
            "Vestito Attillato"];
 var soluzioneModa1000 = [3, 2, 1]; 


 //TIMER
		
		    var id;
             var sec;
            function moveModa1000() {
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
           tempoScadutoModa1000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindiceModa1000;
            function generaDomandeModa1000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaModa1000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Moda1000[x];
                document.getElementById("risp2").innerHTML = r2Moda1000[x];
                document.getElementById("risp3").innerHTML = r3Moda1000[x];
                document.getElementById("risp4").innerHTML = r4Moda1000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/moda/rinascente.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/yellow.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/questions.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveModa1000();
                disabilitaBottoni(); 
                
        }

//PONGO LA DOMANDA

             function inizioModa1000() {
                 document.getElementById("moda1").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaModa1000(1)}; 
                 risp2.onclick = function() {valutaModa1000(2)};
                 risp3.onclick = function() {valutaModa1000(3)};
                 risp4.onclick = function() {valutaModa1000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                 
                 risposta++;
                 
                 generaDomandeModa1000();
        }
        
//CONTROLLO LE RISPOSTE

        function valutaModa1000(n){
            clearInterval(id);
            if (n == soluzioneModa1000[oldindice]) {
                montepremi += 1000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("moda1").style.backgroundColor = "green";
                document.getElementById("moda1").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
            }
            else {
                montepremi -= 1000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                document.getElementById("moda1").style.backgroundColor = "red";
                document.getElementById("moda1").style.color = "white";
                 
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

      function tempoScadutoModa1000(){
                montepremi -= 1000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
           document.getElementById("moda1").style.backgroundColor = "red";
                document.getElementById("moda1").style.color = "white";
            }
            