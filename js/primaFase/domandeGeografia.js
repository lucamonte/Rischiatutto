var Domanda = ["Qual è la capitale della Bulgaria?",                                                //1
               "Qual è il monte più alto d’Europa?",                                                //2
               "Ottawa è la capitale di quale Stato?",                                             //3
               "In quale città si trova la sede dell’ONU?",                                         //4
               "Qual è il capoluogo del Molise?",                                                   //5
               "Quale isola si trova sotto l’Australia?",                                           //6
               "Qual è la capitale della Turchia?",                                                 //7
               "Qual è la moneta del Marocco?",                                                    //8
               "Qual è la lingua ufficiale dei Paesi Bassi?",                                       //9
               "Che Stato ha come capitale Copenaghen?",                                            //10    
               "Qual è l'isola più grande della terra?",                                            //11
               "Qual è la provincia più ampia d’Italia?",                                           //12
               "Qual è la capitale del Brasile?",                                                   //13  
               "In quale nazione si trova il monte Ararat?",                                                    //14
               "In quale arcipelago si trova la città di Manila?",                                  //15
               "In quale città scorre principalmente l'Arno?",                                      //16
               "Quanti sono i cantoni svizzeri?",                                                   //17  
               "Quanti mori ci sono sulla bandiera della Sardegna?",                                //18
               "Quanti stati aderiscono all'UE?",                                                   //19
               "Quante strisce ci sono sulla bandiera americana?",                                  //20
               ];                                             //30

var Soluzione = ["sofia",               //1
                 "monteelbrus",         //2   
                 "canada",              //3
                 "newyork",             //4
                 "campobasso",          //5
                 "tasmania",            //6
                 "ankara",              //7
                 "dirham",              //8
                 "neerlandese",         //9
                 "danimarca",           //10
                 "groenlandia",         //11
                 "sassari",             //12
                 "brasilia",            //13
                 "turchia",             //14
                 "filippine",           //15
                 "firenze",             //16
                 "26",                  //17
                 "4",                   //18
                 "28",                  //19
                 "13",                  //20
                 ];            //30

    
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