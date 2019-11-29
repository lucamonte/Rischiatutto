var Domanda = ["Quanti sono i film della saga di Harry Potter?",                                                              //1
               "Qual è il nome di Kristen Stewart in Twilight? (Nome)",                                                               //2
               "Qual è il cognome della famiglia di Robert Pattinson in Twilight?",                                           //3
               "Qual è il cognome di Tom Hanks quando deve interpretare il professore nel Codice da Vinci?",                  //4
               "Che tipo di romanzo è 'il Codice da vinci'?",                                                                 //5
               "Qual è la famosa setta citata nel film &quot;Angeli e Demoni&quot;?",                                                  //6  
               "Che materia insegna il professor Robert Langdon?",                                                            //7
               "Qual è il nome del padre di Michael Douglas?",                                                                //8   
               "Qual è il nome del film a cartone animato prodotto dalla Universal Pictures in cui c'è un concorso di canto?",//9
               
               "Nel titolo del secondo capitolo della saga &quot;50 sfumature di grigio&quot; il grigio viene sostituito da un altro colore, qual è? ",                                                                                                            //10
               "Da che studio di animazione è stato prodotto il film &quot;Il mio vicino Totoro&quot;?",                               //11    
               "Con quale film Leonardo di Caprio ha vinto l'oscar?",                                                        //12
               "Da quanti film è composta la saga di &quot;Fast & Furious&quot;?",                                                     //13
               "Come si chiamano i fedeli aiutanti di Gru in cattivissimo me?",                                              //14
               "Quanti oscar ha vinto Will Smith?",                                                                          //15
               "Come si chiama la ragazza di fuoco in &quot;Hunger Games&quot;? (Nome)",                                                 //16
               "Quanti lungometraggi su Spiderman ha prodotto la Marvel?",                                                   //17
               "Quanti film esistono su Pierino?",                                                                           //18
               "Come si chiama il miglior amico di Shrek?",                                                                  //19
               "Come  si chiama il fratello di Thor?",                                                                          //20
];                                                                                                                               //30  

var Soluzione = ["8",                               //1
                 "bella",                           //2
                 "cullen",                          //3
                 "langdon",                         //4
                 "thriller",                        //5
                 "illuminati",                      //6    
                 "simbologia",                      //7
                 "kirk",                            //8
                 "sing",                            //9
                 "nero",                            //10
                 "studioghibli",                   //11
                 "revenant",                        //12
                 "8",                               //13
                 "minions",                         //14
                 "2",                               //15
                 "katniss",                         //16
                 "5",                               //17
                 "3",                               //18
                 "ciuchino",                        //19
                 "loki",                            //20
            ];                     //30

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