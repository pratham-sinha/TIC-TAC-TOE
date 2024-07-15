let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let result=document.querySelector('.resultBox')


let curr="O";

const patterns=[
  [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
enableButtons=()=>{
  boxes.forEach((box)=>{
    box.disabled=false;
    box.innerText="";
  })
}
const newgame=()=>{
  curr="O";
  enableButtons(); 
  document.getElementById("resultBox").style.transform="scale(1)";
  document.getElementById("resultBox").style.border="none";
  result.innerText="Showdown Time";

}
const check=()=>{
    for(it of patterns){
        let a=boxes[it[0]].innerText
        let b=boxes[it[1]].innerText 
        let c=boxes[it[2]].innerText
        if(a!="" && a==b && a==c ){
        document.getElementById("resultBox").style.transform="scale(1.2)";
        document.getElementById("resultBox").style.border="1px solid black";
        result.innerText=`${boxes[it[0]].innerText} is the WINNER`;
        
        boxes.forEach((box)=>{
            box.disabled=true;
        })
       
        return true;
       }
    }
}
reset.addEventListener("click",()=>{
  newgame();
})

boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    if(curr==="O"){
       box.innerText="X";
       curr="X";
    }
    else{
        box.innerText="O";
        curr="O";
    }
    box.disabled=true;
    check();
    if(check()!=true){
    const flag=false;
    boxes.forEach((box)=>{
      if(box.innerText==""){
         flag=true;
         
      }
    })
    if(flag==false){
      result.innerText="UFF!! DRAW"
    }
  }
  });
});