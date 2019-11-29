var Domanda = ["In che anno iniziò la prima guerra mondiale per l'Italia?",                                 //1
               "In che anno finì la prima guerra mondiale per la Russia?",                                  //2
               "Qual è il nome della famosa rivoluzione Russa del 1917?",                                   //3
               "In che anno venne scoperta l'America?",                                                     //4
               "Da che penisola del Mediterraneo fu finanziata la scoperta dell’America?",                  //5
               "L'italia vinse la prima guerra mondiale?",                                                  //6
               "In che anno iniziò la seconda guerra mondiale?",                                            //7
               "In che mese l’Italia entrò in guerra durante la Seconda Guerra Mondiale?",                  //8
               "In che anno finì la Seconda Guerra Mondiale?",                                              //9
               "In che anno morì Benito Mussolini?",                                                        //10
               "In che città morì Benito Mussolini?",                                                       //11
               "A che anno viene attribuito l'inizio del Medioevo?",                                        //12
               "Che anno del Medioevo è definito come l'anno della svolta?",                                //13
               "Durante quale festività venne incoronato Carlo Magno?",                                     //14
               "Quale età precede il Medioevo?",                                                            //15               
               "In che anno iniziò la Guerra dei Cent'anni?",                                               //16
               "Quanti anni effettivi durò la Guerra dei Cent'anni?",                                       //17
               "In quale Stato del Regno Unito fu combattuta la Guerra delle due rose?",                    //18        
               "Quale fu la famiglia vincente della Guerra delle due rose?",                                //19
               "In che anno finì la Guerra delle due Rose?",                                                //20
               "In che anno finì il Medioevo?",                                                             //21        
               "In che anno cadde l'Impero Romano 'Occidente?",                                             //22
               "Come si chiama il periodo compreso tra il XIV e il XVI secolo?",                            //23
               "Quale leader fascista italiano si alleò con Hitler durante la 2<sup>a</sup> guerra mondiale? (Cognome)",//24
               "In che anno avvenne l'unità d'Italia?",                                                     //25
               "Le repubbliche marinare più conosciute dopo l'800 erano Pisa, Venezia, Genova e...",        //26
               "In che anno morì Maometto?",                                                                //27
               "Quale popolo costruì le piramidi?",                                                         //28
               "Quale moderna regione italiana fu occupata dai Longobardi?",                                //29
               "Qual è il moderno nome della città di New Orange?"                                          //30
               
  ];                                                

var Soluzione = ["1915",            //1
                 "1917",            //2
                 "bolscevica",      //3   
                 "1492",            //4
                 "iberica",         //5   
                 "si",              //6
                 "1939",            //7
                 "giugno",          //8
                 "1945",            //9
                 "1945",            //10
                 "giulino",         //11    
                 "476",             //12
                 "1000",            //13
                 "natale",          //14
                 "antica",          //15  
                 "1337",            //16
                 "116",             //17    
                 "inghilterra",     //18
                 "lancaster",       //19
                 "1485",            //20
                 "1492",            //21
                 "476",             //22
                 "rinascimento",    //23    
                 "mussolini",       //24
                 "1861",            //25
                 "amalfi",          //26
                 "632",             //27
                 "egizi",           //28
                 "lombardia",       //29
                 "newyork"          //30
                 
                ];            

   
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