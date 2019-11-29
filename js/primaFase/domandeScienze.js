var Domanda = ["Quanti chilogrammi bisogna pesare per diventare antiproiettile?",                           //01
			   "Quante tipi di specie viventi abitano in superficie e all'interno del nostro corpo?",		//02
			   "Qual è il nome del quinto punto sensoriale?",												//03
			   "Quanti centimetri è lunga la trachea?",														//04
			   "Che cosa si intende con la formula H<sub>2</sub>O?",										//05
			   "Quale simbolo ha l’elio nella tavola periodica degli elementi?",							//06
			   "Qual è il pianeta più lontano dal Sole nel Sistema Solare?",								//07
			   "Da chi fu introdotto il metodo scientifico?",												//08
			   "Quale metallo c’era dentro i vecchi termometri?",											//09
			   "Quale altro nome ha il saccarosio?",														//10
			   "Da chi fu scoperta la penicillina? (Cognome)",												//11
			   "Chi inventò la teoria delle stringhe? (Cognome)",											//12
			   "Quante sono le costole?",																	//13
               "Che nome ha la parte negativa dell’atomo?",													//14
			   "In quale paese fu inventata l’alchimia?",													//15
			   "Quale scienza si occupa dell’osservazione degli eventi celesti?",							//16
			   "Quale scienza studia l’universo nel suo complesso?",										//17
			   "Quale scienza matematica studia il piano e lo spazio?",										//18
			   "Qual è il sinomino per eccellenza di assunto in ambito scentifico?",					    //19	
			   "Chi inventò il telescopio? (Nome e cognome)",    											//20
               "Come si chiama la scienza che studia gli esseri viventi?",                                  //21      
               "Qual è l'unità fondamentale della vita secondo la biologia?",                               //22
               "Di che colore è la clorofilla?",                                                            //23
               "Qual è l'organo essenziale per la respirazione dei vertebrati?",                            //24
			   "Quale disciplina scientifica ha fornito la prova principale per la tettonica delle placche?",//25
               "Qual è l'unità di misura del tempo?",                                                       //26
               "L'anno luce indica lunghezza o tempo?",                                                     //27
               "Completa la frase:<br>                                                                                            <<Il teorema di ...... è un teorema della geometria euclidea che stabilisce<br>                                     una relazione fondamentale tra i lati di un triangolo rettangolo ed è una versione<br>                           limitata ad essi del teorema di Carnot.>>.",                                                 //28
               "Quale pianeta è denominato pianeta rosso?",                                                 //29    
               "Qual è il pianeta più vicino al Sole nel Sistema Solare?"                                   //30
              ];  														

var Soluzione = ["650",                     //1
				 "200",                     //2
				 "olfatto",                 //3
				 "12",                      //4
				 "acqua",                   //5
				 "he",                      //6
				 "nettuno",                 //7
				 "archimede",               //8
				 "mercurio",                //9
				 "zucchero",                //10
				 "fleming",                 //11
				 "einstein",                //12
				 "24",                      //13
				 "elettrone",               //14
				 "egitto",                  //15
				 "astronomia",              //16
				 "cosmologia",              //17
				 "geometria",               //18
				 "ipotesi",                 //19
				 "galileogalilei",         //20
                 "biologia",                //21
                 "cellula",                 //22
                 "verde",                   //23
                 "polmone",                 //24
                 "geologia",                //25
                 "secondo",                 //26
                 "lunghezza",               //27
                 "pitagora",                //28
                 "marte",                   //29
                 "mercurio"                 //30
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