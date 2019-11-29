//TIMER
                


            function move() {
                    clearInterval(id);
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
            width+=4; 
            elem.style.width = width+"%"; 
            sec=width/4;
            if(sec>=25){
                elem.innerHTML="Tempo Scaduto";
                generaDomande();
                move();
            }
            else
                elem.innerHTML = sec ;}
    
  }
}  
