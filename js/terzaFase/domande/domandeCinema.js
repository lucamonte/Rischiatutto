
ar Domanda = ["Da quanti membri è composto il team degli Avengers?",                                                        //21
               "Come si chiama Leonardo di Caprio nel film Titanic? (Nome)",                                                 //22
               "Quanti sono i dalmata nel famoso film della Disney?",                                                        //23
               "Qual è il primo lungometraggio della Disney? (Titolo completo)",                                             //24                                           
               "Come si chiama la famosa canzone del film 'The Lego Movie'?",                                                //25                                      
               "Quanti film sono stati prodotti sui Transformers in live action?",                                           //26
               "Da quanti film è composta la saga di Paranormal Activity?",                                                  //27
               "Chi è il principale nemico di Superman?",                                                                    //28
               "Qual è il sito di streaming più usato in Italia",                                                            //29
               "Come si chiama la famosa animazione del 2015 che vede come protagoniste le emozioni di una giovane ragazzina?"];                                                                                                                               //30  

var Soluzione = ["6",                               //21
                 "jack",                            //22
                 "101",                             //23
                 "biancaneve e i sette nani",       //24
                 "è meraviglioso",                  //25
                 "5",                               //26
                 "6",                               //27
                 "lex luthor",                      //28
                 "cineblog01",                      //29
                 "inside out"];                     //30

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