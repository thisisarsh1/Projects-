let userseq =[];
let gameseq =[];
let btns = ['red','yellow','blue','green']
let gamestart=false;
let level = 0;

document.addEventListener("keypress",function(){
   if (gamestart == false){
    gamestart = true;
    levelUp();
    
   } 
})
function levelUp (){
    userseq=[]
    level++;
    let h2 = document.querySelector("h2");
    h2.innerText = (`Level - ${level}`);
    let randin = Math.floor(Math.random()*4)
    let randcol = btns[randin];
    let randbtn = document.querySelector(`.${randcol}`);
    flash(randbtn);
    gameseq.push (randcol)
    console.log(gameseq)
    
}
function flash(button){ 
        button.classList.add("flash")
        setTimeout(function(){
        button.classList.remove("flash")
    }, 350)
}
function reset (){
    gamestart = false;
    gameseq =[];
    userseq=[];
    level = 0;
}

function checkans (inx){
    if (userseq[inx] === gameseq[inx]){
        if (userseq.length=== gameseq.length)
        {setTimeout(levelUp(),1000)
        }
    // console.log("same value!")
    }
    else{let h2 = document.querySelector("h2");
        h2.innerText = `Game over! YOUR SCORE WAS -${level}
         press any key to reset!`;
        reset();
    }
}

function userflash(button){ 
  
    button.classList.add("userflash")
    setTimeout(function(){
    button.classList.remove("userflash")
}, 50)
}

    let allbtn = document.querySelectorAll(".button")
    for (butn of allbtn){
        butn.addEventListener("click",function()
        {console.log("Click ho gaya bhai ");
        userflash(this);
        let id=this.getAttribute("id")
        userseq.push(id)
        console.log(gameseq)
        checkans(userseq.length -1);
    })}
        
    
// let btnr = document.querySelector(".red")
// btnr.addEventListener("click",function(){
//     console.log("Click ho gaya bhai red!")
// })
// let btnb = document.querySelector("#blue")
// btnb.addEventListener("click",function(){
//     console.log("Click ho gaya bhai blue!")
// })
// let btng = document.querySelector("#green")
// btng.addEventListener("click",function(){
//     console.log("Click ho gaya bhai green!")
// })
// let btny = document.querySelector("#yellow")
// btny.addEventListener("click",function(){
//     console.log("Click ho gaya bhai yellow!")
// })