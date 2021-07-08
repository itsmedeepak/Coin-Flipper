// animation: spin-tails 5s forwards;
//     animation: spin-heads 5s forwards;

var flip=document.querySelector('.flip');
var reset=document.querySelector('.reset');
var pic=document.querySelector('.pic');
var stat=document.querySelector('.stat');
var hd=0;
var tl=0;
flip.addEventListener('click',()=>{
    
    var i= Math.floor(Math.random()*2);
    pic.style.animation="none";
    if(i){
        setTimeout(function(){
            pic.style.animation="spin-heads 5s forwards";
            
        },100);
        hd++;
        
    }
    else{
        setTimeout(function(){
            pic.style.animation="spin-tails 5s forwards";
        },100);
        tl++;
        
    }
    setTimeout(updatestat,5000);
    disableButton();
    
});
function updatestat(){
    stat.innerHTML='<span class="head">Head : '+hd+'</span><br><span class="tail">Tail : '+tl+'</span>'
}
function disableButton(){
    flip.disabled=true;
    setTimeout(function(){
        flip.disabled=false;
    },5000);
}
reset.addEventListener('click',()=>{
    hd=0;
    tl=0;
    stat.innerHTML='<span class="head">Head : '+hd+'</span><br><span class="tail">Tail : '+tl+'</span>'
});
