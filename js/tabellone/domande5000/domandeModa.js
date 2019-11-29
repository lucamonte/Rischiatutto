var DomandaModa5000=[

            "Chi crea per Gucci?", //5000
            
            "Quale griffe ha creato i costumi per la Traviata, in scena a Roma per la regia di Sofia Coppola?", //5000
            
            "A quale couturier francese si fa riferimento se si parla di New Look? ", //5000

            ];
var r1Moda5000 = [ 

            "Tom Ford", 
            
            "Bvlgari", 
            
            "Dior", 
];
 var r2Moda5000= [ 

            "Guccio Gucci", 
            
            "Gucci", 
            
            "Louis Vuitton", 
];
 var r3Moda5000 = [ 

            "Alessandro Michele", 
            
            "Valentino", 
            
            "Prada", 
];
 var r4Moda5000 = [  

            "Frida Giannini", 
            
            "Chanel", 
             
            "Chanel", 
];
 var soluzioneModa5000 = [4, 3, 1]; 


 //TIMER
		
		    var id;
             var sec;
            function moveModa5000() {
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
           tempoScadutoModa5000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeModa5000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaModa5000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Moda5000[x];
                document.getElementById("risp2").innerHTML = r2Moda5000[x];
                document.getElementById("risp3").innerHTML = r3Moda5000[x];
                document.getElementById("risp4").innerHTML = r4Moda5000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/moda/gucci.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/moda/traviata.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/moda/new-look.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveModa5000();
                disabilitaBottoni(); 
                      
        }

//PONGO LA DOMANDA

              function inizioModa5000() {
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
                 
                 risp1.onclick = function() {valutaModa5000(1)}; 
                 risp2.onclick = function() {valutaModa5000(2)};
                 risp3.onclick = function() {valutaModa5000(3)};
                 risp4.onclick = function() {valutaModa5000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                  
                 
                 generaDomandeModa5000();
        }
        
//CONTROLLO LE RISPOSTE

        function valutaModa5000(n){
            clearInterval(id);
            if (n == soluzioneModa5000[oldindice]) {
                montepremi += 5000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("moda5").style.backgroundColor = "green";
                document.getElementById("moda5").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
            }
            else {
                montepremi -= 5000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                document.getElementById("moda5").style.backgroundColor = "red";
                document.getElementById("moda5").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
            
            }
            
        }

		function jolly5000(){
        document.getElementById("moda5").onclick = function() {}; 
        var risp1 = document.getElementById("risp1");
        var risp2 = document.getElementById("risp2");
        var risp3 = document.getElementById("risp3");
        var risp4 = document.getElementById("risp4");
        risp1.style.display = "none";
        risp2.style.display = "none";
        risp3.style.display = "none";
        risp4.style.display = "none";
        document.getElementById("risultato").style.display = "block";
        montepremi += 5000;
        document.getElementById("risultato").innerHTML = "Il jolly ha fatto aumentare il tuo montepremi di 5000&euro;!<br/> Montepremi: " + montepremi;
        document.getElementById("moda5").disabled = true;
        document.getElementById("moda5").style.backgroundColor = "#ffaa00";
        document.getElementById("moda5").style.color = "white";
        document.getElementById("domanda-tabellone").innerHTML = "Complimenti, hai trovato uno dei jolly!";
        document.getElementById("img-tabellone").src = "../img/tabellone/jolly.png";
        document.getElementById("img-tabellone").style.display = "inline";
            
        document.getElementById("myBarTabellone").style.display = "none";
        document.getElementById("myProgressTabellone").style.display = "none";
        document.getElementById("rischia").style.display = "none";
        document.getElementById("bottone-rischia").style.display = "none";
        document.getElementById("non-valido").style.display = "none";
        clearInterval(id);
            
            
                 risposta++;
            
              if (risposta==30 && montepremi <=0)
                window.location.href="../html/hai-perso-2.html";
            
            else if (risposta==30) { 
                    window.location.href="../html/riepilogo-terza-fase.html";
                    localStorage.setItem("montepremi", montepremi);
                }
        }

      function tempoScadutoModa5000(){
                montepremi -= 5000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
           document.getElementById("moda5").style.backgroundColor = "red";
                document.getElementById("moda5").style.color = "white";
            }
            