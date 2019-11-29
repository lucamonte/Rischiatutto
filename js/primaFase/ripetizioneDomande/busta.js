var Busta = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; 
var Busta30 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

    function Carica () {
        
        var i=0, j, flag, d;
        
        
        while (i<10) {
            
            d = Math.floor(Math.random() * 20);

            flag = 0;
            
            for (j=0; j<i; j++) {
                
                if (Busta[j]==d)
                    flag = 1;   
            }
            
            if (flag==0) {
                
                Busta[i] = d;
                i++;
                
            }      
        }    
    }

function Carica30 () {
        
        var i=0, j, flag, d;
        
        
        while (i<10) {
            
            d = Math.floor(Math.random() * 30);

            flag = 0;
            
            for (j=0; j<i; j++) {
                
                if (Busta30[j]==d)
                    flag = 1;   
            }
            
            if (flag==0) {
                
                Busta30[i] = d;
                i++;
                
            }      
        }    
    }