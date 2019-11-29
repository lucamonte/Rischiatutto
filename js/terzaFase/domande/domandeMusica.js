var Domanda = ["Qual è il nome del cantautore italiano, Morandi?",                                                          //21 
               "A quanti chilometri orari andava Gianni Morandi in una sua celebre canzone?",                               //22
               "Come si chiamava il gruppo in cui cantava Cesare Cremonini prima che diventasse solista?",                  //23
               "Con quale mezzo Cesare Cremonini voleva portare in vacanza una persona nella canzone 50 Special?",          //24
               "Come si chiama la moglie di Gianni Morandi, da lui citata molto sui social network? (Nome)",                //25
               "Qual è il nome d'arte di Adelmo Fornaciari?",                                                               //26
               "Qual è il nome del famoso cantante Bublè?",                                                                 //27
               "Come si chiama la canzone del grande Adriano Celentano il cui titolo rappresenta un colore?",               //28
               "Di che gruppo faceva parte Eazy-E?",                                                                        //29
               " In quale festa significativa, per i Cristiani Cattolici, è nato il celebre rapper Guè Pequeno?"];           //30

var Soluzione = ["gianni",          //21
                 "100",             //22
                 "lunapop",         //23
                 "vespa",           //24
                 "anna",            //25
                 "zucchero",        //26
                 "michael",         //27
                 "azzurro",         //28
                 "nwa",             //29
                 "natale"];         //30

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