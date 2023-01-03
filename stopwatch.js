let milli=0;
let sec=0;
let min=0;
let hr=0;

let timedisplay = document.querySelector('#timedisplay');
let start= document.querySelector('#strt');
let pause = document.querySelector('#pause');
let reset = document.querySelector('#reset');

let stime=0;
let timepassed=0;
let timenow=0;
let paused = true;
let interval;

start.addEventListener("click", ()=>{
    if(paused){
        paused= false;
        start=Date.now() - timepassed;  //start=stime - timepassed;
        interval=setInterval(updateTime,15);
    }
});
pause.addEventListener("click", ()=>{
    if(!paused){
        paused= true;
        timepassed = Date.now()-start;  //timepassed = stime-start;
        clearInterval(interval);
    }
});
reset.addEventListener("click",()=>{
    paused=true;
    stime=0;
    timepassed=0;
    timenow=0;
    milli=0;
    sec=0;
    min=0;
    hr=0;
    timedisplay.textContent="00:00:00:000"
});

function updateTime(){
    stime+=15;
    timepassed = Date.now() - start;  //timepassed = stime - start;

    milli=Math.floor(timepassed%1000);
    sec=Math.floor((timepassed/1000)%60);
    min=Math.floor((timepassed/(1000*60))%60 );
    hr=Math.floor((timepassed/(1000*60*60))%60);

    sec=zeroes(sec);
    min=zeroes(min);
    hr=zeroes(hr);

    function zeroes(x)
    {
        if((("0")+x).length >2)
        {
            return x;
        }
        else
            return "0" + x;
    }

    console.log(sec, min, hr);
    timedisplay.textContent =  `${hr} : ${min} : ${sec} : ${milli}`;
}