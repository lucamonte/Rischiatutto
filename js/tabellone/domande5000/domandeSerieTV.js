var DomandaSerie5000=[
            "A che famiglia appartengono i tre orfani della serie 'Una serie di sfortunati eventi'?", //5000
            "Per quale distretto della polizia lavora Dexter dell'omonima serie?", //5000
            "In che carcere è ambientata la serie 'Orange is the new black'?" //5000
            ];
 var r1Serie5000 = [ 
            
            "Lartigau", 
          
            "New York", 
            
            "Litchfield" 
];
 var r2Serie5000 = [ 
            
            "Patellieèr", 
          
            "Miami", 
            
            "Alcatraz" 
];
 var r3Serie5000 = [ 
         
            "Bèlier", 
         
            "Los Angeles", 
            
            "Huntsville" 
          ];
 var r4Serie5000 = [  
           
            "Baudelaire", 
        
            "Washington", 
           
            "Rikers"
];
 var soluzioneSerie5000 = [4, 2, 1]; 
        
//TIMER
		
		    var id;
             var sec;
            function moveSerie5000() {
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
           tempoScadutoSerie5000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeSerie5000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSerie5000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Serie5000[x];
                document.getElementById("risp2").innerHTML = r2Serie5000[x];
                document.getElementById("risp3").innerHTML = r3Serie5000[x];
                document.getElementById("risp4").innerHTML = r4Serie5000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/serie/sfortunati-eventi.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/serie/dexter.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/serie/orange.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                 
                oldindice=x;
                moveSerie5000();
                disabilitaBottoni(); 
        }

//PONGO LA DOMANDA

            
             function inizioSerie5000() {
                 document.getElementById("serie5").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaSerie5000(1)}; 
                 risp2.onclick = function() {valutaSerie5000(2)};
                 risp3.onclick = function() {valutaSerie5000(3)};
                 risp4.onclick = function() {valutaSerie5000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                 
                 risposta++;
                 
                 generaDomandeSerie5000();
        }
        
//CONTROLLO LE RISPOSTE


        function valutaSerie5000(n){
            clearInterval(id);
            if (n == soluzioneSerie5000[oldindice]) {
                montepremi += 5000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                //stampa risposta corretta nel paragrafo con id risultato
                document.getElementById("serie5").style.backgroundColor = "green";
                document.getElementById("serie5").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
            }
            else {
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                montepremi -= 5000; 
                document.getElementById("serie5").style.backgroundColor = "red";
                document.getElementById("serie5").style.color = "white";
                 
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

      function tempoScadutoSerie5000(){
                montepremi -= 5000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
           document.getElementById("serie5").style.backgroundColor = "red";
                document.getElementById("serie5").style.color = "white";
          abilitaBottoni()
            }
            