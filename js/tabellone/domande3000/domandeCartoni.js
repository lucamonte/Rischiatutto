var DomandaCartoni3000=[
            "Come si chiama il padrone di Garfield?", //3000
           
            "Come si chiama il panda del film 'Kung Fu Panda'?", //3000
           
            "Che animale è Tom del cartone animato 'Tom & Jerry'?" //3000

            ];
var r1Cartoni3000 = [ 
            "Jon", 
            
            "Tai Lung", 
           
            "Tartaruga"
];
 var r2Cartoni3000 = [ 
            "Odie", 
           
            "Zeng", 
          
            "Cane"
];
 var r3Cartoni3000 = [ 
            "Nermel", 
            
            "Po", 
           
            "Topo" 
];
 var r4Cartoni3000 = [  
            "Vetvix", 
             
            "Shifu", 
            
            "Gatto"
];
 var soluzioneCartoni3000 = [1, 3, 4]; 


//TIMER
		
		    var id;
             var sec;
            function moveCartoni3000() {
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
           tempoScadutoCartoni3000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeCartoni3000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaCartoni3000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Cartoni3000[x];
                document.getElementById("risp2").innerHTML = r2Cartoni3000[x];
                document.getElementById("risp3").innerHTML = r3Cartoni3000[x];
                document.getElementById("risp4").innerHTML = r4Cartoni3000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/garfield.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/po-2.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/tom-jerry-2.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveCartoni3000();
                disabilitaBottoni(); 
               
        }

//PONGO LA DOMANDA

                  function inizioCartoni3000() {
                 document.getElementById("cartoni3").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaCartoni3000(1)}; 
                 risp2.onclick = function() {valutaCartoni3000(2)};
                 risp3.onclick = function() {valutaCartoni3000(3)};
                 risp4.onclick = function() {valutaCartoni3000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                      
                 risposta++;
                 
                 generaDomandeCartoni3000();
        }

//CONTROLLO LE RISPOSTE

        function valutaCartoni3000(n){
            clearInterval(id);
            if (n == soluzioneCartoni3000[oldindice]) {
                montepremi += 3000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("cartoni3").style.backgroundColor = "green";
                document.getElementById("cartoni3").style.color = "white";
                 
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
                document.getElementById("cartoni3").style.backgroundColor = "red";
                document.getElementById("cartoni3").style.color = "white";
                 
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

        function tempoScadutoCartoni3000(){
                montepremi -= 3000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
             document.getElementById("cartoni3").style.backgroundColor = "red";
                document.getElementById("cartoni3").style.color = "white";
            }
            