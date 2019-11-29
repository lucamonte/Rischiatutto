var DomandaSmartphone10000 = [
    "Quante versioni di Android esistono attualmente? (marzo 2017)", //10000 
    "Quale società ha creato il primo smartphone?", //10000
    "Qual è stato il primo operatore telefonico per linee mobili in Italia?" //10000
];


var r1Smartphone10000 = [
    "11",
    "IBM",
    "Vodafone"
];

var r2Smartphone10000 = [
    "7",
    "Apple",
    "TIM"
];

var r3Smartphone10000 = [
    "10",
    "Nokia",
    "Tre"
];

var r4Smartphone10000 = [
    "13", 
    "LG", 
    "Wind"
];

var soluzioneSmartphone10000 = [4, 1, 2];

//TIMER
		
		    var id;
             var sec;
             function moveSmartphone10000() {
                    var elem = document.getElementById("myBarTabellone");
                    var progress = document.getElementById("myProgressTabellone");
                    var width = 0;
                    elem.style.display = "block";
                    progress.style.display = "block";
                elem.style.width = width+"%";
                id = setInterval(frame, 1000);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      
      
    } else {
      width+=5; 
      elem.style.width = width+"%"; 
      sec=width/5;
      if(sec>=20){
           elem.innerHTML="Tempo Scaduto";
           tempoScadutoSmartphone10000();
           abilitaBottoni(); 
      }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeSmartphone10000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSmartphone10000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Smartphone10000[x];
                document.getElementById("risp2").innerHTML = r2Smartphone10000[x];
                document.getElementById("risp3").innerHTML = r3Smartphone10000[x];
                document.getElementById("risp4").innerHTML = r4Smartphone10000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/android.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/smartphone.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/telefonia.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveSmartphone10000();
                disabilitaBottoni(); 
                          
        }

//PONGO LA DOMANDA

              function inizioSmartphone10000() {
                 document.getElementById("smartphone10").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaSmartphone10000(1)}; 
                 risp2.onclick = function() {valutaSmartphone10000(2)};
                 risp3.onclick = function() {valutaSmartphone10000(3)};
                 risp4.onclick = function() {valutaSmartphone10000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                  
                 risposta++;
                 
                 generaDomandeSmartphone10000();
        }
        
        
//CONTROLLO LE RISPOSTE
        function valutaSmartphone10000(n){
            clearInterval(id);
            if (n == soluzioneSmartphone10000[oldindice]) {
                montepremi += 10000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone10").style.backgroundColor = "green";
                document.getElementById("smartphone10").style.color = "white";
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
                abilitaBottoni();
            }
            else {
                montepremi -= 10000;
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi; //altrimenti stampa rispost errata
                document.getElementById("smartphone10").style.backgroundColor = "red";
                document.getElementById("smartphone10").style.color = "white";
                 
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

     function tempoScadutoSmartphone10000(){
                montepremi -= 10000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
          document.getElementById("smartphone10").style.backgroundColor = "red";
                document.getElementById("smartphone10").style.color = "white";
            }
            