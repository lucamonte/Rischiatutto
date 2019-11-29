var DomandaAtletica3000 = [
                "Qual è la categoria di atletica per chi ha dai 16 ai 17 anni?",//3000
                "Qual è la categoria per chi ha dai 20 a i 22 anni?", //3000
                "Quanti kg pesa un disco per i maschi?", //3000
            ];
var r1Atletica3000 =  [
           "Promesse",  
           "Promesse",   
           "4"          
];
 var r2Atletica3000 = [
           "Cadetti", 
           "Esordienti", 
           "2,5"   
            ];
 var r3Atletica3000 = [     
            "Allievi",    
            "Cadetti",   
            "2"         

            ];
 var r4Atletica3000 = [
           "Juniores",    
           "Allievi",   
           "3"        
];

 var soluzioneAtletica3000 = [3, 1, 3]; 

//TIMER
		
		    var id;
             var sec;
            function moveAtl3000() {
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
           tempoScadutoAtl3000();
           abilitaBottoni();
            
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeAtletica3000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaAtletica3000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Atletica3000[x];
                document.getElementById("risp2").innerHTML = r2Atletica3000[x];
                document.getElementById("risp3").innerHTML = r3Atletica3000[x];
                document.getElementById("risp4").innerHTML = r4Atletica3000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/atletica/atletica.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/atletica/corridore.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/atletica/disco.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveAtl3000();
                disabilitaBottoni(); 
                                
        }

//PONGO LA DOMANDA

                function inizioAtletica3000() {
                            document.getElementById("atletica3").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaAtl3000(1)}; 
                 risp2.onclick = function() {valutaAtl3000(2)};
                 risp3.onclick = function() {valutaAtl3000(3)};
                 risp4.onclick = function() {valutaAtl3000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                            
                 risposta++;
                 
                 generaDomandeAtletica3000();
        }        
        
        
        
//CONTROLLO LE RISPOSTE
        function valutaAtl3000(n){
            clearInterval(id);
            if (n == soluzioneAtletica3000[oldindice]) {
                montepremi += 3000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("atletica3").style.backgroundColor = "green";
                document.getElementById("atletica3").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
                
            }
            else {
                montepremi -= 3000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                document.getElementById("atletica3").style.backgroundColor = "red";
                document.getElementById("atletica3").style.color = "white";
                 
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
            function tempoScadutoAtl3000(){
                montepremi -= 3000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                 document.getElementById("atletica3").style.backgroundColor = "red";
                document.getElementById("atletica3").style.color = "white";
            }
            