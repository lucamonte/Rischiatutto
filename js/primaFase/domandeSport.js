var Domanda = ["Dove si sono svolte le Olimpiadi Invernali del 2006?",                                          //1
               "Di che nazionalità è Usain Bolt?",                                                              //2
               "In quale città si svolsero le prime olimpiadi?",                                                //3
               "Come si chiama la lega professionistica di pallacanestro in America?",                                 //4
               "Con quale stile di nuoto si inizia una gara con una parte di corpo già immersa?",               //5  
               "Di quale nazionalità è il tennista Rafa Nadal?",                                                //6
               "Le racchette da tennis una volta avevano un telaio di quale materiale?",                                     //7
               "In quale secolo venne inventato il Tennis? (Numeri romani)",                                    //8   
               "Quale fu la prima squadra di calcio in Italia?",                                                //9
               "In quale città giocano i Lakers?",                                                              //10
               "Dove si svolge ogni anno il Roland Garros?",                                                    //11          
               "In che città è nato Novak Djokovic?",                                                           //12
               "Chi sbagliò il rigore decisivo nella finale dei Mondiali 1994? (Cognome)",                      //13
               "In che anno vennero disputate le Olimpiadi a Seoul?",                                           //14
               "In quale torneo si affrontarono in finale le sorelle Williams nel 2008?",                       //15
               "Chi vinse l'edizione del 2007 del Pallone D'Oro?",                                              //16
               "Come si chiama il celebre motociclista Agostini?",                                              //17
               "In che anno la Juventus fu retrocessa in Serie B?",                                             //18
               "Di che nazionalità è il pilota di Formula 1 Sebastian Vettel?",                                 //19
               "In quale città ha vissuto la sua infanzia Valentino Rossi?",                                    //20
               "Qual è il cognome del portiere titolare della Juventus e della nazionale?",                     //21
               "Quale squadra di Serie A si allena a Castel Volturno?",                                         //22
               "Quale sport pratica Federica Pellegrini?",                                                      //23
               "Di quale nazionalità è Thibaut Curtois?",                                                       //24
               "Quale squadra europea detiene il record di Champions League vinte?",                            //25
               "Quale sport praticano i famosi &quot;All Blacks&quot;?",                                        //26
               "Di quanti giocatori è composta una squadra di basket?",                                         //27
               "Quale nazionale di pallanuoto è soprannominata &quot;Settebello&quot;?",                        //28
               "Quanti tocchi massimi possono essere effettuati da una squadra di pallavolo? (In numero)",      //29
               "In quale anno il beach volley è diventato uno sport olimpico?"                                  //30
               
    ];                             //30        

var Soluzione = ["torino",          //1
                 "giamaicana",      //2   
                 "olimpia",         //3  
                 "nba",             //4
                 "dorso",           //5
                 "spagnola",        //6
                 "legno",           //7
                 "xix",             //8
                 "genoa",           //9
                 "losangeles",     //10    
                 "parigi",          //11
                 "belgrado",        //12  
                 "baggio",          //13
                 "1988",            //14
                 "wimbledon",       //15
                 "kakà",            //16
                 "giacomo",         //17
                 "2006",            //18
                 "tedesca",         //19
                 "tavullia",        //20 
                 "buffon",          //21
                 "napoli",          //22
                 "nuoto",           //23
                 "belga",           //24
                 "realmadrid",     //25
                 "rugby",           //26
                 "5",               //27
                 "italia",          //28
                 "3",               //29
                 "1996"             //30
                 
                 
            ];           //30

    
            function generaDomande() {
           
            if (conta<=10) { //Conta il numero di cicli effettuati
                if (flag == 0) {
                    var x = Busta30 [z]; //Carica i numeri generati all'onload
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
                    var x = Busta30 [z]; //Carica i numeri generati all'onload
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