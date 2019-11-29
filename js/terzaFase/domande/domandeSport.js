var Domanda = ["In quale città è nato Zinedine Zidane?",                                                        //21
               "Quale squadra francese arrivò in finale di Champions League nell'edizione 2003-04?",            //22
               "Quale stadio ospita principalmente le partite della nazionale Brasiliana?",                     //23  
               "Sul tracciato di quale città corse la sua ultima gara Ayrton Senna?",                           //24  
               "Quale scuderia detiene il record di vittore in Formula 1?",                                     //25
               "In che anno si svolsero le Olimpiadi a Pechino?",                                               //26
               "Come si chiama la Federazione di Atletica Leggera?",                                            //27
               "Chi detiene il record mondiale di elevazione nel salto con l'asta maschile? (Cognome)",         //28  
               "Di quale materiale è composto il Vortex?",                                                      //29
               "In che anno il Leicester ha vinto il suo primo storico scudetto?"];                             //30        

var Soluzione = ["marsiglia",       //21
                 "monaco",          //22
                 "maracanà",        //23  
                 "imola",           //24
                 "ferrari",         //25  
                 "2008",            //26
                 "iaaf",            //27
                 "lavillenie",      //28
                 "plastica",        //29
                 "2016"];           //30

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
                        
                        document.getElementById("risultato").innerHTML = "DOMANDA N°" + conta + "/5"; //stampa risposta corretta nel div con id risultato 
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