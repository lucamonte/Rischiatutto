var DomandaSmartphone3000 = [
    "Di quale tipo di schermo è dotato il Samsung Galaxy S7?", //3000
    "Qual è la tecnologia che fornisce connettività wireless bidirezionale a corto raggio fino a un massimo di 10 cm?", //3000
    "Qual è il nome della serie di smartband prodotto da Xiaomi?", //3000
];


var r1Smartphone3000 = [
    "TFT",
    "Bluetooth",
    "Edubro"
];

var r2Smartphone3000 = [
    "IPS",
    "NFC",
    "Teclast"
];

var r3Smartphone3000 = [
    "AMOLED",
    "3G",
    "Cubot"
];

var r4Smartphone3000 = [
    "Retina",
    "Wi-Fi",
    "Mi Band"
];

var soluzioneSmartphone3000 = [3, 2, 4];

//TIMER
		
		    var id;
             var sec;
            function moveSmartphone3000() {
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
           tempoScadutoSmartphone3000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeSmartphone3000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSmartphone3000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Smartphone3000[x];
                document.getElementById("risp2").innerHTML = r2Smartphone3000[x];
                document.getElementById("risp3").innerHTML = r3Smartphone3000[x];
                document.getElementById("risp4").innerHTML = r4Smartphone3000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/s7.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/connessione.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/xiaomi.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveSmartphone3000();
                disabilitaBottoni(); 
               
                                
        }

//PONGO LA DOMANDA

                    function inizioSmartphone3000() {
                 document.getElementById("smartphone3").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaSmartphone3000(1)}; 
                 risp2.onclick = function() {valutaSmartphone3000(2)};
                 risp3.onclick = function() {valutaSmartphone3000(3)};
                 risp4.onclick = function() {valutaSmartphone3000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                        
                 risposta++;
                 
                 generaDomandeSmartphone3000();
        }
        
//CONTROLLO LE RISPOSTE
        
        function valutaSmartphone3000(n){
            clearInterval(id);
            if (n == soluzioneSmartphone3000[oldindice]) {
                montepremi += 3000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone3").style.backgroundColor = "green";
                document.getElementById("smartphone3").style.color = "white";
                 
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
                document.getElementById("smartphone3").style.backgroundColor = "red";
                document.getElementById("smartphone3").style.color = "white";
                 
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

         function tempoScadutoSmartphone3000(){
                montepremi -= 3000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
              document.getElementById("smartphone3").style.backgroundColor = "red";
                document.getElementById("smartphone3").style.color = "white";
            }
            