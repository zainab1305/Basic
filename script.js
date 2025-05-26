let btn=document.querySelectorAll(".box");
let rbtn=document.querySelector("#reset-btn");
let currMode="X";
const win=[[0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]    
    ];
    let count =0;
btn.forEach(button => {
    button.addEventListener("click",() => {
    if(currMode=="X")
    {
        button.style.color="red"
        button.innerText="X";
        currMode="O";
        count++;
    }
    else{
        button.style.color="green"
        button.innerText="O";
        currMode="X";
        count++;
    }
    button.disabled="true";
    checkWinner();
    if(count===9)
    {
        document.querySelector(".score").innerText=" Tie";
    }
    
});    
});
rbtn.addEventListener("click", () => {
    btn.forEach(button => {
        currMode="X";
        button.disabled="false";
        button.innerText="";
        
    });
});
const checkWinner=() => {
    for(let pattern of win){
        let v1=btn[pattern[0]].innerText;
        let v2=btn[pattern[1]].innerText;
        let v3=btn[pattern[2]].innerText;
        if(v1 != "" && v2 != "" && v3 !="" )
        {
            if(v1===v2 && v2===v3)
            {
                console.log("wp");

                document.querySelector(".score").innerText=v1 + " won the game";
            }
        }
    }
}