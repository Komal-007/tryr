var points=0
function letssee(){
    var b=document.querySelectorAll(".bubble")
    for(let i=0;i<b.length;i++){
    var c=Math.floor(Math.random()*80)
    var d=Math.floor(Math.random()*30)
    var l=c.toString()+'%'
    var m=d.toString()+'%'
    b[i].style.marginLeft=l
    b[i].style.marginTop=m
    
}
}
letssee()
const hr='<center><heading> Winner Winner </heading></center><center><button onclick="trier()" >Play Again</button></center>'
document.addEventListener('click',point)
function point(e){
    if(e.target.id=='b1'||e.target.id=='b2'||e.target.id=='b3'||e.target.id=='b4'||e.target.id=='b5'||
    e.target.id=='b6'||e.target.id=='b7'||e.target.id=='b8'||e.target.id=='b9'){
        const vr=document.getElementById(e.target.id)
        vr.style.backgroundColor="pink";
        points+=Number(vr.value)
        vr.value=0
    }
    if (points==9){
        
        const vl=document.querySelector(".container")
        vl.innerHTML=hr

    }
}

function trier(){
    window.location.reload()
}
