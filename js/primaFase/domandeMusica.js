var Domanda = ["In che anno è nato l’Hip Hop?",                                                                             //1
               "Come si chiamava il solista del gruppo &quot;The Doors&quot;?",                                             //2
               "Chi ha vinto l'edizione di X-Factor del 2016?",                                                             //3
               "Chi cantò la famosa canzone &quot;Gelato al cioccolato&quot;?",                                             //4
               "Con quale nome d’arte è anche conosciuto Marshall Bruce Mathers?",                                          //5
               "Qual è il nome d’arte di Anna Mazzini?",                                                                    //6
               "Con quale canzone Iva Zanicchi e Bobby  Solo vinsero Sanremo nel 1969?",                                    //7
               "Quale Nobel è stato assegnato a Bob Dylan?",                                                                //8  
               "Come si chiama il figlio del cantante spagnolo Julio Iglesias, noto per il successo “Duele el corazon”? (Nome)",//9
               "Chi canta la canzone &quot;Lost On You&quot; (2016)?",                                                      //10
               "Di quale Stato era originario il grandissimo Bob Marley?",                                                  //11
               "Qual è il nome d’arte di Michele Salvemini?",                                                               //12
               "Oltre a Pavarotti e Carreras, chi faceva parte dei tre tenori? (Cognome)",                                  //13 
               "Per quale malattia morì il grande Freddy Mercury?",                                                         //14
               "In che anno è nato Micheal Philip Jagger?",                                                                 //15
               "Chi è l'autore della canzone &quot;Otherside&quot;?",                                                       //16
               "Chi ha vinto la quindicesima edizione di Amici? (Nome)",                                                    //17
               "Di che nazionalità è Sergio Sylvestre, vincitore di Amici 2016?",                                           //18
               "In che città nacque il famosissimo Fabrizio de Andrè?",                                                     //19
               "Qual era il secondo nome di Fabrizio de Andrè?",                                                            //20
               "Chi canta la canzone &quot;Ragazzo Fortunato&quot;?",                                                       //21
               "Qual è lo pseudonimo del famoso chitarrista dei Guns N' Roses?",                                            //22
               "Quanti album sono stati pubblicati dai Beatles?",                                                           //23
               "In che anno venne assassinato John Lennon?",                                                                //24
               "Qual è stato il primo nome d'arte di Caparezza?",                                                           //25
               "Quale band del Regno Unito ha come simbolo una lingua?",                                                    //26
               "A quale artista si sono ispirati gli Articolo 31 per la realizzazione della loro canzone<br>                 &quot;Come una pietra scalciata&quot;?",                                                                     //27  
               "A chi appartiene la canzone &quot;Più bella cosa&quot;? (Cognome)",                                         //28   
               "Chi disse<br>&quot;Un giorno anche la guerra s'inchinerà al suono di una chitarra.&quot;? (Nome e cognome)",//29
               "Quale filosofo disse<br>&quot;La musica è per l'anima quello che la ginnastica è per il corpo.&quot;?"      //30
               ];         

var Soluzione = ["1973",            //1
                 "sting",           //2
                 "soulsystem",     //3 
                 "pupo",            //4
                 "eminem",          //5
                 "mina",            //6
                 "zingara",         //7
                 "letteratura",     //8
                 "enrique",         //9
                 "lp",              //10
                 "giamaica",        //11
                 "caparezza",       //12
                 "domingo",         //13
                 "aids",            //14
                 "1943",            //15
                 "macklemore",      //16
                 "sergio",          //17
                 "statunitense",    //18
                 "genova",          //19
                 "cristiano",       //20
                 "jovanotti",       //21
                 "slash",           //22
                 "23",              //23
                 "1980",            //24
                 "mikymix",         //25
                 "rollingstones",  //26
                 "bobdylan",       //27
                 "ramazzotti",      //28
                 "jimmorrison",    //29
                 "platone"          //30
                 
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