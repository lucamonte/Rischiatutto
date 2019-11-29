var Busta = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];    

    function Carica () {
        
        var i=0, j, flag, d, conta; 
        
        
        while (i<10) {
            
            d = Math.floor(Math.random() * 10);

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