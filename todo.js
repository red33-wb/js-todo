
 var inputtxt =   document.querySelector('#txt');
var btn = document.querySelector('#btn');
var div = document.querySelector('.items');
var dltbtn = document.querySelector('#dltbtn');


    



   btn.addEventListener('click',function(e){
   
    if(inputtxt.value){
        var storevalue = inputtxt.value;
        var createtxt = document.createElement('h3');
        var c = div.appendChild(createtxt)
        c.textContent=storevalue
      
        if(c.textContent=storevalue){
           inputtxt.value=''
        }
 
        
     }
     
     
     else{
       ''
    }
   }
    
   )
 

 

     


   

  

  
       