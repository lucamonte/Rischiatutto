var Domanda = ["Chi fu l'ultimo profeta dell'Islam?",                                                       //21
               "Dove morì Maometto?",                                                                       //22
               "Quale ideologia nacque in Germania nel 1933?",                                              //23
               "Cosa significa in italiano la parola Fuhrer?",                                              //24
               "Con che lettere erano riconosciute le 'squadre di protezione' tedesche durante la seconda guerra mondiale? (2 lettere)",                                                                                                   //25 
               "Dove avvenne l'assassinio dell'Arciduca Francesco Ferdinando d'Asburgo-Este, fatto che portò all'inizio del primo conflitto mondiale?",                                                                                        //26 
               "In che anno venne istituita la Magna Charta Libertatum?",                                   //27    
               "In che paese venne istituita la Magna Charta Libertatum?",                                  //28
               "Che forma di governo aveva Firenze durante l'età dei Comuni e delle signorie?",             //29
               "In che anno venne incoronato Carlo Magno?"];                                                //30

var Soluzione = ["maometto",        //21    
                 "medina",          //22
                 "nazismo",         //23
                 "capo",            //24
                 "ss",              //25
                 "sarajevo",        //26
                 "1215",            //27
                 "inghilterra",     //28    
                 "criptosignoria",  //29
                 "800"];            //30

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
                        
                        document.getElementById("risultato").innerHTML = "DOMANDA N°" + conta + "/5"; //Stampa risposta corretta nel div con id risultato 
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