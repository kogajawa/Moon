let  stars = document.getElementById("stars");
let moon =  document.getElementById("moon");
let mountains3= document.getElementById("mountains3");
let mountains4= document.getElementById("mountains4");
let  river= document.getElementById("river");
let boat= document.getElementById("boat");
let main = document.querySelector('.main')

window.onscroll = function(){
    let values = scrollY ;
    stars.style.left = values + 'px' ;
    moon.style.top = values*5 + 'px';
    boat.style.left = values*3 +'px';
    river.style.top = values  +'px';
    mountains3.style.top = values *2 + 'px' ;
    mountains4.style.top = values *1.5 + 'px' ;
    if(scrollY >= 63){
        
        main.style.background = 'linear-gradient(#376281 , #10001f)' 
    }else{
        main.style.background = 'linear-gradient(#200016 , #10001f)'
    }


}

