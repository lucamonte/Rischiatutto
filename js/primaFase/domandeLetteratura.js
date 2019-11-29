var Domanda = ["In che città nacque Dante Alighieri?",                                                                  //1
               "Qual era il cognome del famoso poeta Dante?",                                                           //2
               "Qual è l'opera più importante composta da Dante?",                                                      //3
               "Cosa significa &quot;Convivio&quot; in italiano, nome dell'omonima opera di Dante?",                    //4
               "In che città nacque Giovanni Boccaccio?",                                                               //5
               "In che anno nacque Giovanni Boccaccio?",                                                                //6
               "Cosa significa il nome della famosissima opera di Boccaccio &quot;Decameron&quot;?",                    //7      
               "Qual'era il nome del padre di Boccaccio?",                                                              //8 
               "In che anno venne pubblicato ufficialmente il romanzo &quot;I Promessi Sposi&quot;?",                   //9
               "Quale autore scrisse il romanzo &quot;I Promessi Sposi&quot;? (Nome e cognome)",                        //10   
               "In che anno fu pubblicato &quot;Fermo e Lucia&quot; da Alessandro Manzoni?",                            //11
               "Qual era il cognome di Renzo, protagonista dei Promessi Sposi?",                                        //12   
               "Per quale malattia morì Don Rodrigo, personaggio dei Promessi Sposi? (5 lettere)",                      //13   
               "In che città morì Giovanni Pascoli?",                                                                   //14        
               "<i>&quot;Dai calici aperti si esala<br>l’odore di fragole rosse.<br>Splende un lume là nella sala.<br>Nasce l’erba sopra le fosse.&quot;<br></i> Qual è il nome di questa famosa poesia di Giovanni Pascoli? (3 parole)",                                                                                                                          //15      
               "Quale poesia di Manzoni si chiama come la data di morte di un famoso personaggio storico?",             //16    
               "Quale personaggio storico viene nominato da Manzoni nella sua celebre opera &quot;5 Maggio&quot;?",     //17   
               "<i>&quot;Nel campo mezzo grigio e mezzo nero...&quot;</i><br> Di che poesia di Pascoli si tratta?",     //18   
               "In che città nacque Giovanni Verga?",                                                                   //19   
               "Di quale corrente letteraria Verga è il maggior esponente?",                                            //20
               "In che anno nacque Umberto Eco?",                                                                       //21
               "Quale autore scrisse l'&quot;Orlando Furioso&quot;? (Nome e cognome)",                                  //22
               "Sotto quale pseudonimo è conosciuto lo scrittore Eric Arthur Blair?",                                   //23
               "Di che anno è il romanzo satirico &quot;La fattoria degli animali&quot;?",                              //24
               "Chi scrisse il romanzo &quot;Il giro del mondo in 80 giorni&quot;? (Nome e cognome)",                   //25    
               "Qual è il romanzo più famoso di Lev Nikolàevič Tolstòj?",                                               //26
               "Qual è l'opera più importante di William Shakespeare?",                                                 //27
               "In che anno morì Giosuè Carducci?",                                                                     //28
               "Chi fu il primo italiano a ricevere il nobel per la letteratura? (Nome e cognome)",                     //29
               "Chi scrisse la poesia &quot;Mattina&quot;? (nome e cognome)"                                            //30
               ];                                                                 

var Soluzione = ["firenze",                     //1
                 "alighieri",                   //2
                 "divinacommedia",              //3
                 "banchetto",                   //4
                 "certaldo",                    //5
                 "1313",                        //6
                 "diecigiorni",                 //7
                 "boccaccino",                  //8
                 "1840",                        //9
                 "alessandromanzoni",           //10
                 "1827",                        //11
                 "tramaglino",                  //12
                 "peste",                       //13
                 "bologna",                     //14
                 "ilgelsominonotturno",         //15
                 "5maggio",                     //16
                 "napoleone",                   //17
                 "lavandare",                   //18
                 "catania",                     //19
                 "verismo",                     //20
                 "1932",                        //21
                 "ludovicoariosto",             //22
                 "georgeorwell",                //23
                 "1945",                        //24
                 "julesverne",                  //25
                 "guerraepace",                 //26
                 "amleto",                      //27
                 "1907",                        //28
                 "giosuècarducci",              //29
                 "giuseppeungaretti"            //30
                 
                 
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