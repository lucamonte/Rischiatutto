var DomandaSmartphone1000 = [
    "Qual è il nome della marca che ha come logo una mela morsicata?", //1000
    "Come si chiama l'assistente vocale di iOS?", //1000
    "Come si chiama l'app di messaggistica più utilizzata sugli smartphone?" //1000 
];


var r1Smartphone1000 = [
    "Apple",
    "Lili",
    "Whatsapp"
];

var r2Smartphone1000 = [
    "Huawei",
    "Cortana",
    "Telegram"
];

var r3Smartphone1000 = [
    "Samsung",
    "Siri",
    "Viber"
];

var r4Smartphone1000 = [
    "LG",
    "Cisco",
    "Messenger"
];

var soluzioneSmartphone1000 = [1, 3, 1];

//TIMER
		
		    var id;
             var sec;
            function moveSmartphone1000() {
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
           tempoScadutoSmartphone1000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeSmartphone1000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaSmartphone1000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Smartphone1000[x];
                document.getElementById("risp2").innerHTML = r2Smartphone1000[x];
                document.getElementById("risp3").innerHTML = r3Smartphone1000[x];
                document.getElementById("risp4").innerHTML = r4Smartphone1000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/apple.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/microfono.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/smartphone/messaggi.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveSmartphone1000();
                
                disabilitaBottoni(); 
                        
        }

//PONGO LA DOMANDA

            function inizioSmartphone1000() {
                 document.getElementById("smartphone1").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaSmartphone1000(1)}; 
                 risp2.onclick = function() {valutaSmartphone1000(2)};
                 risp3.onclick = function() {valutaSmartphone1000(3)};
                 risp4.onclick = function() {valutaSmartphone1000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                
                 risposta++;
                 
                 generaDomandeSmartphone1000();
        }
        
//CONTROLLO LE RISPOSTE
        function valutaSmartphone1000(n){
            clearInterval(id);
            if (n == soluzioneSmartphone1000[oldindice]) {
                montepremi += 1000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone1").style.backgroundColor = "green";
                document.getElementById("smartphone1").style.color = "white";
                 
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
                document.getElementById("risultato").innerHTML = "RISPOSTA ERRATA<br />Montepremi: " + montepremi;
                document.getElementById("smartphone1").style.backgroundColor = "red";
                document.getElementById("smartphone1").style.color = "white";
                 
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

      function tempoScadutoSmartphone1000(){
                montepremi -= 1000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
           document.getElementById("smartphone1").style.backgroundColor = "red";
                document.getElementById("smartphone1").style.color = "white";
            }
            