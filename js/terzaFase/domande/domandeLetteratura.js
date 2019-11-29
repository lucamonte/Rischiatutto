var Domanda = ["Qual è il romanzo più conosciuto e importante per Giovanni Verga?",                                  //21   
               "In che paese vivevano i Malavoglia?",                                                                //22
               "Come si chiama il protagonista del romanzo 'Il Commissario Montalbano' di Camilleri? (nome)",        //23
               "Dove nacque Giacomo Leopardi?",                                                                      //24
               "In che anno nacque Giacomo Leopardi?",                                                               //25
               "Dove morì Giacomo Leopardi?",                                                                        //26
               "In che anno nacque Dante Alighieri?",                                                                //27
               "A quanti anni Dante compose la Divina Commedia?",                                                    //28
               "Chi accompagnò Dante nell'Inferno?",                                                                 //29
               " Chi era la donna amata da Dante?"];                                                                  //30

var Soluzione = ["i malavoglia",                //21
                 "aci trezza",                  //22
                 "salvo",                       //23
                 "recanati",                    //24
                 "1798",                        //25
                 "napoli",                      //26
                 "1265",                        //27    
                 "35",                          //28
                 "virgilio",                    //29
                 "beatrice" ];                  //30

    var conta = 1;
    var oldx;
    var esatte = 0;
    var flag = 0;
    var z = 0;
    
            function generaDomande() {
           
            if (conta<=4) {
                if (flag == 0) {
                    var x = Busta [z];
                    z++;                
                    
                    document.getElementById("textfield").style.display = "block";
                    document.getElementById("question").className = "domanda";  
                    
                    document.getElementById("question").innerHTML = Domanda[x]; //Pone una domanda casuale tra quelle presenti nel vettore
                    document.getElementById("bottone").innerHTML = "CONTROLLA RISPOSTA"; 
                    document.getElementById("risultato").innerHTML = "DOMANDA N°" + conta + "/5";
                    document.getElementById("textfield").focus(); //sposta il cursore nella casella di risposta
                    oldx = x;
                    flag = 1;
                    clearInterval(id);
                    move();  
                }

                else {

                    var risp = document.getElementById('textfield').value; //Ritorna il valore digitato
                    var minuscolo = risp.toLowerCase(); //Trasforma la risposta in tutto minuscolo
                    var nospace = minuscolo.replace(' ', ''); //Rimuove gli spazi tra le parole
                    var trim = nospace.trim(); //Rimuove gli spazi prima e dopo la risposta
                    var giusto = trim.localeCompare(Soluzione[oldx]);  //Compara risposta data e soluzione  

                    if (giusto == 0) { //se giusto è uguale a zero (quindi le due risposte sono uguali) 
                        esatte++;
                        conta++;
                         
                        document.getElementById("risultato").innerHTML = "DOMANDA N°" + conta + "/5";
                        document.getElementById("textfield").value = "";
                    }

                    else {
                        window.location.href="../hai-perso.html";
                    }
                    var x = Busta [z];
                    z++;   


                    document.getElementById("question").innerHTML = Domanda[x]; //Pone una domanda casuale tra quelle presenti nel vettore
                    document.getElementById("bottone").innerHTML = "CONTROLLA RISPOSTA"; //Sostituisce il valore "INIZIA" con "DOMANDA SUCCESSIVA"
                    document.getElementById("textfield").focus();//sposta il cursore nella casella di risposta
                    oldx = x;   
                }

            }
                
            
                
                else { 
                        valutaUltima();
                }
                
                } 
                
 var id;
 var sec;

                   function move() {
                    var elem = document.getElementById("myBar");
                    var progress = document.getElementById("myProgress");
                    var width = 0;
                    elem.style.display = "block";
                    progress.style.display = "block";
                elem.style.width = width+"%";
                id = setInterval(frame, 1000);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width+=1.125; 
            elem.style.width = width+"%"; 
            sec=width/1.125;
            if(sec>=89){
                window.location.href="../hai-perso.html";
            }
            else
                elem.innerHTML = sec ;}
    
  }
} 

    function valutaUltima () {
                    var risp = document.getElementById('textfield').value; //Ritorna il valore digitato
                    var minuscolo = risp.toLowerCase(); //Trasforma la risposta in tutto minuscolo
                    var nospace = minuscolo.replace(' ', ''); //Rimuove gli spazi tra le parole
                    var trim = nospace.trim(); //Rimuove gli spazi prima e dopo la risposta
                    var giusto = trim.localeCompare(Soluzione[oldx]);  //Compara risposta data e soluzione
        
                    if (giusto == 0) { //se giusto è uguale a zero (quindi le due risposte sono uguali) 
                        esatte++;
                        
                        document.getElementById("risultato").innerHTML = "DOMANDA N°" + conta + "/5";  
                        document.getElementById("textfield").value = "";
                        conta++;
                        clearInterval(id);
                        move();
                        window.location.href="../hai-vinto.html"; //Redirect alla pagina "Hai Vinto"
                    }
        
        else {
                        window.location.href="../hai-perso.html"; //Redirect alla pagina "Hai Perso"
        }
}