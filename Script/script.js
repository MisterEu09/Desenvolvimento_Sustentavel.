function clickMenu(){
           if( itens.style.display == 'block'){
           itens.style.display ='none'
           }
           else{
            itens.style.display = "block"
           }
        }
var contS =1;
function spotify(){
    contS++
    if(contS==2){
    IframeS.style.display ='block'
    spot.style.display ='none'
        }
    else if(contS!=2)
    { 
        contS = 1;
        IframeS.style.display ='none'
       
        spot.style.display ='block'
    }

           
        }
        function mudouTamanho(){
            if (window.innerWidth>=742){
                itens.style.display = 'block'
            }
            else {
                itens.style.display ='none'
            }
            if(window.innerHTML < 700){
                itens.style.height= '500px'
            }
            /*if (window.innerWidth>=1300){
                CS1.style.display = 'block'
            }
            else {
                itens.style.display ='none'
            }
            if(window.innerHTML < 700){
                itens.style.height= '500px'
            }*/
        }