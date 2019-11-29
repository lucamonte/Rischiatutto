function getNome(){
                var controllo = "";
                var nome = document.getElementById("nome").value;
                var trim = nome.trim();
                var compare = trim.localeCompare(controllo);
                if (compare==0)
                    document.getElementById("nessun-nome").innerHTML = "Non hai inserito nessun nome! Inseriscine uno prima di proseguire!<br>";
                else {
                localStorage.setItem("nome", nome);    
                location.href="html/regolamento.html"; 
            }
}