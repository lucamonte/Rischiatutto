var DomandaCartoni10000=[
 
            "Come si chiama la serie basata su un animale che fu una star della tv anni '90?", //10000
           
            "Qual è il nome del principe del film 'La Bella Addormentata'?", //10000
           
            "Chi muore più volte in 'Dragon Ball Z'?" //10000
           
            ];
var r1Cartoni10000 = [ 
             
            "Furia", 
           
            "Filippo",
           
            "Crillin"
];
 var r2Cartoni10000 = [ 
           
            "Todd", 
            
            "Marco",
           
            "Goku" 
];
 var r3Cartoni10000 = [ 
           
            "Spirit", 
           
            "Giovanni",
          
            "Tenshinhan"
 ];
 var r4Cartoni10000 = [  
            
            "Bojack", 
            
            "Luca",
             
            "Junior" 
            ];
 var soluzioneCartoni10000 = [4, 1, 2]; 


//TIMER
		
		    var id;
             var sec;
            function moveCartoni10000() {
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
           tempoScadutoCartoni10000();
           abilitaBottoni();  
       }
         else
           elem.innerHTML = sec ;}
    
  }
}

//GENERO IL NUMERO CASUALE

             var oldindice;
            function generaDomandeCartoni10000(){
                var x = Math.floor(Math.random() * 3); //Genera un numero casuale tra 0 e 9
                document.getElementById("domanda-tabellone").innerHTML = DomandaCartoni10000[x];/*Pone una domanda casuale 
                                                                       tra quelle presenti nel vettore*/
                document.getElementById("risp1").innerHTML = r1Cartoni10000[x];
                document.getElementById("risp2").innerHTML = r2Cartoni10000[x];
                document.getElementById("risp3").innerHTML = r3Cartoni10000[x];
                document.getElementById("risp4").innerHTML = r4Cartoni10000[x];
                if(x==0){
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/bojack-3.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                else if (x==1){
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/addormentata.png";
                    document.getElementById("img-tabellone").style.display = "inline";
                } 
                else {
                    document.getElementById("img-tabellone").src = "../img/tabellone/cartoni/dragonball-2.jpg";
                    document.getElementById("img-tabellone").style.display = "inline";
                }
                oldindice=x;
                moveCartoni10000();
                disabilitaBottoni();
               
               
                                
        }

//PONGO LA DOMANDA

                 function inizioCartoni10000() {
                 document.getElementById("cartoni10").onclick = function() {}; 
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
                 
                 risp1.onclick = function() {valutaCartoni10000(1)}; 
                 risp2.onclick = function() {valutaCartoni10000(2)};
                 risp3.onclick = function() {valutaCartoni10000(3)};
                 risp4.onclick = function() {valutaCartoni10000(4)};
                 
                 clearInterval(id);  
                 
                 document.getElementById("risultato").style.display = "block";
                    
                 risposta++;
                 
                 generaDomandeCartoni10000();
        }
        
//CONTROLLO LE RISPOSTE

        function valutaCartoni10000(n){
            clearInterval(id);
            if (n == soluzioneCartoni10000[oldindice]) {
                montepremi += 10000;
                document.getElementById("risultato").innerHTML = "RISPOSTA CORRETTA<br />Montepremi: " + montepremi;
                document.getElementById("cartoni10").style.backgroundColor = "green";
                document.getElementById("cartoni10").style.color = "white";
                 
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
                document.getElementById("cartoni10").style.backgroundColor = "red";
                document.getElementById("cartoni10").style.color = "white";
                 
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

     function tempoScadutoCartoni10000(){
                montepremi -= 10000;
                document.getElementById("risultato").innerHTML = "TEMPO SCADUTO<br />Montepremi: " + montepremi; 
                 
                risp1.disabled = true;
                risp2.disabled = true;
                risp3.disabled = true;
                risp4.disabled = true;
                
                document.getElementById("myBarTabellone").style.display = "none";
                document.getElementById("myProgressTabellone").style.display = "none";
          document.getElementById("cartoni10").style.backgroundColor = "red";
                document.getElementById("cartoni10").style.color = "white";
            }
            