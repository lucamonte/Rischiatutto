var Domanda = ["Come si chiama il quadro più famoso di Leonardo Da Vinci?",                                     //1
               "Quale pittore era fissato con i girasoli? (Cognome)",                                                     //2
               "Di che nazionalità era il famoso artista Caravaggio?",                                          //3
               "Chi ha realizzato L'uomo vitruviano? (Nome)" ,                                                  //4
               "Di quale artista sono noti i tagli nella tela? (Cognome)",                                      //5     
               "Quale artista dell’arte povera fa di nome Mario?",                                              //6
               "Chi fu il principale fondatore del movimento cubista insieme a Pablo Picasso? (Cognome)",       //7
               "Da chi è stato dipinto il famoso quadro “Guernica”?",                                           //8
               "Chi ha realizzato la scultura “La Pietà”? (Nome)",                                              //9
               "Chi ha dipinto la cappella Sistina? (Nome)",                                                    //10
               "Chi ha dipinto “Il Cesto di Mele”? (Cognome)",                                                  //11          
               "A quanti anni è morto Vincent Van Gogh?",                                                               //12
               "A quanti anni è morto leonardo da Vinci?",                                                      //13
               "A quanti anni è morto Pablo Picasso?",                                                          //14
               "Chi scolpì il monte Rushmore? (Cognome)",                                                       //15  
               "Chi ha realizzato “Amore e Psiche”? (Cognome)",                                                 //16
               "Di quale artista di strada sono note le opere ma non il suo nome?",                             //17
               "Chi ha dipinto “Il Bacio”? (Cognome)",                                                          //18
               "Chi ha dipinto la  “Nascita di Venere”? (Cognome)",                                             //19
               "Chi ha scolpito il famoso “David” agli inizi del XVI secolo? (Nome)",                           //20
               ];                                         //30        

var Soluzione = ["gioconda",            //1
                 "vangogh",            //2
                 "italiana",            //3   
                 "leonardo",            //4  
                 "fontana",             //5
                 "merz",                //6
                 "braque",              //7
                 "picasso",             //8
                 "michelangelo",        //9
                 "michelangelo",        //10
                 "cezanne",             //11
                 "37",                  //12
                 "67",                  //13
                 "91",                  //14
                 "borglum",             //15
                 "canova",              //16
                 "banksy",              //17
                 "klimt",               //18
                 "botticelli",          //19  
                 "michelangelo",        //20
            ];            //30

  
	var conta = 1;
    var oldx;
    var esatte = 0;
    var flag = 0;
    var z = 0;
    var monte = 0;
            function generaDomande() {
           
            if (conta<=10) { //Conta il numero di cicli effettuati
                if (flag == 0) {
                    var x = Busta [z]; //Carica i numeri generati all'onload
                    z++;                
                    
                    document.getElementById("textfield").style.display = "block"; //Mostra la barra
                    document.getElementById("question").className = "domanda";    //Cambia la classe al div con la domanda
                    
                    document.getElementById("question").innerHTML = Domanda[x]; //Pone una domanda casuale tra quelle presenti nel vettore
                    document.getElementById("bottone").innerHTML = "DOMANDA SUCCESSIVA"; //Sostituisce il valore "INIZIA" con "DOMANDA SUCCESSIVA"
					document.getElementById("risultato").innerHTML = "DOMANDA N°" + conta + "/10"; //Cntatore delle domande
                    document.getElementById("textfield").focus(); //Sposta il cursore nella casella di risposta
                    oldx = x; //Pone oldx uguale a x
                    flag = 1; //Pone il flag uguale a 1
                    clearInterval(id); //Reset timer
                    move();  //Riavvio timer
					conta++; //Incrementa la variabile contatore
                }

                else {

                    var risp = document.getElementById('textfield').value; //Ritorna il valore digitato
                    var minuscolo = risp.toLowerCase(); //Trasforma la risposta in tutto minuscolo
                    var nospace = minuscolo.replace(' ', ''); //Rimuove gli spazi tra le parole
                    var trim = nospace.trim(); //Rimuove gli spazi prima e dopo la risposta
                    var giusto = trim.localeCompare(Soluzione[oldx]);  //Compara risposta data e soluzione  

                    if (giusto == 0) { //Se le due risposte sono uguali
                        esatte++; ///Incrementa esatte
                        monte = esatte * 3000; //Calcolo del montepremi
                        document.getElementById("risultato").innerHTML = "DOMANDA N°" + conta + "/10" + "<br>RISPOSTA CORRETTA - Montepremi: " + monte; //Stampa numero domanda e montepremi 
                        document.getElementById("textfield").value = ""; //Svuota la barra
                        conta++; //Incrementa il contatore dei cicli
                        clearInterval(id); //Reset timer
                        move(); //Riavvio timer
                    }

                    else {
                        monte = esatte * 3000; //Calcolo del montepremi
                        document.getElementById("risultato").innerHTML = "DOMANDA N°" + conta + "/10" + "<br>RISPOSTA ERRATA - Montepremi: " + monte; //Stampa numero domanda e montepremi 
                        document.getElementById("textfield").value = ""; //Svuota la barra
                        conta++; //Incrementa il contatore dei cicli    
                        clearInterval(id); //Reset timer
                        move(); //Riavvio timer

                    }
                    var x = Busta [z]; //Carica i numeri generati all'onload
                    z++; //Incrementa z


                    document.getElementById("question").innerHTML = Domanda[x]; //Pone una domanda casuale tra quelle presenti nel vettore
                    document.getElementById("bottone").innerHTML = "DOMANDA SUCCESSIVA"; //Sostituisce il valore "INIZIA" con "DOMANDA SUCCESSIVA"
                    document.getElementById("textfield").focus(); //Sposta il cursore nella casella di risposta
                    oldx = x; //Pone oldx uguale a x 
                    clearInterval(id); //Reset timer
                    move(); //Riavvio timer
                }

            }
                
            
                
                 else { 
                        valutaUltima(); //Funzione che valuta l'ultima domanda
                }
                
                } 
  

//FUNZIONE CHE VALUTA L'ULTIMA DOMANDA
//COME SOPRA

    function valutaUltima () {
                    var risp = document.getElementById('textfield').value; //Ritorna il valore digitato
                    var minuscolo = risp.toLowerCase(); //Trasforma la risposta in tutto minuscolo
                    var nospace = minuscolo.replace(' ', ''); //Rimuove gli spazi tra le parole
                    var trim = nospace.trim(); //Rimuove gli spazi prima e dopo la risposta
                    var giusto = trim.localeCompare(Soluzione[oldx]);  //Compara risposta data e soluzione
        
                    if (giusto == 0) { //se giusto è uguale a zero (quindi le due risposte sono uguali) 
                        esatte++;
                        monte = esatte * 3000;
                        document.getElementById("risultato").innerHTML = "DOMANDA N°" + conta + "/10" + "<br>RISPOSTA CORRETTA - Montepremi: " + monte; //stampa risposta corretta nel div con id risultato 
                        document.getElementById("textfield").value = "";
                        conta++;
                        clearInterval(id);
                        move();
                        localStorage.setItem("rCorrette", esatte); //Imposta il montepremi nello storage
                        window.location.href="../riepilogo-prima-fase.html"; //Redirect al riepilogo
                    }
        
        else {
                        localStorage.setItem("rCorrette", esatte); //Imposta il montepremi nello storage
                        window.location.href="../riepilogo-prima-fase.html"; //Redirect al riepilogo
        }
}