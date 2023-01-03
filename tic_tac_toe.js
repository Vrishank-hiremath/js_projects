const cells= document.querySelectorAll(".cell");
const statusText= document.querySelector("#statusTxt");
const reset = document.querySelector("#reset");
const winn=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]; 

let options=["","","","","","","","",""];
let run=false;
let fplay="X";
let cot=0;

newgame();

function newgame()
{
    cells.forEach(cell => cell.addEventListener("click", cellclick));
    reset.addEventListener("click" , restartgame);
    statusText.textContent=`${fplay}'s turn`;
    run=true;
}

function restartgame()
{
    fplay="X";
    options=["","","","","","","","",""];
    statusText.textContent=`${fplay}'s turn`;
    cells.forEach(cell=>cell.textContent="");
    run=true;
}

function cellclick()
{
    
    let cellidx=this.getAttribute("cellidx");
    if(options[cellidx] != "" || run==false)
    {
        return;
    }
    else
    {
        updatecell(this, cellidx);
        cot++;
        if(cot>=5)
        {
            let j = checkwinn();
            if (j == true) 
                return;
        }
        chngplyr();
        if(cot>=8)
        {
            checkdraw();
        }
    }
} 

function updatecell(cell, ix)
{
    options[ix]= fplay;
    cell.textContent = fplay;
    console.log(options);
}
function chngplyr()
{
    if(fplay=="X")
    {
        fplay="O";
    }
    else
    {
        fplay="X";
    }
    statusText.textContent = `${fplay}'s turn`;
}

function checkdraw()
{
    if(!options.includes(""))
        {
            statusText.textContent="Draw";
            run=false;
        }
}

function checkwinn()
{
    let won=false;
    let cellA;
    let cellB;
    let cellC;
    for(let i=0; i<winn.length; i++)
    {
        let tmp=winn[i];
        cellA=options[tmp[0]];
        cellB=options[tmp[1]];
        cellC=options[tmp[2]];
        
        if(cellA == "" || cellB == "" || cellC =="")
        {continue;}

        if(cellA==cellB && cellB == cellC)
        {
            won=true;
            break;
        }
    }

    console.log(won);
    if(won)
    {
        statusText.textContent=`${fplay}'s win`;
        run=false;
        return true;
    }
    return false;
}